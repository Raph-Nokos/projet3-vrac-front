import { useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './screens/Home'
import AdminInterfaceHome from './admin/AdminInterfaceHome.js'
import Aliments from './screens/Aliments'
import AuxFourneaux from './screens/AuxFourneaux'
import Header from './components/Header'

import './App.css'

function App() {
  const [displayHeader, setDisplayHeader] = useState(true)
  return (
    <div className='App'>
      {displayHeader ? <Header /> : null}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/aux_fourneaux' component={AuxFourneaux} />
        <Route
          path='/aux_fourneaux/curieux_aliments/:id'
          component={Aliments}
        />
        <Route path='/admin'>
          <AdminInterfaceHome setDisplayHeader={setDisplayHeader} />
        </Route>
      </Switch>
    </div>
  )
}

export default App
