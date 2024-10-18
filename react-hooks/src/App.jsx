import './App.css'
import ContohUseState from './contoh/ContohUseState'
import ContohUseEffect from './contoh/ContohUseEffect'
import ContohUseContext from './contoh/ContohuseContext'
import ContohUseRef from './contoh/ContohUseRef'
import ContohUseReducer from './contoh/ContohUseReducer'
import ContohUseMemo from './contoh/ContohUseMemo'
import ContohUseCallback from './contoh/ContohUseCallback'
import ContohUseFetch from './contoh/ContohUseFetch'

function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>

      {/* memanggil komponen useFetch */}
      <ContohUseFetch />

      {/* memanggil komponen useCallback */}
      <ContohUseCallback />

      {/* memanggil komponen useMemo */}
      <ContohUseMemo />

      {/* memanggil komponen useReducer */}
      <ContohUseReducer />

      {/* memanggil komponen useContext */}
      <ContohUseContext />

      {/* memanggil komponen useRef */}
      <ContohUseRef />

      {/* memanggil komponen useEffect */}
      <ContohUseEffect />

      {/* memanggil komponen useState */}
      <ContohUseState />
    </div>
  )
}

export default App
