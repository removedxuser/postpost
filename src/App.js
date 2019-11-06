import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';
import ProjectDetails from './Components/Projects/ProjectDetails';
import SingIn from './Components/Auth/SingIn';
import SingUp from './Components/Auth/SignUp';
import CreateProject from './Components/Projects/CreateProject';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Dashboard} />
				<Route path="/project/:id" component={ProjectDetails} />
				<Route path="/signin" component={SingIn} />
				<Route path="/signup" component={SingUp} />
				<Route path="/create" component={CreateProject} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
