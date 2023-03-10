import React from 'react';


const Skills = () => {
    return (
        <div className='Container' >
            <div className='Skills '>
                <h1>Habilidades</h1>
                <Carousel slide={false} >
                    <Carousel.Item >
                        <Card className='cardSkills'>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <i className="fa-solid fa-people-group skillsI"></i>
                            <Card.Body>
                                <Card.Title>Trabsajo en equipo</Card.Title>
                                {/* <Card.Text>
                                    Some quick example text to build on the cardSkills title and make up the
                                    bulk of the cardSkills's content.
                                </Card.Text> */}
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card className='cardSkills'>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <i className="fa-solid fa-language skillsI"></i>
                            <Card.Body>
                                <Card.Title>Ingles</Card.Title>
                                {/* <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text> */}
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card className='cardSkills'>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <i className="fa-solid fa-lightbulb skillsI"></i>
                            <Card.Body>
                                <Card.Title>Creatividad</Card.Title>
                                {/* <Card.Text>
                                    Some quick example text to build on the cardSkills title and make up the
                                    bulk of the cardSkills's content.
                                </Card.Text> */}
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    
                </Carousel>
            </div>

        </div>
    );
};

export default Skills;