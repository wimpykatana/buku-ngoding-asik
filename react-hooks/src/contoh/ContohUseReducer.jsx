import { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        default:
            return state
    }
}

const ContohUseReducer = () => {

    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
        <div className='wrapper'>
            <h1>Contoh Hook useReducer</h1>
            <p>Hitungan: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>
                Tambah
            </button>
            <button onClick={() => dispatch({ type: 'decrement' })}>
                Kurangi
            </button>
        </div>
    )
}

export default ContohUseReducer