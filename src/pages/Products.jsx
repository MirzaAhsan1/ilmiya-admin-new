import React from "react";
import logo from "../assets/images/icons/logo.svg";
import adminpanelicon from "../assets/images/icons/adminpanelicon.svg";
import settings from "../assets/images/icons/settings.svg"; // Icon for the "View" column
import brandingwatermark from "../assets/images/icons/brandingwatermark.svg";
import staff from "../assets/images/icons/staff.svg";
import spaces from "../assets/images/icons/spaces.svg";
import label from "../assets/images/icons/label.svg";
import shine from "../assets/images/icons/shine.svg";
import system from "../assets/images/icons/system.svg";
import billing from "../assets/images/icons/billing.svg";
import logs from "../assets/images/icons/logs.svg";
import domain from "../assets/images/icons/domain.svg";
import roles from "../assets/images/icons/roles.svg";
import site from "../assets/images/icons/site.svg";
import fileicon from "../assets/images/icons/fileicon.svg";

const Products = () => {
  const rows = [
    { name: "General", icon: settings },
    { name: "Brand", icon: brandingwatermark },
    { name: "Staff", icon: staff },
    { name: "Spaces", icon: spaces },
    { name: "Labels", icon: label },
    { name: "ILM", icon: shine },
    { name: "System", icon: system },
    { name: "Billing", icon: billing },
    { name: "Logs", icon: logs },
    { name: "Domain", icon: domain },
    { name: "Roles", icon: roles },
    { name: "Sites", icon: site },
  ];

  return (
    <div className="product-container-parent">
      <div className="product-container">
        <div className="product-section1">
          <div className="logo-wrapper">
            <img src={logo} alt="logo" />
          </div>
          <div className="page-title">
            <span>All products</span>
          </div>
        </div>
        <div className="product-section2">
          <img src={adminpanelicon} alt="Admin Panel" />
          <span>Admin</span>
        </div>
        <div className="product-section4">
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

export default Products;
