import React from 'react'
import { createBrowserRouter } from 'react-router'
import Root from '../Pages/Root/Root'
import Home from '../Pages/Home/Home'
import ErrorPage from '../Pages/ErrorPage/ErrorPage'
import Apps from '../Pages/Apps/Apps'
import Installation from '../Pages/Installation/Installation'
import AppDetails from '../Components/AppDetails/AppDetails'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            loader: () => fetch('/topAppData.json'),
            path: '/',
            Component: Home
        },
        {
            path: 'apps',
            loader: () => fetch('/appData.json'),
            Component: Apps
        },
        {
            path: 'installation',
            loader: () => fetch('/appData.json'),
            Component: Installation
        },
        {
          path: 'appDetails/:id',
          loader: () => fetch('/appData.json'),
          Component: AppDetails
        }
    ]
  }
])