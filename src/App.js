import React from 'react';
import './App.css';
import Feed from './Components/Feed';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import RightSide from './Components/RightSide'
import Login from './Components/Login';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';



function App() {

  const user = useSelector(selectUser)

  return (
    <div className="app">
      {
        !user ?
          (<Login />) :
          (<><Header />
            <div className="app__body">
              <SideBar />
              <Feed />
              <RightSide />
            </div></>)
      }


    </div>
  );
}

export default App;
