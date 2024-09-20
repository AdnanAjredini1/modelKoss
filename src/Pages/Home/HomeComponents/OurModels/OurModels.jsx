import './our-models.scss'
import { Link } from "react-router-dom";

function OurModels() {
    return (
        <div className="ourModelsWrapper">
            <p className="title">OUR MODELS</p>
            <div className="linksWrapper">
            <Link  className="link active" to={'/'} >Any</Link>
            <Link  className="link" to={'/'} >Kids</Link>
            <Link  className="link" to={'/'} >Female</Link>
            <Link  className="link" to={'/'} >Male</Link>
            <Link  className="link" to={'/'} >Mature</Link>
                
            </div>
        </div>
    );
}

export default OurModels;