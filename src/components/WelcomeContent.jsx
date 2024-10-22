import { Link } from "react-router-dom";
import staff from "../assets/images/icons/staff.svg";
import domain from "../assets/images/icons/domain.svg";
import site from "../assets/images/icons/site.svg";
import billing from "../assets/images/icons/billing.svg";
import roles from "../assets/images/icons/roles.svg";
import shine from "../assets/images/icons/shine.svg";
import spaces from "../assets/images/icons/spaces.svg";
import appsIcon from "../assets/images/icons/appsIcon.svg";
import secure from "../assets/images/icons/secure.svg";
import info from "../assets/images/icons/info.svg";
import starIcon from "../assets/images/icons/starIcon.svg";
import userFile from "../assets/images/icons/userFile.svg";
import filter from "../assets/images/icons/filter.svg";
import profileIcon from "../assets/images/icons/profileIcon.svg";
import maximize from "../assets/images/icons/maximize.svg";
import arrowdown from "../assets/images/icons/arrowdown.svg";
import arrowforward from "../assets/images/icons/arrowforward.svg";
import arrowback from "../assets/images/icons/arrowback.svg";
import user1 from "../assets/images/user1.png";
import user2 from "../assets/images/user2.png";
import user3 from "../assets/images/user3.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const welcomeCards = [
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
  {
    id: 7,
    icon: domain,
    title: "Domain",
  },
  {
    id: 8,
    icon: site,
    title: "Sites",
  },
];

export default function Page() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="welcome-page-wrapper">
      <div className="page-header">
        <div className="title-section">
          <div className="logo-wrapper">
            <img src={info} alt="logo" />
          </div>
          <div className="page-title">
            <strong>Welcome</strong>
          </div>
        </div>
        <div className="action-buttons">
          <button className="single-button">
            <div className="icon">
              <img src={starIcon} alt="icon" />
            </div>
            <div className="text">
              <strong>Highlights</strong>
            </div>
          </button>
          <div className="single-button-modal">
            <button className="single-button" onClick={handleShow}>
              <div className="icon">
                <img src={userFile} alt="icon" />
              </div>
              <div className="text">
                <strong>Directory</strong>
              </div>
            </button>

            <Modal
              show={show}
              onHide={handleClose}
              className="create-directory-modal"
            >
              <Modal.Header closeButton>
                <Modal.Title>Directory</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="lower-body">
                  <div className="input-with-icon">
                    <input type="text" placeholder="Filter" />
                    <img src={filter} alt="icon" className="input-icon" />
                  </div>
                  <div className="captions">
                    <span className="name-text">Name</span>
                    <span className="view-text">View</span>
                  </div>
                  <div className="profile-section">
                    <div className="profile">
                      <div className="profile-inner-sec1">
                        <img src={user1} alt="user1" />
                        <span>Marvin McKinney</span>
                      </div>
                      <div className="profile-inner-sec2">
                        <img src={maximize} alt="maximize" />
                      </div>
                    </div>
                    <div className="profile">
                      <div className="profile-inner-sec1">
                        <img src={user2} alt="user2" />
                        <span>Jenny Wilson</span>
                      </div>
                      <div className="profile-inner-sec2">
                        <img src={maximize} alt="maximize" />
                      </div>
                    </div>
                    <div className="profile">
                      <div className="profile-inner-sec1">
                        <img src={user3} alt="user3" />
                        <span>Jane Cooper</span>
                      </div>
                      <div className="profile-inner-sec2">
                        <img src={maximize} alt="maximize" />
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <div className="footer">
                  <div className="footer-context1">
                    <span>Rows per page:</span>
                  </div>
                  <div className="footer-context2">
                    <span>24</span>
                    <img src={arrowdown} alt="" />
                  </div>
                  <div className="footer-context3">
                    <span>34 - 43 of 43</span>
                  </div>
                  <div className="footer-context4">
                    <button>
                      <img src={arrowback} alt="arrowback" />
                    </button>
                    <button>
                      <img src={arrowforward} alt="arrowforward" />
                    </button>
                  </div>
                </div>
              </Modal.Footer>
            </Modal>
          </div>

          <button className="single-button blue-bg-btn">
            <div className="icon">
              <img src={profileIcon} alt="icon" />
            </div>
            <div className="text">
              <strong>Add Stuff</strong>
            </div>
          </button>
        </div>
      </div>
      <div className="page-description">
        <h4>
          You’re working in <span>Class Room 1</span>
        </h4>
        <p>Organization: Bahaji Academy </p>
      </div>
      <div className="quick-access-section">
        <span>Quick Access</span>
        <div className="quick-access-cards">
          <div className="row">
            {welcomeCards.map((item) => (
              <div className="col-3 mb-3" key={item.id}>
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
      <div className="page-bottom-buttons">
        <Link href={"#"} className="single-button">
          <div className="icon">
            <img src={appsIcon} alt="icon" />
          </div>
          <strong>View Products</strong>
        </Link>
        <Link href={"#"} className="single-button">
          <div className="icon">
            <img src={secure} alt="icon" />
          </div>
          <strong>View Policies</strong>
        </Link>
      </div>
    </div>
  );
}
