import { useRef } from 'react'

const ContohUseRef = () => {
    const inputRef = useRef(null)

    const handleClick = () => {
        inputRef.current.focus()
    }

    return (
        <div className='wrapper'>
            <h1>Contoh Hook useRef</h1>
            <input ref={inputRef} type="text" placeholder="Klik tombol untuk fokus" />
            <button onClick={handleClick}>Fokus pada Input</button>
        </div>
    )
}

export default ContohUseRef