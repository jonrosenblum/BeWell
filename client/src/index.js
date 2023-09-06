import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Components/Static/Root.js';
import Error from './Components/Static/Error.js';
import HomePage from './Routes/HomePage';
import Services from './Routes/Services';
import Payment from './Routes/Payment';
import GetStarted from './Routes/GetStarted';
import TherapistLogin from './Routes/TherapistLogin';
import PatientLogin from './Routes/PatientLogin';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Account from './Routes/Account';
import Develop from './Routes/Develop';





const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/payment',
        element: <Payment />
      },
      {
        path: '/get-started',
        element: <GetStarted />
      },
      {
        path: '/therapist/login',
        element: <TherapistLogin />
      },
      {
        path: '/patient/login',
        element: <PatientLogin />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/account',
        element: <Account />
      },
      {
        path: '/develop',
        element: <Develop />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);




reportWebVitals();