import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import imgsrc from './img/pixer_dark.webp';
import { RiMenuLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { WiDaySunny } from "react-icons/wi";
import { CiDark } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { Stack } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <div className='d-flex gap-3 align-items-center'>
                    <RiMenuLine className='fs-2' />
                    {/* <img src={imgsrc} className='w-25' alt="logo" /> */}
                </div>


                <Stack direction="horizontal" gap={4} className='me-4'>
                    <IoIosSearch className='fs-4' />
                    <WiDaySunny className='fs-4' />
                    <CiDark className='fs-4' />
                    <IoBagHandleOutline className='fs-4' />
                    <Button>Become a seller</Button>
                    <FaUserCircle className='fs-4' />
                    
                </Stack>

            </Container>
        </Navbar>
        </header>
    )
}

export default Header
