import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './Kota.css'

const api = {
  key: 'e3b82c1d121701df51755f64255af66c',
  base: 'http://api.weatherstack.com/current?access_key=e3b82c1d121701df51755f64255af66c&query=',
}

export default function Kota() {
  const { idkota } = useParams()
  const [cuaca, setCuaca] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(api.base + idkota)
      .then((res) => {
        setCuaca(res.data)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [idkota])

  console.log(cuaca)

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div
      className={`kotaHolder ${
        cuaca ? (cuaca.current.is_day === 'yes' ? 'day' : 'night') : ''
      }`}
    >
      <div className="textHolder">
        <div className="city">{cuaca?.request.query}</div>
        <div className="date">{cuaca?.location.localtime}</div>
        <div className="weather">{cuaca?.current.weather_descriptions}</div>
        <div className="temp">{cuaca?.current.temperature + '°c'}</div>
      </div>
    </div>
  )
}
