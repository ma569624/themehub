import React from 'react'
import { FaHome } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import { MdExplore } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { IoCube } from "react-icons/io5";
import { MdOutlineRssFeed } from "react-icons/md";
import { IoPaperPlane } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { IoMdHelpCircle } from "react-icons/io";


const SideNav = () => {
  return (
   <aside className='sidenav'>
     <ul>
       <li className='active'><FaHome /></li> 
       <li><MdExplore /></li> 
       <li><IoCube /> </li>
       <li><FaUserFriends /> </li>
       <li><MdOutlineRssFeed /> </li>
       <li><IoPaperPlane /> </li>
    </ul>
    <ul>
       <li><IoMdSettings /></li> 
       <li><IoMdHelpCircle /> </li>
    </ul>
   </aside>
  )
}

export default SideNav
