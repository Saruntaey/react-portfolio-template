import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

const histories = [
	{
		type: "edu",
		title: "Maharishi International University",
		date: "April 2024 - Pressent",
		company: "Master of Science in Computer Science",
		loc: "Fairfield, Iowa",
		description: "Key Courses: Machine Learning, Advanced Software Development, Algorithms, Web Application Architecture",
	},
	{
		type: "work",
		title: "Full-Stack Developer",
		date: "Oct 2021 - Dec 2023 (2 yrs 2 mos)",
		company: "Digithun Worldwide Co.,Ltd.",
		loc: "Bangkok, Thailand",
		description: "Developed and optimized full-stack applications for an e-commerce platform specializing in books (physical, e-books, \
audiobooks, and novels). Collaborated with cross - functional teams to enhance user experience, security, and system \
performance." ,
	},
	{
		type: "work",
		title: "Naval Architecture",
		date: "Aug 2019 - July 2021 (2 yrs)",
		company: "Albatross Marine Design Co.,Ltd.",
		loc: "Pattaya, Thailand",
		description: "Asscss the stability of the ship. Design structure of aluminum and composit boat.",
	},
	{
		type: "work",
		title: "Associate Pipeline Engineer",
		date: "Nov 2018 - Aug 2019 (10 mos)",
		company: "Synterra Co.,Ltd.",
		loc: "Bangkok, Thailand",
		description: "Project engineer in developing marine growth cleaning machine prototype for offshore platform leg and conductor. Develop calculation sheet using Smath program.",
	},
	{
		type: "work",
		title: "Internship",
		date: "Jun 2017 - Jul 2017 (2 mos)",
		company: "Seat Boat Co.,Ltd.",
		loc: "Pattaya, Thailand",
		description: "Learn process of building a fiberglass boat and trailer construction. Design overhead crane, fresh water tank and fuel tank, and mold support using AutoCAD.",
	},
	{
		type: "edu",
		title: "Chulalongkorn University",
		date: "Jul 2014 - Jul 2018 (4 yrs)",
		company: "Naval Architecture & Marine Engineering",
		loc: "Bangkok, Thailand",
		description: "Bachelor’s in Mechanical Engineering",
	},
]

function Timeline() {
	return (
		<div id="history">
			<div className="items-container">
				<h1>Career History</h1>
				<VerticalTimeline>
					{
						histories.map(h => (
							<VerticalTimelineElement
								className="vertical-timeline-element--work"
								contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
								contentArrowStyle={{ borderRight: '7px solid  white' }}
								date={h.date}
								iconStyle={{ background: h.type === "work" ? '#5000ca' : '#eb3d34', color: 'rgb(39, 40, 34)' }}
								icon={<FontAwesomeIcon icon={h.type === "work" ? faBriefcase : faGraduationCap} />}
							>
								<h3 className="vertical-timeline-element-title">{h.title}</h3>
								<h4 className="vertical-timeline-element-subtitle">{h.company}</h4>
								<h4 className="vertical-timeline-element-subtitle">{h.loc}</h4>
								<p>
									{h.description}
								</p>
							</VerticalTimelineElement>
						))

					}
				</VerticalTimeline>
			</div>
		</div>
	);
}

export default Timeline;
