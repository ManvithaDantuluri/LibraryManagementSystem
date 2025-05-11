import React, { useState } from 'react';
import Sidebar from './Sidebar';
import CheckInOutForm from './CheckInOutForm';
import Books from './Books';
import IssueBook from './IssueBook';
import ReturnBook from './ReturnBook';
import ReserveBook from './ReserveBook';
import SearchBox from './SearchBox';
import LogoutButton from './LogoutButton';
import PaymentBox from './PaymentBox';
import About from './About'; 
import Help from './Help';
import Settings from './Settings';
import Notifications from './Notifications';

import './Dashboard.css';


const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState('checkinout');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'checkinout':
        return <CheckInOutForm />;
      case 'books':
        return <Books />;
      case 'issue':
        return <IssueBook />;
      case 'reserve':
        return <ReserveBook />;
      case 'return':
        return <ReturnBook />;
      case 'search':
        return <SearchBox />;
      case 'payment':
        return <PaymentBox />;
      case 'about':
        return <About />;
      case 'help':
        return <Help />;
      case 'settings':
        return <Settings />;

      default:
        return <CheckInOutForm />;
    }
  };

 return (
  <div className="dashboard-container" style={{ position: 'relative' }}>
    <LogoutButton />
    <Notifications userId={1} /> {/* Move it here, outside .dashboard-content */}
    <Sidebar setActiveComponent={setActiveComponent} activeComponent={activeComponent} />

    <div className="dashboard-content">
      {renderComponent()}
    </div>
  </div>
);

};

export default Dashboard;
