import React from "react";
import { Button } from "react-bootstrap";
import {MdPerson, MdForum} from 'react-icons/md';
import './index.css';

export default function Header (){
    return(
        <div className="header-container">
            <Button  type="button">
                <MdPerson />
            </Button>
            <img 
              className="header-img"
              src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png"
              alt="logo"
            />
            <Button type="button">
                <MdForum size={30} />
            </Button>
        </div>
    )
}