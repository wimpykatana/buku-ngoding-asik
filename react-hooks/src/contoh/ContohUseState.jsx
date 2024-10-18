import { useState} from 'react'

function ContohUseState() {

    const [count, setCount] = useState(0)

    return (
        <div className='wrapper'>
            <h1>Contoh Hook useState</h1>
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

export default ContohUseState