import { useEffect, useState } from "react"
import { LandingList } from "../cmps/landing-list"
import { landingService } from "../services/landings.service"


export const SpaceApp = (props) =>{
    const [landings, setLandings] = useState(null)

    useEffect(() => {      
        loadLandings()
            

    },[])

    const loadLandings = async () =>{
        const landings = await landingService.query()
        setLandings( landings)
    }
    
    if(!landings) return <>Loading...</>
    return (
        <section className="space-app">
     
           <LandingList landings={landings}/>
        </section>
    )
}