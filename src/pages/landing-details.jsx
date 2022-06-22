import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'
import { landingService } from "../services/landings.service"
export const LandingDetails = (props) => {
    const [landing, setLanding] = useState(null)
    const params = useParams()

    useEffect(() => {
        const {id} = params
        loadLanding(id)
        console.log(id);
        console.log(landing);
     
    }, [])

    const loadLanding = async (id) =>{
        const landing = await landingService.getById(id)
        setLanding(landing)
    }
    const bcgImg = () =>{

    }
    

    if(!landing) return <>Loading...</>
    return <section className="landing-details">
       <h1>{landing.name}</h1>
    </section>
}