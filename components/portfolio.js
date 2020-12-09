const Portfolio = ({ span2 = false, src, icons, title, category_name, white_text }) => {
	return (
		<a className={(span2 && 'span-2') + ' item'} href="#">
			<img src={src} alt="" />
			<div className={(white_text && 'text-white') + ' portfolio-info '}>
				<div className="pt-10">{category_name}</div>
				<div className="title">{title}</div>
				<div className=" flex mt-auto mb-10 ">
					{icons.map((icon) => {
						return <div key={icon} style={{ backgroundImage: `url(${icon})` }} className="icon  mx-2" />;
					})}
				</div>
			</div>
		</a>
	);
};

export default Portfolio;
