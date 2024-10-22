import React from 'react'
import adminpanelicon from "../assets/images/icons/adminpanelicon.svg"
import customdashboard from "../assets/images/icons/sidebaricons/customdashboard.svg"
import sbsetting from "../assets/images/icons/sidebaricons/sbsetting.svg"
import sbstaff from "../assets/images/icons/sidebaricons/sbstaff.svg"
import sblabel from "../assets/images/icons/sidebaricons/sblabel.svg"
import sbsystem from "../assets/images/icons/sidebaricons/sbsystem.svg"
import sbbranding from "../assets/images/icons/sidebaricons/sbbranding.svg"
import sbdomain from "../assets/images/icons/sidebaricons/sbdomain.svg"
import sblogs from "../assets/images/icons/sidebaricons/sblogs.svg"
import sbshine from "../assets/images/icons/sidebaricons/sbshine.svg"
import sbsite from "../assets/images/icons/sidebaricons/sbsite.svg"
import sbbilling from "../assets/images/icons/sidebaricons/sbbilling.svg"
import sbroles from "../assets/images/icons/sidebaricons/sbroles.svg"
import menubtn from "../assets/images/icons/menubtn.svg"

const tabs = [
    {
        icon: customdashboard,
        title: "Dashboard"
    },
    {
        icon: sbsetting,
        title: "Settings"
    },
    {
        icon: sbstaff,
        title: "Spaces"
    },
    {
        icon: sblabel,
        title: "Labels"
    },
    {
        icon: sbsystem,
        title: "System"
    },
    {
        icon: sbbranding,
        title: "Brand"
    },
    {
        icon: sbshine,
        title: "ILM"
    },
    {
        icon: sbdomain,
        title: "Domain"
    },
    {
        icon: sbsite,
        title: "Site"
    },
    {
        icon: sbbilling,
        title: "Billing"
    },
    {
        icon: sbroles,
        title: "Roles"
    },
    {
        icon: sblogs,
        title: "Logs"
    },
]

const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            <div className="sidebar-section1">
                <img src={adminpanelicon} alt="Admin Panel" />
                <span>Admin</span>
            </div>
            <div className="sidebar-section2">
                {tabs.map((tab, index) => (
                    <button 
                        key={index} 
                        className={`sidebar-tab ${tab.title === "Dashboard" ? 'active' : ''}`} // Active class conditionally applied
                    >
                        <img 
                            src={tab.icon} 
                            alt={tab.title} 
                            className={`tab-icon ${tab.title === "Dashboard" ? 'active-icon' : ''}`} // Active icon class conditionally applied
                        />
                        <span>{tab.title}</span>
                    </button>
                ))}
            </div>
            <div className="sidebar-section3">
                <img src={menubtn} alt="" />
            </div>
        </div>
    );
}


export default Sidebar
