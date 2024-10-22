import Sidebar from "../components/Sidebar";
import helpIcon from "../assets/images/icons/help-icon.svg"
import plusIcon from "../assets/images/icons/plus-icon.svg"
import filter from "../assets/images/icons/filter-icon.svg"
import user from "../assets/images/icons/user-avatar.svg"

export default function Staff(){
    return(
        <div className="staff-page-wrapper">
            <Sidebar />
            <div className="page-content">
                <div className="page-header">
                    <div className="title">
                        <h1>All Staff</h1>
                    </div>
                    <div className="actions">
                        <div className="single-action">
                            <img src={helpIcon} alt="icon" />
                        </div>
                        <div className="single-action add-modal">
                            <button>
                            <img src={plusIcon} alt="icon" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="filter-bar">
                    <div className="icon">
                    <img src={filter} alt="icon" />
                    </div>
                    <span>Filter Staff</span>
                </div>
                <div className="listing-table">
                    <table>
                        <thead>
                            <tr>
                                <th colSpan={7}>Name</th>
                                <th>Role</th>
                                <th className="action">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={7}>
                                    <div className="name-section">
                                        <div className="icon">
                                            <img src={user} alt="icon" />
                                            <div className="status"></div>
                                        </div>
                                        <span>Jane Cooper</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="admin-row">
                                    Admin
                                    <div className="pending">Pending</div>
                                    </div>
                                    
                                    </td>
                                <td className="action">
                                    <button>...</button></td>
                            </tr>
                            <tr>
                                <td colSpan={7}>
                                    <div className="name-section">
                                        <div className="icon">
                                            <img src={user} alt="icon" />
                                            <div className="status red"></div>
                                        </div>
                                        <span>Jane Cooper</span>
                                    </div>
                                </td>
                                <td>Admin</td>
                                <td className="action">
                                    <button>...</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}