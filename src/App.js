import React from 'react';
import {BrowserRouter as Router ,Switch ,Route} from 'react-router-dom';
import Login from './Components/auth/Login';
import NuevaCuentaUsuario from './Components/auth/NuevaCuentaUsuario';
import MenuInicial from './Components/menu/MenuInicial';
import Cars from './Components/Cars/Cars';
import TrucksPage from './Components/Trucks/TrucksPage';
import CreateTrucks from './Components/Trucks/CreateTrucks';
import EditTruck from './Components/Trucks/EditTruck';
import ListTrucks from './Components/Trucks/ListTrucks';
import CalendarPage from './Components/Calendar/CalendarPage';
import Navbars from './Components/NavBar/NavBars';
import history from './Components/history/history';
import {Provider} from 'react-redux';
import store from './store';
function App(){
    return(
        <Router>  
                <Provider store ={store}>        
                    <Switch>
                        <Route exact path="/" component ={Login} history={history}/>
                        <Route exact path="/Nueva-Cuenta-Usuario" component ={NuevaCuentaUsuario}  />
                        <Route exact path="/MenuInicial" component ={MenuInicial}  />
                        <Route exact path="/Cars" component ={Cars}  />
                        <Route exact path="/TrucksPage" component ={TrucksPage}  />
                        <Route exact path="/CalendarPage" component ={CalendarPage}  />
                        <Route exact path="/CreateTrucks" component ={CreateTrucks}  />
                        <Route exact path="/EditTruck/:id" component ={EditTruck}  />
                        <Route component ={Navbars}  />
                        <Route component ={ListTrucks}  />
                    </Switch>
                </Provider> 
        </Router>
    )
}

export default App;