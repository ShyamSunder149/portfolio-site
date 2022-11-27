import { Container, Heading, UnorderedList, ListItem, Center, List } from '@chakra-ui/react';

const Skills = () => {
    return (
        <Container maxW={'container.lg'} py={10}>
            
            <Heading>Skills</Heading>
            
            <br/>
            
            <UnorderedList>
                <ListItem>
                    Field Of Interest : Cryptography, Cyber Forensics, Reverse Engineering, Scripting, Full Stack development
                </ListItem>
                <ListItem>
                    Operating Systems : Linux, Windows
                </ListItem>
                <ListItem>
                    Programming Languages : Python, C, C++, JavaScript, HTML, CSS
                </ListItem>
                <ListItem>
                    Frameworks : React, FastAPI, Express, Django, Bootstrap, Chakra
                </ListItem>
                <ListItem>
                    Databases : PostgreSQL, MongoDB
                </ListItem>
                <ListItem>
                    Tools : Git, BurpSuite, Wireshark, Volatilitiy, IDA Pro, Ghidra, SageMath, CyberChef
                </ListItem>

            </UnorderedList>

        </Container>
    );
}

export default Skills;