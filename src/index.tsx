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
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import NavBar from './layout/NavBar';
import Display from './layout/Display';
import Tickets from './Pages/Tickets';
import Login from './Pages/Login';

const Layout = () => {
  return(
    <Application>
      <NavBar/>
      <Display>
        <SideBar/>
        <ContentScreen>
          <ContentWrapper>
              <Outlet/>
          </ContentWrapper>
        </ContentScreen>
      </Display>
    </Application>
  );
}

const AppRoutes = () => {

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/tickets" element={<Tickets/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppRoutes/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
