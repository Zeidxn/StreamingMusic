import React from "react";
import "./SideBar.css";
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExplorerIcon from '@mui/icons-material/Public';

function SideBar() {
  return (
      <div className={"sidebar"}>
          <div className={"menu"}>
              <div className={"sidebar__item"}>
                  <HomeIcon/>
                  <div>Accueil</div>
              </div>
              <div className={"sidebar__item"}>
                  <ExplorerIcon/>
                  <div>Explorer</div>
              </div>
              <div className={"sidebar__item"}>
                  <FavoriteIcon/>
                  <div>Favoris</div>
              </div>
          </div>
      </div>
  );
}

export default SideBar;