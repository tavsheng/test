import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from 'react-router-dom'
const Navbar = () => {
return (
<div className= {style.nav}>
    <div className= {style.item} >
    <NavLink to='/contacts' activeClassName= {style.active}>Contacts</NavLink></div>
 </div>
);
}



export default Navbar;
