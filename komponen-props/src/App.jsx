import './App.css'
import hewan from './data/hewan'
import Kartu from './komponen/Kartu'

function tampilkanData(informasi) {
  const alertInformasi = Object.entries(informasi)
   .map(data => `${data[0]}: ${data[1]}`)
   .join('\n\n');
  alert(alertInformasi)
  };

function App() {

  return (
    <div className='wrapper'>
      <h1>Daftar Hewan</h1>
      {
        hewan.map((item) => {
          return (
            <Kartu 
              key={item.nama} 
              nama={item.nama}
              namaLatin={item.namaLatin}
              berat={item.berat}
              makanan={item.makanan}
              informasi={item.informasi}
              tampilkanData={tampilkanData}
            />
          )
        })
      }
    </div>
  )
}

export default App
