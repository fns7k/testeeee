import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            <h1>Admin Dashboard</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/admin/products">Manage Products</Link>
                    </li>
                    <li>
                        <Link to="/admin/upload-csv">Upload CSV</Link>
                    </li>
                    <li>
                        <Link to="/admin/orders">View Orders</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Dashboard;