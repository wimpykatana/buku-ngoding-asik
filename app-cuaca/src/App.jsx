import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {
  const ListKota = ['Jakarta', 'New York', 'Melbourne', 'Shanghai', 'London']
  return (
    <div className="wrapper">
      <div className="listKota">
        {ListKota.map((kota, index) => (
          <Link key={index} to={`/kota/${kota.toLowerCase()}`}>
            {kota}
          </Link>
        ))}
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  )
}

export default App
