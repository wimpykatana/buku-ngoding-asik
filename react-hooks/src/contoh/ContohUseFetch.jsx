import React from 'react'
import useFetch from '../hooks/useFetch'

const ContohUseFetch = () => {
  const { data, loading, error } = useFetch('https://api.example.com/data')

  return (
    <div className="wrapper">
      <h1>Contoh custom hook useFetch</h1>
      <h2>Data dari API:</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
}

export default ContohUseFetch
