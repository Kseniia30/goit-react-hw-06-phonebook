import { ContactSection } from "components/ContactSection/ContactSection";
import { SubmitForm } from "components/Form/Form";
import { Container, Title } from "./App.styled";
import { nanoid } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import { addContact, deleteContact, findContact } from 'redux/slices'

export const AppForm = () => {
    const dispatch = useDispatch()
    const contacts = useSelector(state => state.contacts)
    const filtered = useSelector(state => state.filteredContacts)

    const addFormInfo = evt => {
        evt.preventDefault()
        const form = document.querySelector("#root > div > form")
        const name = evt.target.elements.name.value
        const number = evt.target.elements.number.value

        const allContactsName = contacts.map(contact => contact.name.toLowerCase())
        
        if (allContactsName.includes(name.toLowerCase())) {
            alert(`${name} is already in contacts`)
        }
        else {
            dispatch(addContact({ id: nanoid(), name, number }))
        }
        form.reset()
    }

    const onDeleteContact = (id) => {
        dispatch(deleteContact(id))
    }
    const filterChange = (evt) => {
        dispatch(findContact(evt.target.value))
    }
    const filtering = () => {
        const normalizedFilter = filtered.toLowerCase();
        if (filtered.length) {
            return contacts.filter(contact =>
                contact.name.toLowerCase().includes(normalizedFilter),
            )
        } else {
            return contacts;
        }
    }


    return (
        <Container>
            <Title>Phonebook</Title>
            <SubmitForm onFormSubmit={addFormInfo}/>
            {contacts.length !== 0 &&
                <ContactSection value={filtered} onChange={filterChange} filterItem={filtering} onDelete={onDeleteContact} />
            }
        </Container>
        )
}