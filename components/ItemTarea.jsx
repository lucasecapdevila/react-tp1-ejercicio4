import React from 'react'
import { Button, ListGroupItem } from 'react-bootstrap'

export default function ItemTarea() {
  return (
    <ListGroupItem className='d-flex align-items-center justify-content-between'>
      Tarea
      <Button variant='secondary' className='me-2'><i class="fa-solid fa-trash"></i></Button>
    </ListGroupItem>
  )
}
