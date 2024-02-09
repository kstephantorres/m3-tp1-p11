import { Card } from "react-bootstrap";

const Noticia = ({urlImag, fuente, titulo, descripcion, urlNoticia}) => {
    return (
        <Card className='cardContenedor'>
            <Card.Img src={urlImag} className='cardImagen '/>
            <Card.Body className='d-flex flex-column'>
                <Card.Subtitle className="mb-2 text-muted ">{fuente}</Card.Subtitle>
                <Card.Title >{titulo}</Card.Title>
                <div className="flex-grow-1 texto-card">
                    <Card.Text className="">{descripcion}</Card.Text>
                </div>
            </Card.Body>
            <a className="btn btn-primary m-2" href={urlNoticia} target="_blank">Ver noticia completa</a>
        </Card>
    );
};

export default Noticia;