import { Link } from 'react-router-dom'

export default function Halaman404() {
  return (
    <div>
      Halaman Tidak Ditemukan. <br />
      Kembali ke <Link to="/">Halaman Utama</Link>
    </div>
  )
}
