import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Noticia = ({ noticia }) => {
  return (
    <Card className="cardNews pb-3 rounded-2">
      {noticia && (
        <>
          <img src={noticia["image_url"]} alt={noticia["title"]} className="imgNews rounded-top-2"/>
          <div className="d-flex flex-column justify-content-between">
          <div className="px-2 mb-3 mt-2 containerDescription">
            <h6>{noticia["creator"]}</h6>
            <h5>{noticia["title"]}</h5>
            <p>{noticia["description"]}</p>
          </div>
          <Button className="btnSeeNews border-0 px-2 py-3 mx-2">Ver noticia completa</Button>
          </div>
          
        </>
      )}
    </Card>
  );
};

export default Noticia;