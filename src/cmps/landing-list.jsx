import { LandingPreview } from "./landing-preview"

export const LandingList = ({landings}) => {
    if(!landings) return  <>Loading...</>
    return (
        <article className="landing-list">
          { landings.map( landing => <div key={landing.id} > <LandingPreview  landing={landing}/></div>)}
        </article>
    )
}