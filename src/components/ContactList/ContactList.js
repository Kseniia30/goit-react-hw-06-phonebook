import PropTypes from 'prop-types';
import { ContactDeleteBTN, ContactMainList, ContactStyledItem } from './ContactList.styled';

export const ContactList = ({ filtered, onDelete }) => {
    return (
    <ContactMainList>
        {filtered().map(({ id, name, number }) => {
            return (
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    onDelete={onDelete} />
            );
        })}
    </ContactMainList>
    );
};

const ContactItem = ({ id, name, number, onDelete }) => {
    return (
        <ContactStyledItem>
            {name}: {number}
            <ContactDeleteBTN type="button" onClick={() => onDelete(id)}>Delete</ContactDeleteBTN>
        </ContactStyledItem>
    );
};

ContactList.propTypes = {
    filtered: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

ContactItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
    
}