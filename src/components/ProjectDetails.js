import React from 'react'

import Proj from './Proj'
import Search from './Search'
import View from './View'
import CardView from './CardView'
export default function ProjectDetails() {
    return (
        <div className="projdetails">
            <Search/>
            <Proj/>
            <View/>
            <CardView/>
        </div>
    )
}
