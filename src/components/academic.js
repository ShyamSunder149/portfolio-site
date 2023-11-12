import { Container, Heading, Image, Stack, Text, Button, Divider, VStack, HStack, UnorderedList } from "@chakra-ui/react";
import { CardBody, CardFooter, Card } from "@chakra-ui/card";
import React from 'react';
import { ButtonFooter, ButtonGroup } from "@chakra-ui/button";

function Profile({ title, pos, description, link }) {
    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
        >
            <HStack spacing={8}>
                {/* <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={link} alt='Caffe Latte' borderRadius={10
                    }
                /> */}

                <Stack spacing={3}>
                    <CardBody>
                        <Heading size='md'>{title}</Heading>
                        <Text>{pos}</Text>
                        <UnorderedList py={2}>
                            {description.map((value, index) => {
                                return <li key={index}>{value}</li>
                            })}
                        </UnorderedList>
                    </CardBody>
                </Stack>
            </HStack>
        </Card>
    )
}

const Academic = () => {
    const { useState } = React;
    const [infinity, setInfinity] = useState(
        ["Played more than 250 CTFs for team 1nf1n1ty, the official cyber security club of SASTRA.",
        "Played Solo CTFs and took sessions for University Students in the fields of Cryptography, Memory Forensics, Steganography and Reverse Engineering. ",
            "Secured a position in top 10 in leaderboard in around 30 CTFs. Worked on projects based on Cyber Security and worked on a CTF framework using Vue-JS and FastAPI"
            ]);
    const [dcs, setDcs] = useState(

        ["Led the Web Team of the official development community of the University. Worked on the Backend (REST APIs) of the University's official mobile application, and managed the team, focusing on faster delivery of product. Also gained experience in hosting on-premises",
        "Guiding the current team in conducting workshops and building community projects"]);

    const [dsc, setDsc] = useState([
        "Part of the Core team of Web Cluster",
        "Involved on building Community Projects with Google products",
        "Took session and workshops on Web Development for University Students",
        "Worked as a part of the CyberSecurity Cluster",
        "Participated in Hackathons and Conducted Events"
    ]);
    const [owasp, setOwasp] = useState([
        "Lead the Community of CyberSecurity Enthusiasts and managed to organize sessions on cybersecurity for University Students and worked on projects regarding cybersecurity"
    ]);
    const [dpi, setDpi] = useState(["Managed a team of 40 Designers and Developers and organized the design and development works of Kuruksastra and Colosseum, the official intercollege cultural fest and sports fest of SASTRA respectively",
"Worked on building websites using React-JS and bootstrap for Kuruksastra and Colosseum, the official InterCollege Cultural fest and sports fest of SASTRA respectively."]);
    return (
        <Container maxW={'container.lg'} py={10}>
            <Heading>Academic Activities</Heading>
            <br />
            <VStack spacing={10} align='left'>
                <Profile title="Team 1nf1n1ty" pos="CTF Player | Cybersecurity Researcher - 2 years" description={infinity} link="https://media-exp1.licdn.com/dms/image/C4E0BAQGLwsgfcVLdiQ/company-logo_200_200/0/1635874867694?e=1677715200&v=beta&t=WgsllkzK2Z1ghXXybBxChVy-8hh19zIwaQXkfS20ido" />
                <Profile title="Developer Community SASTRA" pos="Head of Web Dev - 2 years" description={dcs} link="https://media-exp1.licdn.com/dms/image/C560BAQEHfIMuMVGJrA/company-logo_200_200/0/1640415645085?e=1677715200&v=beta&t=AIRK2R5qo-kdx-eDoiqXIl5fZs_kjWdnLmHSci44zgM" />
                <Profile title="OWASP SASTRA University" pos="Chapter Lead - 3 years" description={owasp} link="https://media-exp1.licdn.com/dms/image/C560BAQFsR4fLGnnq3g/company-logo_200_200/0/1648743694045?e=1677715200&v=beta&t=-_y2QgyTtOMKBliQpX3UrXaAyfwZcPx3DmLC7TSLvxg" />
                <Profile title="Google Developer Students Club" pos="Core Team Member - 1 year" description={dsc} link="https://media-exp1.licdn.com/dms/image/C4D0BAQEBs_bsyPr7FA/company-logo_200_200/0/1658587060063?e=1677715200&v=beta&t=H8GmDdtPoo6YfBv78vOhOGWyi5ZKIAFyuBat_jcOevM" />
                <Profile title="300DPI" pos="Head - 1 year" description={dpi} link="https://media-exp1.licdn.com/dms/image/C510BAQG8NVIq-TmwCQ/company-logo_200_200/0/1579355071731?e=1677715200&v=beta&t=kcEJCe2HbuAz1hcbJtkLPY-ja5Aue646glnXzYLzIyg" />
            </VStack>

        </Container>
    )
}

export default Academic;