
import Home from './Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Eventss from './Events'
import Test from './Test'
import Events from './Components/Events'
import AddEvent from './Components/AddEvent'
import UpdateEvent from './Components/EditEvent'
import Compretitions from './Compretitions'
import NotFound from './NotFound';
import CompetitionDetails from './CompetitionDetails'
import AddCompetition from './AddCompetition';

function App() {
  

  return (
    <>
      <Routes>
        <Route
          path='/home'
          element={<Home />}
        />
        <Route
          path='/competition'
          element={<Compretitions />}
        />
        <Route
          path='/competition/:id'
          element={<CompetitionDetails />}
        />
        <Route
          path='/add-competition'
          element={<AddCompetition />}
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
        <Route
          path='/*'
          element={<NotFound />}
        />
      </Routes>
    </>
  )
}

export default App
