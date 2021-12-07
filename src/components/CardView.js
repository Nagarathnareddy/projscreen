import React from 'react';
import Card from 'react-bootstrap/Card'
import {CgMoreO} from "react-icons/cg"
import {AiOutlineCalendar} from "react-icons/ai"
import {GiRadioactive} from "react-icons/gi"
import {MdOutlineCheckCircleOutline} from "react-icons/md"
export default function CardView() {
    return (
        <div className="thirdview">

                   {/*PartOne starts here*/}
        <div className="partone">

         {/*Yet to screen text and icon*/}
        <div className="yetscreen">
             <div className="xxx"> 
               <CgMoreO className="yeticon"/>
               <div className="yts">Yet to Start</div>
               <div className="ynum">2</div>
               </div> 
        </div>
        
        {/*card display*/}
        <div className="card11">
        <Card className="cardboot11" style={{ width: '25rem',height: '16rem' }}>
  <Card.Body>
    <Card.Title>Coolchat Platform UX/UI</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Cool Creatives</Card.Subtitle>
    <Card.Text>
      Business messegner that makes office environment very very very cool again.
       </Card.Text>
    
        <div className="cidiv1"><AiOutlineCalendar className="calenicon1"/>28/06/20 - 25/06/20</div>
        <div className="ca">
<div className="ptt">PT</div><div className="cll">CL</div><div className="bww">BW</div>
</div>
        </Card.Body>
        </Card>
        </div>
    {/*card display 2*/}
       <div className="card22">
        <Card className="cardboot22" style={{ width: '25rem' ,height: '16rem'}}>
  <Card.Body>
    <Card.Title>Coolchat Platform UX/UI</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Cool Creatives</Card.Subtitle>
    <Card.Text>
      Business messegner that makes office environment  cool again.
       </Card.Text>
    
        <div className="cidiv2"><AiOutlineCalendar className="calenicon2"/>28/06/20 - 25/06/20</div>
        <div className="ca">
<div className="ptt">PT</div><div className="cll">CL</div><div className="bww">BW</div>
</div>
        </Card.Body>
        </Card>
        </div>
       </div>
                         {/*PartOne ends here*/}

                        {/*PartTwo starts here*/}
     <div className="parttwo">

{/*Yet to screen text and icon*/}
<div className="activescreen">
  <div className="yyy">
      <GiRadioactive className="activeicon"/>
      <div className="actt">Active</div>
      <div className="anum">4</div>
      </div>
     
</div>
<div className="containe2">
        <div className="lines2"></div>
        </div>

{/*card display*/}
<div className="card111">
<Card className="cardboot111" style={{ width: '25rem',height: '16rem' }}>
<Card.Body>
<Card.Title>Maple Website Redesign</Card.Title>
<Card.Subtitle className="mb-2 text-muted">Crayon Labs</Card.Subtitle>
<Card.Text>
Phase2 of apple website design where we focus to improve branding...
</Card.Text>
<div className="cidiv3"><AiOutlineCalendar className="calenicon3" />28/06/20 - 25/06/20</div>
<div className="ca">
<div className="ptt">PT</div><div className="cll">CL</div><div className="bww">BW</div>
</div>

</Card.Body>
</Card>
</div>
{/*card display 2*/}
<div className="card222">
<Card className="cardboot222" style={{ width: '25rem',height: '16rem' }}>
<Card.Body>
<Card.Title>Coolchat Platform UX/UI</Card.Title>
<Card.Subtitle className="mb-2 text-muted">Cool Creatives</Card.Subtitle>
<Card.Text>
Business messegner that makes office environment cool again.
</Card.Text>

<div className="cidiv4"><AiOutlineCalendar className="calenicon4"/>28/05/20 - 25/06/20</div>
<div className="ca">
<div className="ptt">PT</div><div className="cll">CL</div><div className="bww">BW</div>
</div>
</Card.Body>
</Card>
</div>
</div>
                    {/*PartTwo ends here*/}

                     {/*PartThree starts here*/}
                     <div className="partthree">

{/*Yet to screen text and icon*/}
<div className="completedscreen">
  <div className="zzz">
      <MdOutlineCheckCircleOutline className="completedicon"/>
      <div className="comname">Completed</div>
      <div className="comnum">12</div>
      </div>
</div>
<div className="containe3">
        <div className="lines3"></div>
        </div>
{/*card display*/}
<div className="card1111">
<Card className="cardboot1111" style={{ width: '25rem',height: '16rem' }}>
<Card.Body>
<Card.Title>Maple Mobile App</Card.Title>
<Card.Subtitle className="mb-2 text-muted">Crayon Labs</Card.Subtitle>
<Card.Text>
Creating a mobile app for Maple,which helps deliver breakfast in offices
</Card.Text>
<div className="cidiv5"><AiOutlineCalendar className="calenicon5"/>12/05/20 - 10/06/20</div>
<div className="ca">
<div className="ptt">PT</div><div className="cll">CL</div><div className="bww">BW</div>
</div>
</Card.Body>
</Card>
</div>
{/*card display 2*/}
<div className="card2222">
<Card className="cardboot2222" style={{ width: '25rem',height: '16rem' }}>
<Card.Body>
<Card.Title>Nacho CRM UX/UI</Card.Title>
<Card.Subtitle className="mb-2 text-muted">Feather Labs</Card.Subtitle>
<Card.Text>
The UX/UI for the new flagship CRM for Feather labs
</Card.Text>

<div className="cidiv6"><AiOutlineCalendar className="calenicon6"/>12/05/20 - 10/06/20</div>
<div className="ca">
<div className="ptt">PT</div><div className="cll">CL</div><div className="bww">BW</div>
</div>
</Card.Body>
</Card>
</div>
</div>            
 {/*PartThree ends here*/}

        </div>
    )
}
