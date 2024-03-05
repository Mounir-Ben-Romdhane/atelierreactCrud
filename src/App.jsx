
import Home from './Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Eventss from './Events'
import Test from './Test'
import Events from './Components/Events'
import AddEvent from './Components/AddEvent'
import UpdateEvent from './Components/EditEvent'

function App() {
  

  return (
    <>
      <Routes>
        <Route
          path='/home'
          element={<Home />}
        />
        <Route
          path='/eventsss/:id?'
          element={<Eventss />}
        />
        <Route
        path='/test'
        element={<Test /> }/>
        <Route
        path='/events'
        element={<Events /> }/>
        <Route path="/add-event" element={<AddEvent />} />
        <Route path="/update-event/:id" element={<UpdateEvent />} />
      </Routes>
    </>
  )
}

export default App
