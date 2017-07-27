/*
export module
class
state


here: defined SearchBar and export it
in index.js:
import SearchBar and render it

to form a tree of components
*/
import React, { Component } from 'react'
// {} : pull off Component and give it to varialb ecalled Component:
/*
// genereate text area use can type info, no frill input
// functional component
const SearchBar = () => {
	return <input /> // React.createElement
};*/

//class component; aware/introspect of itself, using escs6 class
// ability to communicate with other component
// 
class SearchBar extends Component {

	constructor(props) {
		super(props);
		this.state = { term: ''}; //init property term. update it whenver this is change
		// use setState to change it later
	}

	// every class has render method which return jsx
	// {} is used to wrap varaible; onChange is a property

	// simple example of how state works: 
	// whenever we update state, cause component re-render, so render() will be executed
	// therefore, print out value of input: user input with this:
	//Value of the input: {this.state.term}

	// controlled compoenet: value ={this.state.term} 
	// state tells what input is
	// input changes the state
	// instead of query input, we can always get latest input from this.state.term
	render() {
		return (
			<div className="search-bar">
				<input 
					value ={this.state.term} 
					onChange={event => this.onInputChange(event.target.value)} />; 
			</div>
		)
	}


// can be replace by => for one line function
//return <input onChange={event => console.log(event.target.value)} />; 
	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}


export default SearchBar;

/* state: 
state: js object used to record and react to user event;
each class based component has it own state obj
whenve a copone t state chagnen, compoenet immediately re-rendered and alfo forces its chinldren re-rendered
state needs to be initiatlied, set prop state inside class constructor
each instance of class has its own state

*/