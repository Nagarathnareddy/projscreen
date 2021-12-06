import React from 'react'
import {AiFillDashboard} from "react-icons/ai"
import {GrProjects} from "react-icons/gr"
import {AiOutlineCalendar} from "react-icons/ai"
import {FaTasks} from "react-icons/fa"
import {HiOutlineDocumentReport} from "react-icons/hi"
import {RiSettingsLine} from "react-icons/ri"
import Load from './Load'
import Icon from './Icon'
import But from './But'
import '../style/Sidebar.css'

export default function Menu() {
    return (
        
         
        
      
      <div className="sidebar">
        <Load/>
         <div className="menu">  
      <div className="menus"><AiFillDashboard className="dash"/><div>Dashboard</div></div>
      <div className="menus"><GrProjects className="proj"/><div>Projects</div></div>
      <div className="menus"><AiOutlineCalendar className="cal"/><div>Calendar</div></div>
      <div className="menus"><FaTasks className="task"/><div>Tasks</div></div>
      <div className="menus"><HiOutlineDocumentReport className="report"/><div>Reports</div></div>
      <div className="menus"><RiSettingsLine className="sett"/><div>Settings</div></div>
    <Icon/>
    <But/>
      
        </div>
       </div>
    )
}
