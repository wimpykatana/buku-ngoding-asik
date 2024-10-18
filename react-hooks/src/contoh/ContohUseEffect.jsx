import { useState, useEffect } from 'react'

const ContohUseEffect = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        // code di bawah ini akan dijalankan setiap kali komponen di render
        document.title = `anda mengklik ${count} kali`

        // pemanggilan fungsi cleanup
        return () => {
            console.log('Cleanup')
        }
    }, [count]) // hanya akan dijalankan jika nilai count berubah

    return (
        <div className='wrapper'>
            <h1>Contoh Hook useEffect</h1>
            <p>Hitungan Saat Ini: {count}</p>
            <button 
                onClick={() => setCount(count + 1)}>
                Tambah
            </button>
            <button 
                onClick={() => setCount(count - 1)}>
                Kurangi
            </button>
        </div>
    )
}

export default ContohUseEffect