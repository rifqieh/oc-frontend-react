import React, { useEffect, useState } from 'react'
import InputClassroomCode from './InputClassroomCode'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import ClassroomCard from './ClassroomCard'
import { Card, CardColumns, CardDeck } from 'react-bootstrap'

export default () => {
  return (
    <div style={{ height: '100hv' }}>
      <div>
        <InputClassroomCode />
        <CardDeck>
          <ClassroomCard />
          <ClassroomCard />
          <ClassroomCard />
          <ClassroomCard />
        </CardDeck>
      </div>
    </div>
  )
}
