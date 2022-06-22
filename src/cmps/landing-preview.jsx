export const LandingPreview = ({landing}) => {
    const {small} = landing.links.patch
    return (
        <div className="landing-preview flex-col">
            <div className="img-container">
                <img src={small} alt={landing.name} />
            </div>
            <article className="preview-details-container">
            <h2 className="preview-title">{landing.name}</h2>
            <p className="preview-details">{landing.details}</p>
            </article>
        </div>
    )
}