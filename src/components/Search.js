import React from 'react'
import {MdNotificationsNone} from "react-icons/md"
import {BiSearch} from "react-icons/bi"
 import logo from '../modi.png'
export default function Search() {
    return (
        <div className="search">
            <BiSearch className="seaicon"/>
            <input type="search" placeholder="Search for anything" className="sea"/>
            <div className="imgname">
            <img className="imagesize" src={logo} alt="leano"/><div className="name">Leano Alvarado</div>
            <MdNotificationsNone className="notificationicon"/>
            </div>
        </div>
    )
}
