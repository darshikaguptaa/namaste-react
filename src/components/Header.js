import { useState } from "react"
import { LOGO_URL } from "../utils/constants"

const Header = () => {
	const [btnName, setBtnName] = useState("Login")
	return (
		<div className="header">
			<div className="logo">
				<img src={LOGO_URL} />
			</div>
			<div className="navItems">
				<ul>
					<li>Home</li>
					<li>About Us</li>
					<li>Contact</li>
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
