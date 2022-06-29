import React from "react";
import {Button} from 'react-bootstrap'
import {MdReplay10, MdClose, MdStars, MdFavorite, MdFlashOn} from 'react-icons/md'
import './index.css'
export const SwipeButtons = () => {
    return(
        <div className="swipe-btns">
         <Button type="button" className="swipe-btn-replay icon-style">
             <MdReplay10 size={35} />
         </Button>
         <Button type="button" className="swipe-btn-left icon-style">
             <MdClose size={35} />
         </Button>
         <Button type="button" className="swipe-btn-star icon-style">
             <MdStars size={35} />
         </Button>
         <Button type="button" className="swipe-btn-lightning icon-style">
             <MdFavorite size={35} />
         </Button>
         <Button type="button" className="swipe-btn-right icon-style">
             <MdFlashOn size={35} />
         </Button>
         
        </div>
    )
}