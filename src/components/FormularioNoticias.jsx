import { Form, Row, Col, Spinner } from "react-bootstrap";
import ListadoNoticias from "./ListaNoticias";
import { useEffect, useState } from "react";

const FormularioNoticias = () => {
  const [noticias, setNoticias] = useState([]);
  const [categoria, setCategoria] = useState("Other");

  useEffect(() => {
    consultarAPI();
  }, [categoria]);

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(
      `https://newsdata.io/api/1/news?apikey=pub_380933fac24736a597bbac00596b075fffe11&country=ar&category=${categoria}`);
      const datos = await respuesta.json();
      setNoticias(datos.results);
    } catch (error) {
      console.error();
    }
  };

  return (
    <>
      <section className="sectionForm mx-auto px-2 rounded-3 bg-white ">
        <Form className="form pt-5">
          <Form.Group
            as={Row}
            className="mb-2 mb-md-3 d-flex justify-content-center h-100"
          >
            <Form.Label column sm="4">
              Buscar por categoría:
            </Form.Label>
            <Col md="5">
              <Form.Select
                required
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option value="">seleccione</option>
                <option value="Entertainment">Entretenimiento</option>
                <option value="Technology">Tecnología</option>
                <option value="Business">Negocios</option>
                <option value="Politics">Política</option>
                <option value="Sports">Deportes</option>
                <option value="Health">Salud</option>
                <option value="Crime">Crimen</option>
                <option value="Domestic">Doméstico</option>
                <option value="Education">Educación</option>
                <option value="Environment">Medio ambiente</option>
                <option value="Food">Comida</option>
                <option value="Lifestyle">Estilo de vida</option>
                <option value="Science">Ciencia</option>
                <option value="Tourism">Turismo</option>
                <option value="World">Mundo</option>
              </Form.Select>
            </Col>
          </Form.Group>
        </Form>
      </section>
      <ListadoNoticias noticias={noticias}></ListadoNoticias>
    </>
  );
};

export default FormularioNoticias;
