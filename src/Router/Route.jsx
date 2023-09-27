import React from 'react';
import { Route, createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout'
import Statistics from '../Pages/Statistics/Statistics';
import Home from '../Pages/Home/Home';
import Donation from '../Pages/Donation/Donation';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import DonationDetails from '../Pages/DonationDetails/DonationDetails';

const myCreateRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element: <Home></Home>,
                loader :()=>fetch('/Donation.json')
            },
            {
                path:"/donation",
                element:<Donation></Donation>
            },
            {
                path:"/statistics",
                element: <Statistics></Statistics>,
                loader :()=>fetch('/Donation.json')
            },
            {
                path:"/donations/:id",
                element:<DonationDetails></DonationDetails>,
                loader :()=>fetch('/Donation.json')
            }
        ]
    }
])

export default myCreateRoute;