import React, { useState, useEffect} from 'react';
import style from './Contacts.module.css'


const Contact = ({ phonebook, deleteContact, updateContact}) => {

        
        let [editMode, setEditMode] = useState(false);

        let [contacts, setContact] = useState(phonebook.name + phonebook.phone);
        useEffect(() => {
                setContact(phonebook.name + phonebook.phone);
        }, [phonebook.name + phonebook.phone]);


        const activateEditMode = () => {
                setEditMode(true);
        }
        const diactivateEditMode = (id, name, phone) => {
                setEditMode(false);
                updateContact(id, name, phone);
        }
        const onContactChange = (e) => {
                setContact(e.currentTarget.value)
        }
        return (
                <div>

                        <div className={style.name}> {phonebook.name}</div>
                        <div className={style.phone}>{phonebook.phone}</div>
                        {!editMode &&
                                <span><button onClick={activateEditMode}
                                        className={style.contactButton}>Редактировать</button></span>
                        }
                        {editMode &&
                                <div>
                                        <input onChange={onContactChange}
                                                autoFocus={true}
                                                onBlur={diactivateEditMode}
                                                value={phonebook.name + phonebook.phone} />
                                </div>
                        }

                        <span><button onClick={() => { deleteContact(phonebook.id); }}
                                className={style.contactButton}>Удалить</button></span>
                </div>
        )
}
export default Contact;