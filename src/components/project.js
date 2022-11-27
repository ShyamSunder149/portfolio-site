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
                <UnorderedList>
                    {desc.map((index, value) => {
                        return <li key={value}>{index}</li>
                    })}
                </UnorderedList>
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
    const [ids, setIds] = useState(["Built an IDS using RNN-LSTM based model",
        "Used Metasploit to generate the dataset of both encoded and normal payloads",
        "Integrated IDS with the server using lua script"]);
    const [tcp, setTcp] = useState(["Built a CLI based application for the User side",
    "Used base64 encoded input to encrypt data using RSA algorithm","Built using socket programming in python and Implemented a server side logging system"]);
    const [stu, setStu] = useState(["Built 3 APIs on FastAPI, NodeJs and php according to requirements",
"Gained experience on SDLC life cycle and Agile Methodology",
"Hosted and managed server side issues using SASTRA University server"])
const [agro,setAgro] = useState(["Built an App using Flutter and Firebase",
"App used to connect farmers with buyers (virtual market)",
"Designed UI/UX using Figma for the app",
"Submitted as an entry for Google Solutions Challenge 2020"])
    return (
        <Container maxW='container.lg' py={10}>
            <Heading>Projects</Heading>
            <br />
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Single title="An Intrusion Detection System based on
pseudo-signature generation using RNN-LSTM" desc={ids} link="https://github.com" />
                <Single title="Implementation of Encrypted File Transfer System
Using TCP
" desc={tcp} link="https://github.com/ShyamSunder149/Secure-file-transfer-using-TCP" />
                <Single title="StudentVerse App" desc={stu} link="https://github.com" />
                <Single title="Agromart App" desc={agro} link="https://github.com/ShyamSunder149/SolutionChallenge2021" />
            </SimpleGrid>
        </Container>
    )
}

export default Project