import React from 'react'
import {BsClipboardData} from "react-icons/bs"
import {FiSearch} from "react-icons/fi"
import {BsFilter} from "react-icons/bs"
import {HiSortAscending} from "react-icons/hi"
import '../style/CardView.css'
export default function View() {
    return (
        <div className="viewscreen">
            <div className="viewone">
           <div className="view">View:</div> 
         <div className="clip"><BsClipboardData/></div>
         <div className="board">Board</div> 
         </div>
         <div className="viewtwo">
         <div><FiSearch className="searchicon"/></div>
         <div> <input type="search" placeholder="Search" className="srch"/></div>
         <div><BsFilter className="filtericon"/></div>
         <div className="filter">Filter</div>
         <div ><HiSortAscending className="sorticon"/></div>
         <div className="sort">Sort:</div>
         <div className="datecreated">Date Created</div>
         </div>
        </div>
    )
}
