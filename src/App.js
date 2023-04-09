import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import TemplateDefault from './partials/templates/Default'
import Customers from './pages/Customers'

import TemplatePage from './partials/templates/Page'
import Home from './pages/Home'

const App = () => {
  return (
    <TemplateDefault>
    <Router>
      <Switch>
        <Route path="/customers">
           <TemplatePage title='Clientes' Component={Customers} />
        </Route>
        <Route path="/">
           <TemplatePage title='Pagina inicial' Component={Home} />   
        </Route>
      </Switch>
    </Router>
    </TemplateDefault>
  )
}

export default App
