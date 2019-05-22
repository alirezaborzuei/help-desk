import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./component/Navbar";
import Dashboard from "./component/Dashboard";
import SupportTeamList from "./component/SupportTeam/SupportTeamList";
import CostumersList from "./component/Costumers/CostumersList";
import ProductsList from "./component/Products/ProductsList";
import TicketsList from "./component/Tickets/TicketsList";
import AddProduct from "./component/Products/AddProduct";
import AddTicket from "./component/Tickets/AddTicket";


class App extends React.Component {


    render() {
        return (
            <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route path="/" exact={true} component={Dashboard}/>
                    <Route path="/support-team" component={SupportTeamList}/>
                    <Route path="/costumers" component={CostumersList}/>
                    <Route path="/products" component={ProductsList}/>
                    <Route path="/add-product" component={AddProduct}/>
                    <Route path="/tickets" component={TicketsList}/>
                    <Route path="/add-ticket" component={AddTicket}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;