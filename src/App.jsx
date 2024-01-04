import { Container } from 'react-bootstrap'
import './App.css'
import Footer from '../components/Footer'

function App() {

  return (
    <>
      <Container className='my-4 mainPage'>
        <h1 className='display-1 text-center'>Lista de Tareas</h1>
      </Container>

      <Footer />
    </>
  )
}

export default App
