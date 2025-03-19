import { BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'
import RouterConfig from './router'

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <RouterConfig />
    </BrowserRouter>
  )
}

export default App
