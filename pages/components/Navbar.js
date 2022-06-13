import Link from 'next/link';
import { GiTicket } from 'react-icons/gi';

function Navbar({ OpenCartDrawer }) {
	return (
		<footer className="app-footer">
			<nav className="menu-bar">
				<Link href="/">
					<a className="menu-bar-item menu-bar-item">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="192"
							height="192"
							fill="currentColor"
							viewBox="0 0 256 256"
						>
							<rect width="256" height="256" fill="none"></rect>
							<path
								d="M213.3815,109.61945,133.376,36.88436a8,8,0,0,0-10.76339.00036l-79.9945,72.73477A8,8,0,0,0,40,115.53855V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V115.53887A8,8,0,0,0,213.3815,109.61945Z"
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="16"
							></path>
						</svg>
						<span className="menu-bar-item-text">Home</span>
					</a>
				</Link>
				<Link href="/tickets">
					<a className="menu-bar-item">
						<GiTicket />
						<span className="menu-bar-item-text">Tickets</span>
					</a>
				</Link>
				<a onClick={OpenCartDrawer} className="menu-bar-item">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="192"
						height="192"
						fill="currentColor"
						viewBox="0 0 256 256"
					>
						<rect width="256" height="256" fill="none"></rect>
						<circle cx="80" cy="216" r="16"></circle>
						<circle cx="184" cy="216" r="16"></circle>
						<path
							d="M42.28575,72H221.71429l-26.39873,92.39554A16,16,0,0,1,179.93118,176H84.06882a16,16,0,0,1-15.38438-11.60446L32.51492,37.80223A8,8,0,0,0,24.82273,32H8"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="16"
						></path>
					</svg>
					<span className="menu-bar-item-text">Carrinho</span>
				</a>
				<Link href="/profile">
					<a href="#" className="menu-bar-item">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="192"
							height="192"
							fill="currentColor"
							viewBox="0 0 256 256"
						>
							<rect width="256" height="256" fill="none"></rect>
							<circle
								cx="128"
								cy="96"
								r="64"
								fill="none"
								stroke="currentColor"
								strokeMiterlimit="10"
								strokeWidth="16"
							></circle>
							<path
								d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002"
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="16"
							></path>
						</svg>
						<span className="menu-bar-item-text">Perfil</span>
					</a>
				</Link>
			</nav>
		</footer>
	);
}

export default Navbar;
