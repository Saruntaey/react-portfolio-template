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
					Results-driven Full Stack Developer in designing, developing, and optimizing e-commerce platforms within Agile
					environments. Proficient in Golang, TypeScript, gRPC, GraphQL, and React, with strong expertise in microservices
					architecture, cloud computing, and database management (MongoDB, PostgreSQL). Adept at building scalable, resilient
					applications and collaborating effectively across teams to achieve project goals. Passionate about clean, maintainable
					code and innovative problem-solving.
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
