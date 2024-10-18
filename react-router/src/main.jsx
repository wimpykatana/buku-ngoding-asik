import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import ListProfil from './pages/ListProfil.jsx'
import Profil from './pages/Profil.jsx'
import Halaman404 from './pages/Halaman404.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Halaman404 />,
  },
  {
    path: '/profil',
    element: <ListProfil />,
  },
  {
    path: '/profil/:profilid',
    element: <Profil />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
