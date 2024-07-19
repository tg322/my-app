import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Application from './Application';
import SideBar from './layout/SideBar';
import ContentScreen from './layout/ContentScreen';
import Users from './Pages/Users';
import ContentWrapper from './layout/ContentWrapper';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import NavBar from './layout/NavBar';
import Display from './layout/Display';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Application>
      <NavBar/>
      <Display>
        <SideBar/>
        <ContentScreen>
          <ContentWrapper>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="users" element={<Users/>}/>
              </Routes>
            </BrowserRouter>
          </ContentWrapper>
        </ContentScreen>
      </Display>
      
    </Application>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
