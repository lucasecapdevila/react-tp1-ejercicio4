import { Button, ListGroup } from 'react-bootstrap'
import ItemTarea from './ItemTarea'

export default function ListaTareas({tareas, borrarTarea}) {
  return (
    <div className='d-flex flex-column'>
      <ListGroup>
        {
          tareas.map((elementoTarea, posicionTarea) => <ItemTarea key={posicionTarea} nombreTarea={elementoTarea} borrarTarea={borrarTarea} />)
        }
      </ListGroup>
      <Button variant='danger' className='mt-3 align-self-end'>Eliminar todas las tareas</Button>    
    </div>
  )
}
