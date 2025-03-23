import React from 'react'
import Card from './Card'

export default function Heading({text}) {
  return (
    <h1>
        {text}

        <Card title="Product 1" description="This is a great product!" />
    </h1>
  )
}
