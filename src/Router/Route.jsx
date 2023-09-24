import React from 'react';
import { Route, createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout'
import Statistics from '../Pages/Statistics/Statistics';
import Home from '../Pages/Home/Home';
import Donation from '../Pages/Donation/Donation';

const myCreateRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path:"/donation",
                element:<Donation></Donation>
            },
            {
                path:"/statistics",
                element: <Statistics></Statistics>
            }
        ]
    }
])

export default myCreateRoute;