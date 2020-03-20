import React, { useState, useEffect } from 'react'
import { Button, Card, Spinner } from 'react-bootstrap'

const ExamCard = () => (
  <Card>
    <Card.Body>
      <Card.Title>Try Out SBMPTN 2019</Card.Title>
      <Card.Subtitle></Card.Subtitle>
      <Card.Body>
        <p>Tanggal ujian: 2 Januari 2020</p>
        <p>Waktu ujian: 08.00 - 10.00</p>
        <Button style={{ marginTop: '20px' }}>Daftar Ujian</Button>
      </Card.Body>
    </Card.Body>
  </Card>
)

const ExamSpinner = () => (
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
      {isLoading === true ? <ExamSpinner /> : <ExamCard />}
    </div>
  )
}
