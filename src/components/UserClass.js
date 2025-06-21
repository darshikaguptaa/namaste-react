import React from "react"

class UserClass extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			info: {
				name: "Dummy",
				followers: 0,
				following: 0,
				avatar_url: "",
			},
		}
		// console.log("Constructor")
	}

	async componentDidMount() {
		const data = await fetch("https://api.github.com/users/darshikaguptaa")
		const json = await data.json()
		this.setState({
			info: json,
		})
	}

	render() {
		// console.log("render")

		return (
			<div className="card">
				<img className="photo" src={this.state.info.avatar_url}></img>
				<h2>Name: {this.state.info.name}</h2>
				<h2>followers :{this.state.info.followers}</h2>
				<h2>following :{this.state.info.following}</h2>
				<h3>Github : darshikaguptaa</h3>
			</div>
		)
	}
}

export default UserClass
