import { Container, Form } from "react-bootstrap";
import { useEffect, useState } from 'react'
import { Row, Col} from 'react-bootstrap'
import ListaNoticias from "./ListaNoticias";

const Formulario = () => {

    const [noticias, setNoticias] = useState([])
    const [tag, setTag] = useState('')
    
    const consultarApi = async(tag)=>{
        try {
          const respuesta = tag ? 
            await fetch(`https://newsdata.io/api/1/news?apikey=pub_378948b71cfdc1810b0e7167844b4204fe314&language=es&category=${tag}`)
            :  await fetch(`https://newsdata.io/api/1/news?apikey=pub_378948b71cfdc1810b0e7167844b4204fe314&language=es&category=business`)
          const datos = await respuesta.json()        
          console.log("🚀 ~ consultarApi ~ datos:", datos)
          setNoticias(datos.results)

        } catch (error) {
          console.log(error)
          alert(error)
        }
    }

    useEffect(()=>{
        consultarApi(tag)   
    },[])

    const handleChange =(e)=>{
        console.log(e.target.value)
        setTag(e.target.value)
        consultarApi(tag)
    }
   
    console.log(tag)
    return (
        <Container className="my-5 border border-dark">
            <Form className="my-5">
                <Row>
                    <Col sm={2} md = {4}>
                        <Form.Label  htmlFor="genero" className="form-label">
                            Buscar por categoria:
                        </Form.Label>
                    </Col>
                    <Col sm={10} md={8}>
                        <Form.Select
                        className="form-select"
                        id="genero"
                        name="genero"
                        onChange={handleChange}
                        required
                        >
                            <option value="business">Negocios</option>
                            <option value="crime">Delitos</option>
                            <option value="domestic">Domestico</option>
                            <option value="education">Educación</option>
                            <option value="entertainment">Entretenimiento</option>
                            <option value="environment">Medioambiente</option>
                            <option value="food">Gastronomia</option>
                            <option value="health">Salud</option>
                            <option value="lifestyle">Estilo de vida</option>
                            <option value="politics">Politica</option>
                            <option value="science">Ciencia</option>
                            <option value="sports">Deporte</option>
                            <option value="technology">Tecnología</option>
                            <option value="top">Top</option>
                            <option value="tourism">Turismo</option>
                            <option value="world">Internacional</option>
                            <option value="other">Otros</option>
                        </Form.Select>
                    </Col>
                </Row>
            </Form>
            <ListaNoticias noticias={noticias}></ListaNoticias>
        </Container>
    );
};

export default Formulario;