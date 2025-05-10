import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { addContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

const schema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required'),
  number: Yup.string().required('Required'),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  
  const handleSubmit = (values, { resetForm }) => {
    const newContact = { id: nanoid(), ...values };
    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </label>
        <label>
          Number
          <Field type="tel" name="number" />
          <ErrorMessage name="number" component="div" />
        </label>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
}