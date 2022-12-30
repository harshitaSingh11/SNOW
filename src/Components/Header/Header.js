import React from "react";
import { Tooltip } from "@material-ui/core";
import Zoom from "@material-ui/core/Zoom";
import GitHubIcon from "@material-ui/icons/GitHub";

// import { Link } from 'react-router-dom'
import logo from "../../media/logo.png";

import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/" className="a">
          <span className="Title">SNOW</span>
        </Link>
      </div>
      <div className="headerRight">
        <a
          href="https://github.com/harshitaSingh11/SNOW"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Tooltip
            title="Visit Github Repo"
            placement="bottom"
            TransitionComponent={Zoom}
          >
            <GitHubIcon />
          </Tooltip>
        </a>
      </div>
    </div>
  );
}

export default Header;
