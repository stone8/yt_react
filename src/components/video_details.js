// no need of state

import React from 'react'

// instead of pass paros, using {video}
const VideoDetail = ({video}) => {

	// should add to every single component (if parent not fetch data yet)
	if(!video) {
		return <div>Loading...</div>
	}
	const videoId = video.id.videoId;

	//ES6: equavalent to str1 + str2,use back tick 
	const url = `https://www.youtube.com/embed/${videoId}`;
	//const url = 'https://www.youtube.com/embed/' + videoId;

	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-tiem" src={url}></iframe>

			</div>

			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;