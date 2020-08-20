import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
return (
<div className= {style.header}>
  <img src='https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg'
  alt = 'rocket'/>

  <div className = {style.loginBlock}>
    {props.isAuth 
    ? <div>{props.login} - <button onClick = {props.logout}> Log out</button></div>
    :<NavLink to ={'/login'}>Login</NavLink> }
      </div>
</div>

);
}



export default Header;
