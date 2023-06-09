import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import TemplateDefault from './templates/Default'
import CustomersList from './pages/Customers/List'

import TemplatePage from './templates/Page'
import CustomersRegister from './pages/Customers/Register'
import Home from './pages/Home'

const App = () => {
  return (
    
    <Router>
      <TemplateDefault>
      <Switch>      
        <Route path="/customers/add">
           <TemplatePage title='Cadastro de Clientes' Component={CustomersRegister} />
        </Route>
        <Route path="/customers">
           <TemplatePage title='Lista de Clientes' Component={CustomersList} />
        </Route>
        <Route path="/">
           <TemplatePage title='Pagina Inicial' Component={Home} />   
        </Route>
      </Switch>   
      </TemplateDefault>
    </Router>
 
  )
}

export default App
