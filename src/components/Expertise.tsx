import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faGolang, faLinux } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faDatabase, faServer } from "@fortawesome/free-solid-svg-icons";


const skills = [
	{
		title: "Programming Languages",
		icon: faGolang,
		values: ["Golang", "JavaScript", "TypeScript", "Python"],
	},
	{
		title: "Frontend",
		icon: faReact,
		values: ["React", "MaterialUI", "ElasticUI", "TailwindCSS", "Emotion", "HTML", "CSS", "JSON"],
	},
	{
		title: "Backend",
		icon: faServer,
		values: ["gRPC", "GraphQL", "Express", "NodeJS", "NextJS"],
	},
	{
		title: "Databases",
		icon: faDatabase,
		values: ["MongoDB", "PostgreSQL", "Elasticsearch"],
	},
	{
		title: "Dev tools",
		icon: faDocker,
		values: ["Docker", "Postman", "Swagger", "VSCode", "Neovim", "IntelliJ IDEA", "Jira", "Discord"],
	},
	{
		title: "Platforms",
		icon: faLinux,
		values: ["Windows", "Linux", "MacOS"],
	}
]

function Expertise() {
	return (
		<div className="container" id="expertise">
			<div className="skills-container">
				<h1>Expertise</h1>
				<p style={{ marginBottom: 40 }}>
					<b>Naval Architect & Full Stack Developer</b> with 5 years of experience, including 3+ years in Naval
					Architecture and 2+ years in Full Stack Development, specializing in e-commerce platforms and Agile
					environments. Skilled in Golang, TypeScript, React, gRPC, and GraphQL, with deep expertise in microservices,
					cloud computing, and database management (MongoDB, PostgreSQL). Proven ability to design scalable,
					high-performance applications while ensuring clean, maintainable code. Strong collaborator with cross-functional
					teams to drive project success. Passionate about innovative problem-solving and optimizing system efficiency.
				</p>
				<div className="skills-grid">
					{skills.map((s, idx) => (
						<div key={idx} className="skill">
							<FontAwesomeIcon icon={s.icon} size="3x" />
							<h3>{s.title}</h3>
							<div className="flex-chips">
								{s.values.map((label, index) => (
									<Chip key={index} className='chip' label={label} />
								))}
							</div>
						</div>))}
				</div>
			</div>
		</div>
	);
}

export default Expertise;
