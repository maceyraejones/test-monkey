import React from 'react'
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import {IconButton} from "@material-ui/core";
import ForumIcon from "@material-ui/icons/Forum";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='header'>
      
{/* <img  className='header__logo' src="" alt="header"/> */}
<Link to='/AddCart'>
<IconButton>
<ForumIcon fontSize="large" className="header__icon"/>

</IconButton>
</Link>
    </div>
  )
}

export default Header