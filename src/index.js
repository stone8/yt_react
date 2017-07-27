/*
two steps in react:
1. create a new component, which produce html
2. take this this component's generated htlml and render it on the page 
   (in the DOM)

where to fetch data:
 downward data flow: only the most parent component responsible fetch the data
 other componendst are childresn of app and all use featched data.

 how to list the data in child compoenet:


 how to inable search bar:
 1. add callback in parent compoenet and pass to the child compoenet
 2. in child component, in event handler of the input element, set state and call the callback function

install lo-dahs for throttling
npm install --save lodash

*/


import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
import VideoDetail from './components/video_details'
import _ from 'lodash';

// get from https://console.developers.google.com/apis/credentials?project=react-174618
// install a package:
//cd ~/react_playground/Udem/ReduxSimpleStarter/
// npm install --save youtube-api-search
// it will add to the package.json
// api call

const API_KEY = 'AIzaSyCmz_66oEaDwBB3FPdS08hypXZ4cfHatFo';



/* step 1:
//jsx is translated into vanila js.

const App = function() {
	return <div> Hi </div>
}
 same as: 
const App = ()  => {
	return <div> Hi </div>
}

const App = () =>{
	return (
		<div> 
			<SearchBar />
		</div>
	)
}

change from functional component to class based component, so it can keep track of videos:
whenever a new search, we set the result to the new state
*/


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [], 
			selectedVideo: null
		};

		this.videoSearch('surfboards'); // initialize
	}

	//callback
	videoSearch(term) {
		// youtube search:
		//pass config and call back function:
		// called in constructor, so user will get something at the beginning
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			}); // ES6 equavelent to {videos:videos} if key, value have the same name
		});
	}

	// pass props to child compoenet
	// the redner() run async with above constructor, so videos could still be empty while the YTSearch is still going on above
	// this is common, react always to render components, sometimes, parents component is not fast enough to fetch data
	// solution: add check in child copoenent

	// define and pass a function onVideoSelect to the child compoenet as callback to manipulate parent compoenet
	render() {

// call the function every 300 mili-seconds
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
		return (
			<div> 
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos} /> 
			</div>
		);
	}
}




/* step 2: 
the above function(factory) createds a class, not a instance;
we need instantiated it before pass it to render

self closing tag:
<App />
*/
ReactDOM.render (<App />, document.querySelector('.container'))
