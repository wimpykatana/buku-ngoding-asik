import './kartu.css'
import PropTypes from 'prop-types'

const Kartu = ({
    nama,
    namaLatin,
    berat,
    makanan,
    informasi,
    tampilkanData
}) => {
    return (
        <div className='kartu-wrapper'>
            <h2>{nama}</h2>
            <p><i>{namaLatin}</i></p>
            <p>Berat: {berat} kg</p>
            <p>Makanan: {makanan.join(', ')}</p>
            <button onClick={
                () => tampilkanData(informasi)
            }>Informasi</button>
        </div>
    )
}

Kartu.propTypes = {
    informasi: PropTypes.shape({
        catatan: PropTypes.string,
        link: PropTypes.string
    }),
    nama: PropTypes.string.isRequired,
    namaLatin: PropTypes.string.isRequired,
    berat: PropTypes.number.isRequired,
    makanan: PropTypes.arrayOf(PropTypes.string).isRequired,
    tampilkanData: PropTypes.func.isRequired
}

Kartu.defaultProps = {
    informasi: {
        catatan: 'Tidak ada informasi tambahan',
    }
}

export default Kartu