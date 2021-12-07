import { Button } from 'react-bootstrap'
import React from 'react'
import {GrEmptyCircle} from "react-icons/gr"
import {FcAbout} from "react-icons/fc"
import {FcGoogle} from "react-icons/fc"
import {FaJsfiddle} from "react-icons/fa"
import {FcEnteringHeavenAlive} from "react-icons/fc"
import {FcCommandLine} from "react-icons/fc"
import {FcMindMap} from "react-icons/fc"

import {BsSlashSquare} from "react-icons/bs"
import {BsCurrencyDollar} from "react-icons/bs"
import {RiSettings2Line} from "react-icons/ri"
import {RiCodeSSlashLine} from "react-icons/ri"
import {GoLightBulb} from "react-icons/go"

export default function Proj() {
    return (
        <div className="projee">
            
            <div className="headingproj">Projects</div>
            <div className="createbtn"> <Button variant="success" className="cnbtn">Create New</Button>{' '}</div>
           {/*16 icon data*/}
           <div className="pp">
           <div className="proj16">
           
          <div className="sixteenprojs">
              <h1>16 </h1>
              <h6 className="headproj16">Projects</h6>
              </div> 
           <div ><GrEmptyCircle className="iconsixteen"/></div>
           <div className="list">
               <ul className="ull">
                   <li className="act">Active     4</li>
                   <li className="com">Completed 10</li>
                   <li className="yet">Yet to start 2</li>
               </ul>
               </div>
           </div>
            {/*6 clients data*/}
            <div className="cl6">
            <div className="clients6">
                <div className="cli">
                  <div className="numsix">
                       <h1 className="sixx">6</h1>
                       <h6 className="clients">Clients</h6>
                       </div> 
                    </div>
                    <div className="icons">
                        <div className="io">
                <div ><FcAbout className="about"/></div>
                <div ><FcGoogle className="google"/></div>
                <div ><FcEnteringHeavenAlive className="enter"/></div>
                <div ><FcCommandLine className="command"/></div>
               <div className="iconsone">
                <div className="fid"><FaJsfiddle  className="fiddle"/></div>
                </div>
                <div className="iconstwo">
                <div ><FcMindMap className="mind"/></div>
                </div>
                </div>
                </div>
                </div>

            </div>
            {/*5 teams data*/}
            <div className="teams5">
                <div>
                 <div className="nu"> <h1 className="numteam">6</h1></div>  
               <div className="tea"><p className="teams">Teams</p></div> 
                </div>
                <div className="icons5">
                <div><BsSlashSquare className="square"/></div>
                
                <div><BsCurrencyDollar className="dollar"/></div>
                <div><RiSettings2Line className="settingsline"/></div>
                <div><RiCodeSSlashLine className="slash"/></div>
                
                <div><GoLightBulb className="bulb"/></div>
                </div>
            </div>

            </div>
        </div>
       
    )
}
