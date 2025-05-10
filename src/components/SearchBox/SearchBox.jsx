import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const dispatch = useDispatch();
  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
}