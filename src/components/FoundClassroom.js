import React, { useState, useEffect } from 'react'
import { Button, Card, Spinner } from 'react-bootstrap'

const ClassroomCard = () => (
  <Card>
    <Card.Body>
      <Card.Title>Kelas Persiapan SBMPTN 2020</Card.Title>
      <Card.Subtitle></Card.Subtitle>
      <Card.Body>
        <p>Pengajar: Rifqi Eka Hardianto S.E</p>
        <p>Banyak Murid: 11</p>
        <Button style={{ marginTop: '20px' }}>Daftar Kelas</Button>
      </Card.Body>
    </Card.Body>
  </Card>
)

const ClassroomSpinner = () => (
  <Spinner animation="grow" role="status" style={{ color: '#384B60' }}>
    <span className="sr-only">Loading...</span>
  </Spinner>
)

export default () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setInterval(() => {
      setIsLoading(!isLoading)
    }, 1000)
  }, [])

  return (
    <div style={{ padding: '0 30%' }} className="text-center">
      {isLoading === true ? <ClassroomSpinner /> : <ClassroomCard />}
    </div>
  )
}
