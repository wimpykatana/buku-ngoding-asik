import { useState, useMemo } from 'react'

function ExpensiveComputation({ num }) {
  console.log('Komputasi Berat...')
  let result = 0
  for (let i = 0; i < 1000000000; i++) {
    result += num
  }
  return result
}

function ContohUseContext() {
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(1)

  const result = useMemo(() => ExpensiveComputation({ num }), [num])

  return (
    <div className="wrapper">
      <h1>Contoh Hook useMemo</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambahkan Count</button>
      <p>Result: {result}</p>
      <button onClick={() => setNum(num + 1)}>Tambahkan Num</button>
    </div>
  )
}

export default ContohUseContext
