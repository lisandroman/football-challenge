import { Navbar } from './components'
import { Home } from './pages'
import { Layoutcontainer } from './styled-components'

function App() {

  return (
    <>
      <Navbar />
      <Layoutcontainer>
        <Home />
      </Layoutcontainer>
    </>
  )
}

export default App
