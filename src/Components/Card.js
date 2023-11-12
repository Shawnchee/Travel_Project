import {ReactComponent as LocationSvg} from "./Image/location.svg"

// This will be where the function will receive the props
export default function Card(props) {

    return (
        <div className = "Card">
            <img src={props.imageUrl}></img>
            <div className="details">
            <div className="location">
                <LocationSvg className = "location-icon"/>
                <p>{props.location}</p>
                <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
            </div>
            <h2 className="location-title">{props.title}</h2>
            <p className = "dates">{props.startDate} - {props.endDate}</p>
            <p>{props.description}</p>
            </div>
        </div>
    )
} 
// title: "Mount Fuji",
// location: "Japan",
// googleMapsUrl: "https://www.google.com/maps/d/u/0/viewer?mid=1J1fZhqPlDYFXSkT0lmCcwVzgooM&hl=en_US&ll=35.360557%2C138.72767&z=17",
// startDate: "12 Jan, 2021",
// endDate: "24 Jan, 2021",
// description : "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters.",
// imageUrl: "https://cdn.britannica.com/47/80547-050-8B316D38/Field-green-tea-Mount-Fuji-Shizuoka-prefecture.jpg"
