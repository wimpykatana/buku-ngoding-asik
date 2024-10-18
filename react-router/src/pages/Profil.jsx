import { useParams } from 'react-router-dom'

export default function Profil() {
  const { profilid } = useParams()
  return <h1>Profil {profilid}</h1>
}
