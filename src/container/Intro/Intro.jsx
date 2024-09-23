import { meal } from "../../constants";
import { BsPauseFill, BsFillPlayFill } from "react-icons/bs";

import "./Intro.css";
import React, { useState } from "react";

const Intro = () => {
	const [playVideo, setPlayVideo] = useState(false);

	const vidRef = React.useRef();

	const handleVideo = () => {
		setPlayVideo((prev) => !prev);

		if (playVideo) {
			vidRef.current.pause();
		} else {
			vidRef.current.play();
		}
	};

	return (
		<div className="app__video">
			<video src={meal} ref={vidRef} type="video/mp4" controls={false} muted loop />

			<div className="app__video-overlay flex__center">
				<div className="app__video-overlay_circle flex__center" onClick={handleVideo}>
					{playVideo ? <BsPauseFill color="#fff" fontSize={30} /> : <BsFillPlayFill color="#fff" fontSize={30} />}
				</div>
			</div>
		</div>
	);
};

export default Intro;
