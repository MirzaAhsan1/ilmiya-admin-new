import React from 'react'
import { Link } from "react-router-dom";
import staff from "../assets/images/icons/staff.svg";
import domain from "../assets/images/icons/domain.svg";
import billing from "../assets/images/icons/billing.svg";
import roles from "../assets/images/icons/roles.svg";
import shine from "../assets/images/icons/shine.svg";
import spaces from "../assets/images/icons/spaces.svg";


const highlishtsCards = [
  {
    id: 1,
    icon: staff,
    title: "Staff",
  },
  {
    id: 2,
    icon: spaces,
    title: "Spaces",
  },
  {
    id: 3,
    icon: shine,
    title: "ILM",
  },
  {
    id: 4,
    icon: billing,
    title: "Billing",
  },
  {
    id: 5,
    icon: domain,
    title: "Domain",
  },
  {
    id: 6,
    icon: roles,
    title: "Roles",
  },
]

const Highlights = () => {
  return (
    <div className="highlights-container-parent">
    <div className='highlights-container'>
      <div className='highlights-text'>
        <span>Highlights</span>
      </div>
      <div className="highlights-cards">
      <div className="quick-access-section">
        <span>Quick Access</span>
        <div className="quick-access-cards">
          <div className="row">
            {highlishtsCards.map((item) => (
              <div className="col-4 mb-3" key={item.id}>
                <Link href={"/"}>
                  <div className="single-card">
                    <div className="icon">
                      <img src={item.icon} alt="icon" />
                    </div>
                    <span>{item.title}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Highlights