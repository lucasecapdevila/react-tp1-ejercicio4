import React from 'react'
import { Button, ListGroup } from 'react-bootstrap'
import ItemTarea from './ItemTarea'

export default function ListaTareas() {
  return (
    <div className='d-flex flex-column'>
      <ListGroup>
        <ItemTarea />
      </ListGroup>
      <Button variant='danger' className='mt-3 align-self-end'>Eliminar todas las tareas</Button>    
    </div>
  )
}
