import './App.css';

import React, { createContext, useState } from 'react';

import CityList from './components/CityList';
import AddCityButton from './components/AddCityButton';
import TemperatureAve from './components/TemperatureAve';


// context: Define the Context
export const WeatherContext = createContext(
	{
		cities: [],

		addCity: (name, temperature) => {
			this.cities.push(name, temperature);
		},
	}
)


function App() {
	// Replace the logic in our App component
	const [cities, setCities] = useState([]);
	
	const addCity = (name, temperature) => {
		// const newCity = {name, temperature};

		setCities(prevCities => [...prevCities, {name, temperature}]);
	}

	return (
		<WeatherContext.Provider value={{cities, addCity}} >

			<div className='container'>

				<div className='city-overview' >
					<h2> Multi-Weather App </h2>

					<CityList />

					<AddCityButton />

					<TemperatureAve />				
				</div>

			</div>

		</WeatherContext.Provider>
	);
}


export default App;

// https://rapidapi.com/blog/react-context-api/?utm_source=google&utm_medium=cpc&utm_campaign=DSA&gclid=Cj0KCQiAoY-PBhCNARIsABcz770NvWTZT4Aqw_2X3vNTJzsde4nnEvASmDLGHtlMwAGVjfZoj5cOLsEaAosiEALw_wcB


/*
React Context API: Store the state in a Context value in the common 
ancestor component (called the Provider Component), and access 
it from as many components as needed (called Consumer Components), 
which can be nested at any depth under this ancestor. 


1. Defining the Context object.
If we wanted to store data about the current user of a web app, we 
could create a UserContext that can be used in the next two steps:

// Here we provide the initial value of the context
const UserContext = React.createContext({
	currentUser: null,
});


Providing a value for a Context in the hierarchy. 
Assuming you had an AccountView component, you might 
provide a value like this:

const AccountView = (props) => {
	const [currentUser, setCurrentUser] = React.useState(null);

	return (
		// Here we provides the actual value for its descendents 
		<UserContext.Provider value={{ currentUser: currentUser }}>
			<AccountSummary/>

			<AccountProfile/>
		</UserContext.Provider>
	);
};


3. Accessing the current Context value lower in the hierarchy. 
If the AccountSummary component needed the user, we could have 
just passed it as a prop. But let’s assume that it doesn’t directly access 
the user data, but rather contains another component that does:

// Here we don't use the Context directly, but render children that do.
const AccountSummary = (props) => {
	return (
		<AccountSummaryHeader/>

		<AccountSummaryDashboard/>

		<AccountSummaryFooter/>
	);
};

We can reasonably expect that all three of these child components will 
want to access the current user’s data. But to keep things simple, let’s 
just look at the AccountSummaryHeader component:

const AccountSummaryHeader = (props) => {
	// Here we retrieve the current value of the context
	const context = React.useContext(UserContext);

	return (
		<section>
			<h2>{context.currentUser.name}</h2>
		</section>
	);
};

In the above examples, we did three things:
1. Created a UserContext object.
2. Set a root value in AccountView.
3. Accessed this value deep within AccountSummaryHeader.


How does React Context API work with the Render cycle?
Every time the Provider Component renders, the value prop of its 
Context object may trigger a re-render of the component tree just 
s if it had passed a different prop to one of its child components. 
When this happens, any Consumer Component lower in that tree 
will re-render, with the new context value. If using the useContext 
hook, this will have the new value of the hook during the 
new render.

*/ 