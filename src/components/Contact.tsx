import React from 'react';
import '../assets/styles/Contact.scss';
import { SvgIcon } from '@mui/material';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function Contact() {

	return (
		<div id="contact">
			<div className="items-container">
				<div className="contact_wrapper">
					<h1>Contact Me</h1>
					<p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
					<p>
						<SvgIcon style={{ marginRight: 8 }}>
							<FontAwesomeIcon icon={faPhone} />
						</SvgIcon>
						(641) 819-2239
					</p>
					<p>
						<SvgIcon style={{ marginRight: 8 }}>
							<FontAwesomeIcon icon={faEnvelope} />
						</SvgIcon>
						sarun.t3e@gmail.com
					</p>
				</div>
			</div>
		</div>
	);
}

export default Contact;
