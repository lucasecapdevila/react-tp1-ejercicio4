import React from 'react';
import { Button, Form } from 'react-bootstrap';

const FormTareas = () => {
  return (
    <section>
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="inputTarea">
          <Form.Control
            size='lg'
            type="text"
            minLength={5}
            maxLength={50}
            placeholder="Ingrese sus tareas"
          />
          <Button variant='success' className='mx-2 px-4' type='submit'>Agregar</Button>
        </Form.Group>

      </Form>
    </section>
  );
};

export default FormTareas;