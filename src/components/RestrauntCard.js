import { CDN_URL } from "../utils/constants"

const RestrauntCard = ({ resData }) => {
	const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
		resData?.info
	return (
		<div className="resCard">
			<img
				className="resImg"
				alt="restraunt Image"
				src={`${CDN_URL}${cloudinaryImageId}`}
			/>
			<h3>{name}</h3>
			<p>{cuisines.join(", ")}</p>
			<p>{avgRating} stars</p>
			<p>{costForTwo}</p>
		</div>
	)
}

export default RestrauntCard
