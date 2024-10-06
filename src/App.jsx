
import  {Home}  from './pages/home/Home'
import { Session } from './pages/session/Session'
import { Songs } from './pages/music/Songs'
import {BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {

  return (
    <>
    {/* BrowserRouter activamos ReactRouterDOM en la app */}
      <BrowserRouter>
    {/* Activamos la funcionalidad de poder empezar a crear RUTAS en */}
            <Routes>
            <Route index path='/' element={ <Home />} />
            <Route path='/session' element={ <Session />} />
            <Route path='/Songs' element={ <Songs />} />

            </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
