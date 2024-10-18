import { Link } from 'react-router-dom'

export default function ListProfil() {
  const dataProfil = [1, 2, 3, 4, 5]

  return (
    <div className="listProfile">
      {dataProfil.map((profil) => (
        <Link 
          key={profil} 
          to={`/profil/${profil}`}
        >
          Profil {profil}
        </Link>
      ))}
    </div>
  )
}
