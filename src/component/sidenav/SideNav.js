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
    <ListGroup>
      <ListGroup.Item> <FaHome /> </ListGroup.Item>
      <ListGroup.Item> <MdExplore /> </ListGroup.Item>
      <ListGroup.Item> <IoCube /> </ListGroup.Item>
      <ListGroup.Item> <FaUserFriends /> </ListGroup.Item>
      <ListGroup.Item> <MdOutlineRssFeed /> </ListGroup.Item>
      <ListGroup.Item> <IoPaperPlane /> </ListGroup.Item>
      <ListGroup.Item> <IoMdSettings /> </ListGroup.Item>
      <ListGroup.Item> <IoMdHelpCircle /> </ListGroup.Item>

    
    </ListGroup>
  )
}

export default SideNav
