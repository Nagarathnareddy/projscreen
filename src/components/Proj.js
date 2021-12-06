import { Button } from 'react-bootstrap'
import React from 'react'
import {GrEmptyCircle} from "react-icons/gr"
import {FcAbout} from "react-icons/fc"
import {FcGoogle} from "react-icons/fc"
import {FaJsfiddle} from "react-icons/fa"
import {FcEnteringHeavenAlive} from "react-icons/fc"
import {FcCommandLine} from "react-icons/fc"
import {FcMindMap} from "react-icons/fc"

export default function Proj() {
    return (
        <div className="projee">
            
            <div className="headingproj">Projects</div>
            <div className="createbtn"> <Button variant="success" className="cnbtn">Create New</Button>{' '}</div>
           {/*16 icon data*/}
           <div className="pp">
           <div className="proj16">
           
          <div className="sixteenprojs"><h1>16 </h1><p className="headproj16">Projects</p></div> 
           <div ><GrEmptyCircle className="iconsixteen"/></div>
           <div className="list">
               <ul className="ull">
                   <li className="act">Active</li>
                   <li className="com">Completed</li>
                   <li className="yet">Yet to start</li>
               </ul>
               </div>
           </div>
            {/*6 clients data*/}
            <div className="cl6">
            <div className="clients6">
                <div className="cli">
                  <div className="numsix"> <h1>6</h1></div> 
                 <div className="pclients">  <p className="clients">Clients</p></div> 
                    </div>
                    <div className="icons">
                <div><FcAbout/></div>
                <div><FcGoogle/></div>
                <div><FcEnteringHeavenAlive/></div>
                <div><FcCommandLine/></div>
                <div><FaJsfiddle/></div>
                <div><FcMindMap/></div>
                </div>
                </div>

            </div>
            {/*5 teams data*/}
            <div className="teams5">
                <div>
                 <div className="nu"> <h1 className="numteam">6</h1></div>  
               <div className="tea"><p className="teams">Teams</p></div> 
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            </div>
        </div>
       
    )
}
