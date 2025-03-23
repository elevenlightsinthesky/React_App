import React from 'react'
import Heading from './Heading'

export default function Card({title, description}) {
  return (
    <div>
        <Heading text={title} />
        <p>{description}</p>
    </div>
  )
}
