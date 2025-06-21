import { useEffect, useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"

const Header = () => {
	const [btnName, setBtnName] = useState("Login")
	useEffect(() => {
		console.log("Use effect")
	}, [])

	console.log("rendered")

	return (
		<div className="header">
			<div className="logo">
				<Link to="/">
					<img src={LOGO_URL} />
				</Link>
			</div>
			<div className="navItems">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About Us</Link>
					</li>
					<li>
						<Link to="/contact">Contact Us</Link>
					</li>
					{/* <li>Contact</li> */}
					<li>Cart</li>
					<button
						className="log"
						onClick={() => {
							btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
						}}
					>
						{btnName}
					</button>
				</ul>
			</div>
		</div>
	)
}

export default Header
