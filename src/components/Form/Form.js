import PropTypes from 'prop-types';
import { FormBox, LabelBox, MainInput, AddBTN } from "./Form.styled";

export const SubmitForm = ({onFormSubmit}) => {

        return (
            <FormBox onSubmit={onFormSubmit}>
                <LabelBox>Name <br/>
                    <MainInput
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required/>
                </LabelBox> <br/>
                <LabelBox>Number <br/>
                    <MainInput
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required/>
                </LabelBox> <br/>
                <AddBTN type="submit">Add contact</AddBTN>
            </FormBox>
    )
}
        
SubmitForm.propTypes = {
    onFormSubmit: PropTypes.func.isRequired
}