import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Heading, Image } from '@chakra-ui/react';
import Medal from "../medal.png";
import Testimonials from './testimonials';

function Landing() {
    return (
        <Box bg="pink">
            <Box
                bg="radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(210,163,183,1) 90%)"
            >
                <Box height="100px" backgroundImage="/assets/plaid.jpg"></Box>
                <Box
                    minHeight={{
                        base: "calc(100vh - 275px)"
                    }}
                    display="flex"
                    justifyContent="space-around"
                    padding={{
                        base: "90px 0",
                        sm: "0"
                    }}
                >
                    <Box
                        margin="auto"
                        display={{
                            base: "none",
                            xl: "initial"
                        }}
                    >
                        <Box>
                            <Testimonials
                                numStars={5}
                                text="Better than my own food!"
                                reviewer="Gordan Ramsay"
                            />
                        </Box>
                        <Box>
                            <Testimonials
                                numStars={4}
                                text="Delicious!..."
                                reviewer="What's Cooking"
                            />
                        </Box>
                        <Box>
                            <Testimonials
                                numStars={5}
                                text="Pricey but worth every dollar!"
                                reviewer="Gordan Ramsay"
                            />
                        </Box>
                    </Box>
                    <Box
                        textAlign="center"
                        position="relative"
                        margin="auto"
                    >
                        <Heading
                            background="#fff800"
                            display="inline-block"
                            padding="20px 40px"
                            borderRadius="45px"
                            boxShadow="-8px 8px 0px -2px #9fa311"
                        >
                            #1 Voted!
                        </Heading>
                        <Box mt="10" mb="10">
                            <Box>
                                <Image
                                    src={Medal}
                                    height={{
                                        base: "110px",
                                        sm: "150px"
                                    }}
                                    alt="medal"
                                    position="absolute"
                                    left={{
                                        base: "46px",
                                        sm: "-33px"
                                    }}
                                    top={{
                                        base: "143px",
                                        sm: "200px"
                                    }}
                                />
                                <Image
                                    src="/assets/sandwich (35).png"
                                    alt="burger"
                                    width={{
                                        base: "75%",
                                        sm: "100%"
                                    }}
                                    margin={{
                                        base: "auto"
                                    }}
                                />
                            </Box>
                        </Box>
                        <Heading textAlign="center">Porilainen Sandwich</Heading>
                    </Box>
                    <Box
                        margin="auto"
                        display={{
                            base: "none",
                            xl: "initial"
                        }}
                    >
                        <Box>
                            <Testimonials
                                numStars={4}
                                text="Best Sandwiches in the world!"
                                reviewer="Gordan Ramsay"
                            />
                        </Box>
                        <Box>
                            <Testimonials
                                numStars={5}
                                text="Best Sandwiches in the world!"
                                reviewer="Gordan Ramsay"
                            />
                        </Box>
                        <Box>
                            <Testimonials
                                numStars={4}
                                text="Best Sandwiches in the world!"
                                reviewer="Gordan Ramsay"
                            />
                        </Box>
                    </Box>
                </Box>
                <Box
                    padding="30px 0"
                    backgroundImage="/assets/plaid.jpg"
                    textAlign="center"
                >
                    <Link style={{ marginRight: "10px" }} to={`/product/35`}>
                        <Button colorScheme="teal" size="lg">Order Now</Button>
                    </Link>
                    <Link to={`/products`}>
                        <Button colorScheme="blue" size="lg">View Products</Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}

export default Landing;
