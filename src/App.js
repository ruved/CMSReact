import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';

import { BrowserRouter as Router, Route,Link,Switch } from 'react-router-dom'

function App() {
  return (
    <Router >
      <div className="main">
        <h2 className="main-header">Employee CRUD Operations</h2> 
        <Link to="/read" style= {{color:'white',background:"rgb(90, 119, 108)"}} > ALL Records</Link> <br/>
      <Switch>
      <Route exact path='/create' component={Create} />
      <Route exact path='/read' component={Read}/>
      <Route path='/update' component={Update} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
