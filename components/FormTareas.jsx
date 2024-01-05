import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ListaTareas from './ListaTareas';

const FormTareas = () => {
  const [tarea, setTarea] = useState('')
  const [tareas, setTareas] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setTareas([...tareas, tarea])
    setTarea('')
  }

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="inputTarea">
          <Form.Control
            size='lg'
            type="text"
            minLength={5}
            maxLength={50}
            value={tarea}
            placeholder="Ingrese sus tareas"
          />
          <Button variant='success' className='mx-2 px-4' type='submit'>Agregar</Button>
        </Form.Group>

        <ListaTareas />
      </Form>
    </section>
  );
};

export default FormTareas;