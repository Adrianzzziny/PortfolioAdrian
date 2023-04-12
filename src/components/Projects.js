import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-pokemon.png";
import projImg2 from "../assets/img/project-videogames.png";
import projImg3 from "../assets/img/project-uva.png";
import projImg4 from "../assets/img/project-weather.png";
import projImg5 from "../assets/img/project-battery.png";

export const Projects = () =>{

    const projects = [
        {
            title : "Pokemon Web",
            description: "Aplicacion Web hecha en React, consumiendo datos de la API de PokemonAPI, añadiendo Sequelize con PostgreSQL para la creación de nuevos pokemons",
            imgUrl: projImg1,
            /*review: "#"*/
        },
        {
            title : "Videogames Web",
            description: "Aplicacion Web hecha en React, consumiendo datos de la API de VideogamesAPI, añadiendo Sequelize con PostgreSQL para la creación de nuevos videojuegos",
            imgUrl: projImg2,
            /*review: "#"*/
        },
        {
            title : "Uva Morada",
            description: "Aplicacion para iOS, hecha con Swift, integrada con Firebase",
            imgUrl: projImg3,
            review: "https://miro.com/app/board/uXjVMWaR85c=/?share_link_id=940499930337"
        },
        {
            title : "Weather App",
            description: "Aplicación Web hecha en Javascript consumiendo datos de la API de OpenWeatherMap",
            imgUrl: projImg4,
            review: "https://weather-app-five-flame.vercel.app/"
        },
        {
            title : "Battery Level App",
            description: "Aplicación web hecha con Javascript",
            imgUrl: projImg5,
            review: "https://battery-level-app.vercel.app/"
        },
        
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Proyectos</h2>
                   
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">CIBERTEC</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">HENRY</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">
                            FREELANCE
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCard 
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">Lorem</Tab.Pane>
                        <Tab.Pane eventKey="third">Ipsum</Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="" />
        </section>
    )


}