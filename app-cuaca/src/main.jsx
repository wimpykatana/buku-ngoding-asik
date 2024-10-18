import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Kota from './komponen/Kota.jsx'
import Home from './komponen/Home.jsx'
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Halaman tidak ditemukan</div>,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/kota/:idkota',
        element: <Kota />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
