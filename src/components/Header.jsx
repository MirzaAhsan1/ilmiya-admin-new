import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import info from "../assets/images/icons/info.svg";
import shine from "../assets/images/icons/shine.svg";
import add from "../assets/images/icons/add.svg";
import staff from "../assets/images/icons/staff.svg";
import sbspaces from "../assets/images/icons/sidebaricons/sbspaces.svg";
import sblabel from "../assets/images/icons/sidebaricons/sblabel.svg";
import avatar from "../assets/images/avatar.png";
import logo from "../assets/images/icons/logo.svg";

const Welcome = () => {
    return (
        <div className='header'>
            <div className="section1">
                <img src={logo} alt="info" />
            </div>
            <div className="section2">
                <div className='btn1-parent'>
                    <Dropdown>
                        <Dropdown.Toggle
                            as="button"
                            className="icon"
                            id="dropdown-custom-components"
                        >
                            <img src={add} alt="add" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Header>
                                <div className='row1'>
                                    <div className="icon">
                                        <img src={add} alt="icon" />
                                    </div>
                                    <div className="text">
                                        <span>Add</span>
                                    </div>
                                </div>
                            </Dropdown.Header>
                            <div className="dropdown-item-parent">
                            <Dropdown.Item>
                                <div className='row1'>
                                    <div className="icon">
                                        <img src={staff} alt="icon" />
                                    </div>
                                    <div className="text">
                                        <span>Add</span>
                                    </div>
                                </div>
                                </Dropdown.Item>
                            <Dropdown.Item>
                                <div className='row1'>
                                    <div className="icon">
                                        <img src={sbspaces} alt="icon" />
                                    </div>
                                    <div className="text">
                                        <span>Add</span>
                                    </div>
                                </div>
                                </Dropdown.Item>
                            <Dropdown.Item>
                                <div className='row1'>
                                    <div className="icon">
                                        <img src={sblabel} alt="icon" />
                                    </div>
                                    <div className="text">
                                        <span>Add</span>
                                    </div>
                                </div>
                                </Dropdown.Item>
                            </div>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className='shine-icon'>
                    <button className="icon">
                        <img src={shine} alt="shine" />
                    </button>
                </div>
                <div>
                    <button className="avatar-icon">
                        <img src={avatar} alt="avatar" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Welcome;
