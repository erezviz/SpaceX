import { Link } from "react-router-dom"
import { LandingPreview } from "./landing-preview"

export const LandingList = ({landings}) => {
    if(!landings) return  <>Loading...</>
    return (
        <article className="landing-list">
          { landings.map( landing => { 
            return <div key={landing.id} > 
            <Link to={`/details/${landing.id}`}> <LandingPreview  landing={landing}/></Link>
             </div>
             })}
        </article>
    )
}