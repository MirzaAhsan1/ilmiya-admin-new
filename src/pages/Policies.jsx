import React from "react";
import logo from "../assets/images/icons/logo.svg";
import adminpanelicon from "../assets/images/icons/adminpanelicon.svg";
import encrypted from "../assets/images/icons/encrypted.svg";
import ballot from "../assets/images/icons/ballot.svg";
import tenancy from "../assets/images/icons/tenancy.svg";
import tethering from "../assets/images/icons/tethering.svg";
import enhanced from "../assets/images/icons/enhanced.svg";
import mouselock from "../assets/images/icons/mouselock.svg";
import database from "../assets/images/icons/database.svg";
import datasaver from "../assets/images/icons/datasaver.svg";
import vpn from "../assets/images/icons/vpn.svg";
import policy from "../assets/images/icons/policy.svg";
import fileicon from "../assets/images/icons/fileicon.svg";

const Policies = () => {
  const rows = [
    { name: "Terms of Service", icon: policy },
    { name: "Privacy Policy", icon: vpn },
    { name: "Acceptable Usage Policy", icon: datasaver },
    { name: "Data Protection Addendum", icon: database },
    { name: "Privacy Disclosure for Children (COPPA)", icon: mouselock },
    { name: "Parental Consent", icon: enhanced },
    { name: "Student Privacy Pledge", icon: encrypted },
    { name: "Ilmiya's Mark Usage Terms", icon: tethering },
    { name: "AI Usage Guidelines", icon: tenancy },
    { name: "Ilmiya Sub-Processors List", icon: ballot },
  ];

  return (
    <div className="policies-container-parent">
      <div className="policies-container">
        <div className="policies-section1">
          <div className="logo-wrapper">
            <img src={logo} alt="logo" />
          </div>
          <div className="page-title">
            <span>All policies</span>
          </div>
        </div>
        <div className="policies-section2">
          <img src={adminpanelicon} alt="Admin Panel" />
          <span>Legal</span>
        </div>
        <div className="policies-section4">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th className="th-view-text">Docs</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td colSpan={2} className="row-wrapper">
                    <div className="td-row-parent">
                      <div className="td-name-col">
                        <div className="icon">
                          <img src={row.icon} alt="icon" />
                        </div>
                        <span>{row.name}</span>
                      </div>
                      <div className="td-view-col">
                        <img
                          src={fileicon}
                          alt="view icon"
                          width="20"
                          height="20"
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Policies;
