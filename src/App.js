import './App.css';
import Login from "./components/Login";
import UserDashboard from './components/Dashboards/UserDashboard';
import AdminDashboard from './components/Dashboards/AdminDashboard';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import {useSelector} from 'react-redux';
function App() {


  const UserPrivate=({ component: Component, ...rest }) => {
    const useSelect =useSelector(state=>state.role);
           const role= useSelect;
            return (
                <Route
                    {...rest}
                    render={props=>role=='user' ?
                        <Component {...props} /> :
                        <Redirect
                            to={{
                                pathname: '/',
                                state: { from: props.location }
                            }}
                        />
    
                    }
                />
    
            )}
          

  const AdminPrivate=({ component: Component, ...rest }) => {
    const useSelect =useSelector(state=>state.role);
    const role= useSelect;
            return (
                <Route
                    {...rest}
                    render={props=>role==='admin' ?
                        <Component {...props} /> :
                        <Redirect
                            to={{
                                pathname: '/',
                                state: { from: props.location }
                            }}
                        />
    
                    }
                />
    
            )}
          
  
  return (

    <Router>
      <div className="<MyContainer">
        <Switch>
          <Route exact path="/" >
            <Login/>
          </Route>
          <UserPrivate path="/UserDashboard" component={UserDashboard}/>
          <AdminPrivate  path="/AdminDashboard" component={AdminDashboard}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
