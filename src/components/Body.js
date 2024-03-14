import { useState, useEffect } from "react"
import RestrauntCard from "./RestrauntCard.js"
import Shimmer from "./Shimmer.js"

const Body = () => {
	const [listOfRestraunts, setListOfRestraunts] = useState([])

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
	}

	return listOfRestraunts.length === 0 ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="filter">
				<button
					className="filterBtn"
					onClick={() => {
						//Filter Logic
						setListOfRestraunts(
							listOfRestraunts.filter((restraunt) => {
								return restraunt.info.avgRating > 4
							})
						)
					}}
				>
					Top Rated Restraunts
				</button>
			</div>
			<div className="restrauntContainer">
				{listOfRestraunts.map((restraunt) => (
					<RestrauntCard resData={restraunt} key={restraunt.info.id} />
				))}
			</div>
		</div>
	)
}

export default Body
