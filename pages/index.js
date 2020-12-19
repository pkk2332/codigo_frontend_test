import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { appIcon, category, catgIcon, portfolios, settingIcon, webIcon } from '../constant/index';
import Header from '../components/header';
import Footer from '../components/footer';
import Portfolio from '../components/portfolio';

const variants = {
	visible: {
		y: 0,
		opacity: 1
	},
	hidden: { y: 100, opacity: 0, overflowY: 'hidden' }
};

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<div className="relative">
				<motion.div
					initial="hidden"
					animate="visible"
					variants={variants}
					transition={{
						duration: 1,
						ease: 'easeInOut'
					}}
				>
					<div className="work-header">
						<p>Here’s 5% of</p>
						<p>our published work.</p>
						<p className="primary_color">See 100% of our power.</p>
						<div className="work_category-wrapper text-2xl mt-16 gap-10">
							<div className="cat_grid">
								<div className=" cat_item flex">
									<div className="w-6 h-2 border-b-2 pt-4 mr-2 active" />
									<strong> All</strong>
								</div>
								<div className="cat-item">Food And Beverage</div>
								<div className="cat_item">Media</div>
								<div className="cat_item">Transport & Logistic</div>
								<div className="cat_item">Banking & Finance</div>
								<div className="cat_item">LifeStyle</div>
								<div className="cat_item">Co-incubation</div>
								<div className="cat_item">HealthCare</div>
								<div className="cat_item">Retail & Entertainment</div>
								<div className="cat_item">Telco</div>
								<div className="cat_item">Others</div>
								<div className="cat_item">Startup</div>
							</div>
							<div className="legend_grid mt-6  text-base">
								<h1>
									<strong>LEGEND</strong>
								</h1>
								<div className="border-l-2 flex flex-col mt-5 pl-8">
									<div className="flex">
										<div className="flex">
											<img className="legend-icon m-auto" src={appIcon} alt="" />
											<div className="pl-4">App</div>
										</div>
										<div className="flex ml-16">
											<img className="legend-icon m-auto" src={webIcon} alt="" />
											<div className="pl-4">Web</div>
										</div>
									</div>
									<div className="flex mt-5">
										<div className="flex">
											<img className="legend-icon m-auto" src={settingIcon} alt="" />
											<div className="pl-4">CMS</div>
										</div>
										<div className="flex ml-16">
											<img className="legend-icon m-auto" src={catgIcon} alt="" />
											<div className="pl-4">UI/UX</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
			<div className="work-portfolio-wrapper">
				{portfolios.map((portfolio) => (
					<Portfolio
						key={portfolio.src}
						src={portfolio.src}
						icons={portfolio.icons}
						category_name={portfolio.category_name}
						title={portfolio.title}
						white_text={portfolio.white_text}
						span2={portfolio.span2}
					/>
				))}
			</div>
			<Footer />
		</div>
	);
}
