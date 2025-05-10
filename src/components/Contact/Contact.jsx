import css from './Contact.module.css';

export default function Contact({ data, onDelete }) {
  return (
    <div className={css.contact}>
      <p>
        {data.name}: {data.number}
      </p>
      <button onClick={() => onDelete(data.id)}>Delete</button>
    </div>
  );
}