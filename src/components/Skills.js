import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import html from "../assets/img/html.png";
import javascript from "../assets/img/javascript.png";
import reactjs from "../assets/img/reactjs.png";
import angular from "../assets/img/angular.png";
import vuejs from "../assets/img/vuejs.png";
import node from "../assets/img/node.png";
import express from "../assets/img/express.png";
import java from "../assets/img/_java.png";
import mysql from "../assets/img/mysql.png";
import postgres from "../assets/img/postgres.png";
import firebase from "../assets/img/firebase.png";
import android from "../assets/img/android.png";
import ios from "../assets/img/ios.png";
import reactnative from "../assets/img/reactnative.png";

import colorSharp from "../assets/img/color-sharp.png";
export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>Skills Frontend</h2>
                            
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <img src={html} alt="percentage"/>
                                    <h5>HTML & CSS</h5>
                                </div>
                                <div className='item'>
                                    <img src={javascript} alt="percentage"/>
                                    <h5>JavaScript</h5>
                                </div>
                                <div className='item'>
                                    <img src={reactjs} alt="percentage"/>
                                    <h5>React JS</h5>
                                </div>
                                <div className='item'>
                                    <img src={angular} alt="percentage"/>
                                    <h5>Angular</h5>
                                </div>
                                <div className='item'>
                                    <img src={vuejs} alt="percentage"/>
                                    <h5>Vue JS</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>

                    <Col>
                        <div className='skill-bx'>
                            <h2>Skills Backend</h2>
                            
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <img src={node} alt="percentage"/>
                                    <h5>Node JS</h5>
                                </div>
                                <div className='item'>
                                    <img src={express} alt="percentage"/>
                                    <h5>Express JS</h5>
                                </div>
                                <div className='item'>
                                    <img src={java} alt="percentage"/>
                                    <h5>Java</h5>
                                </div>
                                <div className='item'>
                                    <img src={mysql} alt="percentage"/>
                                    <h5>MySQL</h5>
                                </div>
                                <div className='item'>
                                    <img src={postgres} alt="percentage"/>
                                    <h5>PostgreSQL</h5>
                                </div>
                                <div className='item'>
                                    <img src={firebase} alt="percentage"/>
                                    <h5>Firebase</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>

                    <Col>
                        <div className='skill-bx'>
                            <h2>Skills App</h2>
                            
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <img src={android} alt="percentage"/>
                                    <h5>Android with Java</h5>
                                </div>
                                <div className='item'>
                                    <img src={ios} alt="percentage"/>
                                    <h5>iOS with Swift</h5>
                                </div>
                                <div className='item'>
                                    <img src={reactnative} alt="percentage"/>
                                    <h5>React Native</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>

                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp} alt="sharp"/>

        </section>
      )
}