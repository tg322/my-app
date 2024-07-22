import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Application from './Application';
import SideBar from './layout/sidebar/SideBar';
import ContentScreen from './layout/ContentScreen';
import Users from './Pages/Users';
import ContentWrapper from './layout/ContentWrapper';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import NavBar from './layout/NavBar';
import Display from './layout/Display';
import Tickets from './Pages/Tickets';

const Content = () => {

  return(
    <Application>
      <NavBar/>
      <Display>
        <SideBar/>
        <ContentScreen>
          <ContentWrapper>
              <Routes>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="users" element={<Users/>}/>
                <Route path="tickets" element={<Tickets/>}/>
              </Routes>
          </ContentWrapper>
        </ContentScreen>
      </Display>
    </Application>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Content/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
