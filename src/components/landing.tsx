import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import Medal from "../medal.png";

function Landing() {
    return (
        <Box bg="pink">
            <Box
                bg="radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(210,163,183,1) 90%)"
            >
                <Box height="100px" backgroundImage="/assets/plaid.jpg"></Box>
                <Box
                    height="calc(100vh - 275px)"
                    display="flex"
                >
                    <Box 
                        margin="auto" 
                        textAlign="center"
                        position="relative"
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
                            <Image 
                                src={Medal} 
                                height="150px" 
                                alt="medal" 
                                position="absolute"
                                left="-33px"
                                top="200px"
                            />
                            <Image src="/assets/sandwich (35).png" alt="burger" />
                        </Box>
                        <Heading textAlign="center">Porilainen Sandwich</Heading>
                    </Box>
                </Box>
                <Box
                    padding="30px 0"
                    backgroundImage="/assets/plaid.jpg"
                    textAlign="center"
                >
                    <Link style={{ marginRight: "10px" }} to={`/product/35`}>
                        <Button colorScheme="teal">Order Now</Button>
                    </Link>
                    <Link to={`/products`}>
                        <Button colorScheme="yellow">View Products</Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}

export default Landing;
