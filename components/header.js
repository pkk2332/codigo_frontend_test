import React, { useState } from 'react';

const Header = () => {
    const [ isNavOpen, setstate ] = useState(false);
    const openNav = ()=>{
        setstate((prev) => setstate(!prev))
        const navs = document.querySelectorAll('.nav-item')
            setTimeout(() => {
                navs.forEach((nav)=>{
                    nav.classList.toggle('fade');
                })
            }, 500);
     
       
    }

	return (
		<header className="nav-bar relative op z-10">
			<div className="nav-logo">
				<img className="nav-logo" src="https://www.codigo.co/img/ui/logo-codigo-red.svg" alt="" />
			</div>
			<div  className={" nav-items "+ (isNavOpen ? 'nav__expended': '')}>
				<a onClick={() => setstate((prev) => setstate(!prev))} className="nav-item active" href="#">
					Work
				</a>
				<a className="nav-item" href="#">
					Solutions
				</a>
				<a className="nav-item" href="#">
					Services
				</a>
				<a className="nav-item" href="#">
					About us
				</a>
				<a className="nav-item" href="#">
					Blog
				</a>
				{isNavOpen &&
                (
                <>
                    <a className="nav-item lg:hidden" href="#">
					    Request a quote
                    </a>
                    <a className="nav-item lg:hidden" href="#">
                        Lets Chat
                    </a>
                    <a 	onClick={openNav}
                     className="cross_icon z-50">
                    <svg style={{fill:"white"}} height="20" viewBox="0 0 329.26933 329" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg>
                    
                    </a>
                </>
                )
               
               
                }
                 <a  className="nav-btn hidden lg:block" href="">
					Request a quote
				</a>
			</div>
			<div className="w-20 ml-auto lg:hidden" onClick={openNav}>
				<div className={'burger z-50 ' + (isNavOpen ? 'burger-active' : '')}>
					<svg
						onClick={() => setstate((prev) => setstate(!prev))}
						className="m-auto pt-6"
						viewBox="0 0 100 80"
						width="25"
						height="30"
					>
						<rect width="100" height="5" />
						<rect y="30" width="100" height="5" />
						<rect y="60" width="100" height="5" />
					</svg>
				</div>
				
			</div>
		</header>
	);
};

export default Header;
