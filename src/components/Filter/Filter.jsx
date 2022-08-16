import { useDispatch } from 'react-redux';
import { actions } from 'redux/actions';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const onChange = evt => {
    dispatch(actions.chahgeFilter(evt.currentTarget.value));
  };

  return (
    <label className={css.filter__label}>
      Find contacts by name 
      <input
        className={css.filter__input}
        type="text"
        onChange={onChange}
        />
    </label>
  )
}

export default Filter;