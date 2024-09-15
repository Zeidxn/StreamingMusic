import React from 'react';
import './NavBar.css';
import TextField from '@mui/material/TextField';

function NavBar() {
  return (
      <div className={"navbar"}>
          <TextField id="standard-basic" className={"searchbar"} />
          <div className={"navbar__container"}>
              <img id="logo" src={"/src/assets/Z.png"} alt={"logo"}/>
              <div className={"navbar__item"}>ZEIDEN</div>
          </div>
      </div>
  );
}

export default NavBar;