import MediaCard  from "./MediaCard";
import "./InfoBox.css";
export default function InfoBox({info}){
    
    return (
        <div className="InfoBox">
            <div className="cardContainer">< MediaCard info={info} /></div>
        </div>
    )
}