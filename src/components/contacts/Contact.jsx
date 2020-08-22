import React, { useState, useEffect } from 'react';
import style from './Contacts.module.css'


const Contact = ({ phonebook, deleteContact, updateName, updatePhone }) => {


        let [editMode, setEditMode] = useState(false);

        let [names, setName] = useState(phonebook.name);
        useEffect(() => {
                setName(phonebook.name);
        }, [phonebook.name]);

        let [phones, setPhone] = useState(phonebook.phone);
        useEffect(() => {
                setPhone(phonebook.phone);
        }, [phonebook.phone]);


        const activateEditMode = () => {
                setEditMode(true);
        }
        const diactivateEditMode = () => {
                setEditMode(false);
                updateName(phonebook.id, names);
                updatePhone(phonebook.id, phones);
        }
        const onNameChange = (e) => {
                setName( e.currentTarget.value)
        }

        const onPhoneChange = (e) => {
                setPhone( e.currentTarget.value)
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
                                        <div onBlur={diactivateEditMode}>
                                                <div>
                                                        <input onChange={onNameChange}
                                                                
                                                                value={names} />
                                                </div>
                                                <div>
                                                        <input onChange={onPhoneChange}
                                                               
                                                                value={phones} />
                                                </div>
                                        </div>
                                }

                                <span><button onClick={() => { deleteContact(phonebook.id); }}
                                        className={style.contactButton}>Удалить</button></span>
                        </div>
                )
        }
        export default Contact;