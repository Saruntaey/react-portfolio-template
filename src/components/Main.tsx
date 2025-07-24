import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { LeetcodeIcon } from './icons/LeetcodeIcon';
import { DevToIcon } from './icons/DevTo';
import '../assets/styles/Main.scss';
import profile from "../assets/images/profile.jpeg"
import { SvgIcon } from "@mui/material";

function Main() {
	const icons = <>
		<a href="https://github.com/saruntaey" target="_blank" rel="noreferrer"><GitHubIcon /></a>
		<a href="https://www.linkedin.com/in/sarun-tapee/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
		<a href="https://leetcode.com/u/saruntaey/" target="_blank" rel="noreferrer"><SvgIcon><LeetcodeIcon /></SvgIcon></a>
		<a href="https://dev.to/taey" target="_blank" rel="noreferrer"><SvgIcon><DevToIcon /></SvgIcon></a>
	</>

	return (
		<div className="container">
			<div className="about-section">
				<div className="image-wrapper">
					<img src={profile} alt="Avatar" />
				</div>
				<div className="content">
					<div className="social_icons">
						{icons}
					</div>
					<h1>Sarun Tapee</h1>
					<p>Full Stack Developer</p>

					<div className="mobile_social_icons">
						{icons}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
