const Footer = () => {
	return (
		<footer className="flex flex-col">
			<div className="footer-title mx-auto">Let's have a chat</div>
			<div className="part">
				<div className="subpart">
					<div className="part-title">Build</div>
					<div className="part-description"> Help you Build Something</div>
				</div>
				<div className="subpart">
					<div className="part-title">Co-incubate</div>
					<div className="part-description">Co-incubate an idea together</div>
				</div>
				<div className="subpart">
					<div className="part-title">Customise</div>
					<div className="part-description">Customise a solution for your business</div>
				</div>
				<div className="subpart">
					<div className="part-title">Organise</div>
					<div className="part-description">Organise learning sessions with us</div>
				</div>
			</div>
			<div className="social_icons">
				<a href="#">
					<img width="12" height="12" src="https://www.codigo.co/img/icons/social-facebook.svg" alt="" />
				</a>
				<a href="#">
					<img width="12" height="12" src="https://www.codigo.co/img/icons/social-twitter.svg" alt="" />
				</a>
				<a href="#">
					<img width="12" height="12" src="https://www.codigo.co/img/icons/social-instagram.svg" alt="" />
				</a>
				<a href="#">
					<img width="12" height="12" src="https://www.codigo.co/img/icons/social-linkedIn.svg" alt="" />
				</a>
			</div>
			<p className="text-center">Copyright © Codigo - Mobile App Developer Singapore</p>
			<p className="text-center mt-2">+65 6455 9790 • 26 Sin Ming Lane, Midview City #07-115 Singapore 573971</p>
		</footer>
	);
};

export default Footer;
