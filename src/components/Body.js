import { useState, useEffect } from "react"
import RestrauntCard from "./RestrauntCard.js"
import Shimmer from "./Shimmer.js"
import { Link } from "react-router-dom"

const Body = () => {
	const [listOfRestraunts, setListOfRestraunts] = useState([])
	const [searchText, setSearchText] = useState("")
	const [filteredRestraunt, setFilteredRestraunt] = useState([])

	console.log("Rendered")

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		)

		const json = await data.json()
		console.log(json)
		setListOfRestraunts(
			json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		)
		setFilteredRestraunt(
			json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		)
	}

	return listOfRestraunts.length === 0 ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="filter">
				<div>
					<input
						type="text"
						className="search-box"
						value={searchText}
						onChange={(e) => {
							setSearchText(e.target.value)
						}}
					></input>
					<button
						onClick={() => {
							console.log(searchText)
							const filteredRes = listOfRestraunts.filter((res) => {
								return res.info.name
									.toLowerCase()
									.includes(searchText.toLowerCase())
							})
							console.log(filteredRes)
							setFilteredRestraunt(filteredRes)
						}}
					>
						Search
					</button>
				</div>
				<button
					className="filterBtn"
					onClick={() => {
						//Filter Logic
						setFilteredRestraunt(
							listOfRestraunts.filter((restraunt) => {
								return restraunt.info.avgRating > 4.1
							})
						)
					}}
				>
					Top Rated Restraunts
				</button>
			</div>
			<div className="restrauntContainer">
				{filteredRestraunt.map((restraunt) => (
					<Link key={restraunt.info.id} to={"/restraunt/" + restraunt.info.id}>
						<RestrauntCard resData={restraunt} />
					</Link>
				))}
			</div>
		</div>
	)
}

export default Body
