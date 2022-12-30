import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useSelector } from "react-redux";

const Contact = ({ fadeInClass }) => {
	const {
		profile
	} = useSelector(store => store.user);

	const {
		email,
		phone,
		address,
		linkedinUrl,
		instagramUrl,
		twitterUrl
	} = profile || {};

	return (
		<div
			className={`portfolio__card-inner portfolio__card-inner--${fadeInClass}`}
			id="contact-card"
		>
			<div className="portfolio__contact">
				<div className="portfolio__contact--send">
					<div className="portfolio__contact--top">
						<div className="portfolio__contact--name">
							<label className="portfolio__contact--label" for="name">Name</label>
							<input
								type="text"
								id="name"
								name="name"
								className="portfolio__contact--input"
								placeholder="|"
							/>
						</div>
						<div className="portfolio__contact--email">
							<label className="portfolio__contact--label" for="email">Email</label>
							<input
								type="text"
								id="email"
								name="email"
								className="portfolio__contact--input"
								placeholder="|"
							/>
						</div>
					</div>
					<div className="portfolio__contact--message">
						<label className="portfolio__contact--label" for="message">Message</label>
						<textarea
							id="message"
							name="message"
							className="portfolio__contact--textarea"
							placeholder="|"
						></textarea>
					</div>
					<div className="portfolio__contact--submit">Send</div>
				</div>

				<div className="portfolio__contact--side">
					<div className="portfolio__contact--field">
						<div className="portfolio__contact--field-title">Email</div>
						<a
							rel="noreferrer"
							className="portfolio__contact--field-value"
							href={`mailto:${email}`}
						>
							{email}
						</a>
					</div>
					<div className="portfolio__contact--field">
						<div className="portfolio__contact--field-title">Phone</div>
						<a className="portfolio__contact--field-value" href={`tel:${phone}`}>
							{phone}
						</a>
					</div>
					<div className="portfolio__contact--field">
						<div className="portfolio__contact--field-title">Address</div>
						<div className="portfolio__contact--field-value">
							{address}
						</div>
					</div>

					<div className="portfolio__contact--social">
							<a
								target="_blank"
								rel="noreferrer"
								href={linkedinUrl}
								className="portfolio__contact--social-link"
							>
								<FaLinkedin />
							</a>
							<a
								target="_blank"
								rel="noreferrer"
								href={twitterUrl}
								className="portfolio__contact--social-link"
							>
								<FaTwitter />
							</a>
							<a
								target="_blank"
								rel="noreferrer"
								href={instagramUrl}
								className="portfolio__contact--social-link"
							>
								<FaInstagram />
							</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
