import { useEffect, useState } from 'react'
import './RotatingImage.css'

function RotatingImage({ images, alt = '', interval = 3500, className = '' }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length < 2) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, interval)
    return () => clearInterval(id)
  }, [images.length, interval])

  return (
    <div className={`rotating-image ${className}`}>
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={i === 0 ? alt : ''}
          aria-hidden={i === 0 ? undefined : true}
          className={i === index ? 'is-active' : ''}
        />
      ))}
    </div>
  )
}

export default RotatingImage
