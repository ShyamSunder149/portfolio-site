import './home.css';
import { Center, Flex, Container, Image, Heading, VStack } from '@chakra-ui/react';
import React from 'react';

const Home = () => {
    const { useState } = React;
    const [words, setWords] = useState(["CTF Player", "Passionate Developer", "MTS @ Zoho", "Cybersecurity Researcher"]);
    return (
        <Container py={10}>
            <Center>
                <Flex align="center">
                    <VStack>
                        <Image borderRadius="100%" boxSize='150px' src='/assets/seishiro.jpg' alt='Dan Abramov' />
                        <Heading>Hola, Nitro Here</Heading>
                        <Container>
                            <div className="scroller">
                                <span>
                                    {words[0]}
                                    <br />
                                    {words[1]}
                                    <br />
                                    {words[2]}
                                    <br />
                                    {words[3]}
                                </span>
                            </div>
                        </Container>
                    </VStack>
                </Flex>
            </Center>
        </Container>
    );
}

export default Home;