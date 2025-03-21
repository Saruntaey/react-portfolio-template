import React from "react";
import khampee from '../assets/images/khampee.png';
import videoEncoder from '../assets/images/video_encoder.png';
import videoServer from '../assets/images/video_server.png';
import db from '../assets/images/db.png';
import '../assets/styles/Project.scss';

const projects = [
	{
		img: khampee,
		link: "https://learn.khampee.com",
		title: "Video On Demand",
		des: "Developed a full-stack online course platform, allowing administrators to manage courses and users to purchase content. Implemented secure video encryption, adaptive streaming based on device/internet speed, and automated payment processing. Tech Stack: Golang, TypeScript, React, GraphQL, MongoDB, Google Cloud Storage.",
	},
	{
		img: videoEncoder,
		link: "https://github.com/Saruntaey/video-server/tree/main/src/script/process-video",
		title: "Video Encoder Script",
		des: "A script developed in JavaScript that process video by divide the video in to segments(.ts) and create a playlist(.m3u8) using ffmpeg.",
	},
	{
		img: videoServer,
		link: "https://github.com/Saruntaey/video-server",
		title: "Video Server",
		des: "The server streams video with HLS (HTTP Live Streaming). The streaming is adaptive based on the device and internet speed.",
	},
	{
		img: db,
		link: "https://github.com/Saruntaey/toydb",
		title: "Database from Scratch in Go",
		des: "Mini Relational DB. The purpose of this project is to learn how relational databases work by implementing some functions of the database using Golang with B+Tree as an underlying data structure.",
	},
]

function Project() {
	return (
		<div className="projects-container" id="projects">
			<h1>Personal Projects</h1>
			<div className="projects-grid">
				{projects.map(p => (
					<div className="project">
						<a href={p.link} target="_blank" rel="noreferrer"><img src={p.img} className="zoom" alt="thumbnail" width="100%" /></a>
						<a href={p.link} target="_blank" rel="noreferrer"><h2>{p.title}</h2></a>
						<p>{p.des}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Project;
