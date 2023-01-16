import { useNavigate } from "react-router-dom";

function Cards({ data }) {
  // let navigate = useNavigate();

  // const routeChange = (path) => {
  //   navigate(path);
  // };

  
  
  return (
    <div className="cards-body">
      {data.map((data) => {
        return (
          <div className="cards">
          <a href={data.url}>
          <div
            className="child-card"
            
          >
            
            <div className="card-image">
            <img
              src={data.image}
              style={{
                
                marginTop: "-40px",
                marginLeft: "-50px",
                // position:"absolute"
              }}
              alt="Logo"
            />
            </div>
            <div className="card-content">
              <div className="book-title">{data.title}</div>
              <div className="book-subtitle">{data.subtitle}</div>
              <div className="book-price">
                <b>Price:</b> {data.price}
              </div>
            </div>
            
          </div>
          </a>

          </div>
        );
      })}
    </div>
  );
}

export default Cards;
