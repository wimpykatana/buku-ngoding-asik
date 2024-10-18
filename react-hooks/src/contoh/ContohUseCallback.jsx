import React, { useState, useCallback } from 'react'

function ContohUseCallback() {
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(1)

  const increment = useCallback(() => {
    setCount(count + 1)
  }, [count])

  return (
    <div className="wrapper">
      <h1>Contoh Hook useCallback</h1>
      <p>Count: {count}</p>
      <IncrementButton onIncrement={increment} />

      <p>Num: {num}</p>
      <button onClick={() => setNum(num + 1)}>Tambahkan Num</button>
    </div>
  )
}

const IncrementButton = React.memo(({ onIncrement }) => {
  console.log('IncrementButton berhasil dirender')
  return <button onClick={onIncrement}>Tambahkan Count</button>
})

export default ContohUseCallback
