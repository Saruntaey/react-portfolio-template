import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'
import { LeetcodeIcon } from './icons/LeetcodeIcon';
import { DevToIcon } from "./icons/DevTo";
import { SvgIcon } from "@mui/material";

function Footer() {
	return (
		<footer>
			<div>
				<a href="https://github.com/saruntaey" target="_blank" rel="noreferrer"><GitHubIcon /></a>
				<a href="https://www.linkedin.com/in/sarun-tapee/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
				<a href="https://leetcode.com/u/saruntaey/" target="_blank" rel="noreferrer"><SvgIcon><LeetcodeIcon /></SvgIcon></a>
				<a href="https://dev.to/taey" target="_blank" rel="noreferrer"><SvgIcon><DevToIcon /></SvgIcon></a></div>
			<p>Thanks to <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a> for this template</p>
		</footer>
	);
}

export default Footer;
