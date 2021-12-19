import React, { Component } from "react";
import "./training.css";

class Training extends Component {
  render() {
		return (
		<section className="training-section">
			<div className="wrapper">
				<div className="text-content">
					<div className="static-text">
						I want to be a 
					</div>
					<ul className="dynamic-text">
						<li><span>Front-end Developer </span></li>
						<li><span>Back-end Developer </span></li>
						<li><span>DevOps </span></li>
						<li><span>Tester</span></li>	
					</ul>
				</div>
			</div>
			<div className="card-section">
				<div className="card-container">
					<div className="card">
						<div className="front">
							<h3 class="card-title"> Front End Development</h3>
							<p class="card-text">
								{" "}
								Front-end web development, also known as client-side
								development is the practice of producing HTML, CSS and
								JavaScript for a website or Web Application so that a user
								can see and interact with them directly.
							</p>
						</div>
						<div className="back">
							<h4>Course modules</h4>
							<ul>
								<li>HTML</li>
								<li>CSS</li>
								<li>JavaScript</li>
								<li>Bootstrap</li>
								<li>Sementic UI</li>
								<li>Angular</li>
								<li>ReactJS</li>
								<li>VueJS</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="card-container">
					<div className="card">
						<div className="front">
							<h3 class="card-title">Back End Development</h3>
							<p class="card-text">
								{" "}
								Back-end Development refers to the server-side development.
								It focuses on databases, scripting, website architecture. It
								contains behind-the-scene activities that occur when
								performing any action on a website. It can be an account
								login or making a purchase from an online store. Code
								written by back-end developers helps browsers to communicate
								with database information
							</p>
						</div>
						<div className="back">
							<h4>Course modules</h4>
							<ul>
								<li>Java</li>
								<li>Spring</li>
								<li>Spring Boot</li>
								<li>MicroServices</li>
								<li>NodeJs</li>
								<li>MySql</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="card-container">
					<div className="card">
						<div className="front">
							<h3 class="card-title">DevOps</h3>
							<p class="card-text">
								DevOps is a combination of cultural philosophies, practices,
								and tools that enhance a company's ability to deliver
								applications and services at a high rate. It can scale and
								optimize products faster than organizations using
								traditional software development and infrastructure
								management processes. This speed allows companies to better
								serve their customers and gain competitiveness.
							</p>
						</div>
						<div className="back">
							<h4>Course modules</h4>
							<ul>
								<li>Java</li>
								<li>Docker</li>
								<li>Kubernetes</li>
								<li>AWS</li>
								<li>Jenkins</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="card-container">
					<div className="card">
						<div className="front">
							<h3 class="card-title">Testing</h3>
							<p class="card-text">
								In general, testing is finding out how well something works.
								In terms of human beings, testing tells what level of
								knowledge or skill has been acquired. In computer hardware
								and software development, testing is used at key checkpoints
								in the overall process to determine whether objectives are
								being met. For example, in software development, product
								objectives are sometimes tested by product user
								representatives. When the design is complete, coding follows
								and the finished code is then tested at the unit or modules
								level by each programmer.
							</p>
						</div>
						<div className="back">
							<h4>Course modules</h4>
							<ul>
								<li>Junit</li>
								<li>Mockito</li>
								<li>Integrated Testing</li>
								<li>End to End Testing</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
		);
  }
}

export default Training;
