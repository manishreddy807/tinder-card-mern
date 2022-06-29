import React from "react";
import {MdPerson, MdForum} from 'react-icons/md';
import './index.css';

export default function Header (){
    return(
        <div className="header-container">
            <button type="button">
                <MdPerson />
            </button>
            <img 
              className="header-img"
              src="https://www.techadvisor.com/cmsdata/features/3515013/tinder_logo_thumb1200_16-9.png"
              alt="logo"
            />
            <button type="button">
                <MdForum size={30} />
            </button>
        </div>
    )
}