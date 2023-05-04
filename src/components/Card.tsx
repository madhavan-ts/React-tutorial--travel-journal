import "./styles/Card.css";

function Card(props: any) {
  return (
    <>
      <div className="card">
        <img src={props.imageUrl} alt="" className="card-img" />
        <div className="card-details">
          <div className="location">
            <p className="country">
              <i className="fa-solid fa-location-dot"></i>
              {props.location}
            </p>
            <a href={props.googleMapsUrl} className="map-link">
              View in Google Maps
            </a>
          </div>
          <h1 className="heading">{props.title}</h1>
          <p className="dates">{`${props.startDate} - ${props.endDate}`}</p>
          <p className="desc">{props.description}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
