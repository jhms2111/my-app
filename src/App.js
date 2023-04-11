import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import TemplateDefault from './templates/Default'
import Customers from './pages/Customers'

import TemplatePage from './templates/Page'
import Home from './pages/Home'

const App = () => {
  return (
    
    <Router>
      <TemplateDefault>
      <Switch>
        <Route path="/customers">
           <TemplatePage title='Clientes' Component={Customers} />
        </Route>
        <Route path="/">
           <TemplatePage title='Pagina inicial' Component={Home} />   
        </Route>
      </Switch>   
      </TemplateDefault>
    </Router>
 
  )
}

export default App
