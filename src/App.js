import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import SideBar from './SideBar';
import RightSide from './RightSide'
import Login from './Login';

function App() {
  return (
    <div className="app">
      <Login />
      {/* <Header />
      <div className="app__body">
        <SideBar />
        <Feed />
        <RightSide />
      </div> */}
    </div>
  );
}

export default App;
