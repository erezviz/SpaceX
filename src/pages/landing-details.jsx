import { useEffect, useState } from "react"
import {useNavigate, useParams} from 'react-router-dom'
import { landingService } from "../services/landings.service"
export const LandingDetails = (props) => {
    const [landing, setLanding] = useState(null)
    const params = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        const {id} = params
        loadLanding(id)
        
    }, [])

    const loadLanding = async (id) =>{
        const landing = await landingService.getById(id)
        setLanding(landing)
    }


    
    if(!landing) return <>Loading...</>
    const {small} = landing.links.patch
    return <section style={{backgroundImage: `url(${small})`}} className="landing-details flex-col ">
       <h1>{landing.name}</h1>
       <h3>Landing Failures:</h3>
       <div className="failures">
        {landing.failures.length > 0 &&
             landing.failures.map(fail => <ul key={fail.time}>
                <li>Altitude: {fail.altitude}</li>
                <li>Air time: {fail.time} seconds</li>
                <li>Reason: {fail.reason}</li>

             </ul>)
        }
        {!landing.failures.length && <p>Succeeded</p>}
       </div>
       <a className="wiki-link" target="_blank" href={landing.links.wikipedia}>Wikipedia Link</a>
       <article className="summary">
        <p className="summary-p">{landing.details}</p>
        <button onClick={()=> navigate(-1)}>Back</button>

       </article>
    </section>
}