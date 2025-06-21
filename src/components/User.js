import { useState } from "react"

const User = (props) => {
	const [count] = useState(0)
	const [count2] = useState(1)

	return (
		<div className="card">
			<h2>Name: {props.name}</h2>
			<h2>Location :{props.location}</h2>
			<h3>Github : darshikaguptaa</h3>
			<h3>Count : {count}</h3>
			<h3>Count2 : {count2}</h3>
		</div>
	)
}

export default User
