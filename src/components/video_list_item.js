import React from 'react'

const VideoListItem = ({video, onVideoSelect}) => {
	//const video = props.video; {video} is equavalent to this


	// whenever clickecd, call onVideoSelect on the video I was passed
	const imageUrl = video.snippet.thumbnails.default.url;
	return (

		<li onClick={() => onVideoSelect(video)}   className="list-group-item"> 
			<div className="video-list media">
				<div className="media-left">
					<img classNmae="midia-object" src={imageUrl} />
				</div>

				<div className="media-body">
					<div classNmae="midia-heading">{video.snippet.title}</div>
				</div>
			</div>

		</li>
	);
}

export default VideoListItem;