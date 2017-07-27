// how to decide if using functional or class coponent?
// doesnt need any state, it returns list of searched videos

// pass data down the domponents
// parent will import this function, and pass the data to it by defining props

import React from 'react'
import VideoListItem from './video_list_item'


// loop the array, for each video generate one video_list_item:
// provide a key for each element in the array: etag can be found under network tab, search on the left

// use map to  build list: array.map(function(number){ return number *2});
// array.map(function(number){return '<div>' + number = '</div>'})

// in functioan component, props is an arg
// but if switch to class component, need to change to this.props, as it can be accessed thoughout class
const VideoList = (props) => {

	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem 
				onVideoSelect={props.onVideoSelect} 
				key={video.etag} 
				video={video} />
		);
	});

	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>

		)
}

export default VideoList