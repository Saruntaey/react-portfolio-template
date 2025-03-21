import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
	return (
		<footer>
			<div>
				<a href="https://github.com/saruntaey" target="_blank" rel="noreferrer"><GitHubIcon /></a>
				<a href="https://www.linkedin.com/in/sarun-tapee/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
			</div>
			<p>Thanks to <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a> for this template</p>
		</footer>
	);
}

export default Footer;
