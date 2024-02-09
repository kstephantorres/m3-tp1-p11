import { Row, Col } from "react-bootstrap";
import Noticia from "./Noticia";

const ListaNoticias = ({noticias}) => {
    return (
        <Row xs={1} md={2} lg={4} xlg={5} className="g-4 border-top border-dark pb-4">
            {noticias.map((noticia, index) => (
            <Col key={index} className='d-flex justify-content-around'>
            <Noticia
            key={noticia.article_id}
            urlImag={noticia.image_url}
            fuente={noticia.source_id}
            titulo={noticia.title}
            descripcion={noticia.description}
            urlNoticia={noticia.link}
            />
            </Col>
            ))}
        </Row>
    );
};

export default ListaNoticias;