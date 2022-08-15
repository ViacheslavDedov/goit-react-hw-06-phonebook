import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { actions } from 'redux/actions';
import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number }) => {
    const dispatch = useDispatch();
    return (
        <li key={id} className={css.contacts__item}>
    <p>
        {name}:&nbsp; 
        <span>
        {number}
        </span>
    </p>
    <button
        className={css.contacts__btn}
        type="button"
        onClick={() => dispatch(actions.delContact(id))}
    >
        Delete
    </button>
</li>
    )
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;