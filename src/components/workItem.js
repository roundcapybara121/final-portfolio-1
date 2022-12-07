
// component for each work item card in the home screen
export default function WorkItem(props) {
    //setting variables
    const name = props.name;
    const description = props.description;
    const image = props.image;
    return (
        <div className="card">
            <img className="card-img" src={image} alt={name}></img>
            <div className="card-content">
                <h2 className="card-title">{name}</h2>
                <p className="card-description">{description}</p>
                <a href="https://calendar.google.com/calendar/u/0/r/week">
                    <button className="card-button">read more</button>  {/* create link to respective pages later */}
                </a>
            </div>

        </div>
    )
}