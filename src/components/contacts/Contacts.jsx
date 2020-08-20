import React from 'react';
import style from './Contacts.module.css';
import { Redirect } from 'react-router-dom';
import Contact from './Contact';
import { maxLengthCreator, required } from '../../validators/validators';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/formControls/FormControls';


const Contacts = (props) => {
    if (!props.auth.isAuth) return <Redirect to={"/login"} />
    let onAddContact = (values) => {
        props.addContact(values.newContact, values.number);
    }

    return (

        <div className={style.contacts}>
            <AddContactFormRedux onSubmit = {onAddContact}/>
            <div>
                {props.auth.phonebook.map(p => <Contact phonebook={p} 
                key={p.id}
                deleteContact = {props.deleteContact}
                editContact = {props.editContact}
                updateContact = {props.updateContact} />)}              
                
            </div>
        </div>
    )
}

const maxlength50 = maxLengthCreator(50)
const maxlength15 = maxLengthCreator(15)

const AddContactForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} 
                validate={[required, maxlength50]}
                name='newContact'
                placeholder='Введите фамилию и имя' />
                <Field component={Textarea} 
                validate={[required, maxlength15]}
                name='number'
                placeholder='Введите номер телефона' />
 <div>
        <button className = {style.addContactB}>Добавить</button>
      </div>

        </form>
    );
}
const AddContactFormRedux = reduxForm({ form: 'contactsAddContactForm' })(AddContactForm);
export default Contacts;