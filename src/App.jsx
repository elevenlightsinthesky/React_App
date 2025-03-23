import React from 'react'
import Heading from './components/Heading'
import Card from './components/Card'

export default function App() {
  return (
    <div>
      <Heading text="First heading" />
      <Heading text="Second heading" />
      <Heading text="Third heading" />

      <Card title="Product 1">
        This is a great product! This is also a long description.
        <button>Click</button>
      </Card>

    </div>
  )
}
