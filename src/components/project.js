import { Container, LinkBox,Link, Heading, LinkOverlay, Text, Box, SimpleGrid, UnorderedList, Button } from "@chakra-ui/react"
import React from "react";
import {ExternalLinkIcon} from '@chakra-ui/icons';

function Single({ title, desc, link }) {
    return (
        <LinkBox maxW='lg' p='5' borderWidth='1px' rounded='lg'>
            <Heading size='md' my='2'>
                <LinkOverlay href={link}>
                    {title}
                </LinkOverlay>
            </Heading>
            <Text mb='3'>
                
                    {desc.map((index, value) => {
                        return <p key={value}>{index}</p>
                    })}
              
            </Text>
            <Link href={link}>
            <Button colorScheme='teal' variant='outline'>
    Go to Project <ExternalLinkIcon mx='2px' />
  </Button>
  </Link>
        </LinkBox>
    )
}

const Project = () => {
    const { useState } = React;
    const [ids, setIds] = useState(["Developed an Intrusion Detection System (IDS) with an advanced RNN-LSTM model, showcasing expertise in machine learning and cybersecurity. Used Metasploit for diverse payload datasets and seamlessly integrated the IDS with the server using Lua scripts for robust security measures"]);
    const [tcp, setTcp] = useState(["Built a secure CLI application with advanced encryption (base64 and RSA) for user-side operations. Proficient in Python and socket programming, I implemented a server-side logging system for enhanced performance and monitoring"]);
    const [stu, setStu] = useState(["Led the backend team of the app, The Official Student App of SASTRA, worked on Backend and DevOps. Applied Agile methodology to meticulously plan and execute projects. Mastered app management amidst fluctuating request volumes currently handling 15k users."])
const [agro,setAgro] = useState(["Created a Flutter and Firebase-powered app connecting farmers with buyers in a virtual market. Designed seamless UI/UX with Figma. Submitted for the Google Solutions Challenge 2020."])
    return (
        <Container maxW='container.lg' py={10}>
            <Heading>Projects</Heading>
            <br />
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Single title="An Intrusion Detection System based on pseudo-signature generation using RNN-LSTM" desc={ids} link="https://github.com/ShyamSunder149/Intrusion-detection-system-model-using-RNN-LSTM" />
                <Single title="Implementation of Encrypted File Transfer System Using TCP" desc={tcp} link="https://github.com/ShyamSunder149/Secure-file-transfer-using-TCP" />
                <Single title="StudentVerse App" desc={stu} link="https://play.google.com/store/apps/details?id=com.dcs.homeversity" />
                <Single title="Agromart App" desc={agro} link="https://github.com/ShyamSunder149/SolutionChallenge2021" />
            </SimpleGrid>
        </Container>
    )
}

export default Project
