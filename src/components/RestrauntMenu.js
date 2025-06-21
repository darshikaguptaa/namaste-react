import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"

const RestrauntMenu = () => {
	const [resInfo, setResInfo] = useState(null)
	const { resId } = useParams()

	useEffect(() => {
		fetchMenu()
	}, [])

	const fetchMenu = async () => {
		const data = await fetch(
			`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=${resId}`
		)

		const json = await data.json()
		setResInfo(json.data)
		console.log(json.data)
	}

	const { name, cuisines, costForTwoMessage } =
		resInfo?.cards[2]?.card?.card?.info || {}

	const itemCards =
		resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
			.itemCards ||
		resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
			.itemCards ||
		{}

	console.log(itemCards)

	return resInfo === null ? (
		<Shimmer />
	) : (
		<div className="menu">
			<h1>{name}</h1>
			<p>
				{cuisines?.join(", ")} - {costForTwoMessage}
			</p>
			<h2>Menu</h2>
			<ul>
				{itemCards.map((item) => (
					<li key={item.card.info.name}>
						{item.card.info.name} - ₹ {item.card.info.defaultPrice / 100}
					</li>
				))}
			</ul>
		</div>
	)
}

export default RestrauntMenu
