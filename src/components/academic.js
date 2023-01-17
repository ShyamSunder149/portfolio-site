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
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={link} alt='Caffe Latte' borderRadius={10
                    }
                />

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
        ["Part of Official CyberSecurity Club of SASTRA which currently ranks 5th in India",
        "Inclined Towards Cryptography, Digital Forensics and Reverse Engineering",
            "Authored and Solved Challenges in Various CTFs Competitions",
            "Guided the team in building cybersecurity tools and CTFs",
            "Won prizes in more than 20 events representing the team"]);
    const [dcs, setDcs] = useState(

        ["Led the Web team of the official Development Club of SASTRA","Built static and dynamic web applications using React, Bootstrap and Chakra UI",
            "Worked on the Backend (REST APIs) of the University Official Mobile Application",
            "Gained experience on Hosting on-premises",
        "Took Sessions and Workshops on Web Development"]);

    const [dsc, setDsc] = useState([
        "Part of the Core team of Web Cluster",
        "Involved on building Community Projects with Google products",
        "Took session and workshops on Web Development for University Students",
        "Worked as a part of the CyberSecurity Cluster",
        "Participated in Hackathons and Conducted Events"
    ]);
    const [owasp, setOwasp] = useState([
        "Organized Talks for University Students on Cyber Security",
        "Conducted events and took workshops on Cyber Security",
        "Organized awareness sessions on Vulnerabilities and Threats",
        "Worked on building a Cyber Security tools along with the Community"
    ]);
    const [dpi, setDpi] = useState(["Led the team of 45 designers and developers for creating digital contents for University sports and Cultural Fests",
"University's Official Design Team",
"Represented SASTRA in facebook dev Hackathon and won 2nd prize"]);
    return (
        <Container maxW={'container.lg'} py={10}>
            <Heading>Academic Activities</Heading>
            <br />
            <VStack spacing={10} align='left'>
                <Profile title="Team 1nf1n1ty" pos="CTF Player | Cybersecurity Researcher" description={infinity} link="https://media-exp1.licdn.com/dms/image/C4E0BAQGLwsgfcVLdiQ/company-logo_200_200/0/1635874867694?e=1677715200&v=beta&t=WgsllkzK2Z1ghXXybBxChVy-8hh19zIwaQXkfS20ido" />
                <Profile title="Developer Community SASTRA" pos="Head of Web Dev" description={dcs} link="https://media-exp1.licdn.com/dms/image/C560BAQEHfIMuMVGJrA/company-logo_200_200/0/1640415645085?e=1677715200&v=beta&t=AIRK2R5qo-kdx-eDoiqXIl5fZs_kjWdnLmHSci44zgM" />
                <Profile title="OWASP SASTRA University" pos="Chapter Lead" description={owasp} link="https://media-exp1.licdn.com/dms/image/C560BAQFsR4fLGnnq3g/company-logo_200_200/0/1648743694045?e=1677715200&v=beta&t=-_y2QgyTtOMKBliQpX3UrXaAyfwZcPx3DmLC7TSLvxg" />
                <Profile title="Google Developer Students Club" pos="Core Team Member" description={dsc} link="https://media-exp1.licdn.com/dms/image/C4D0BAQEBs_bsyPr7FA/company-logo_200_200/0/1658587060063?e=1677715200&v=beta&t=H8GmDdtPoo6YfBv78vOhOGWyi5ZKIAFyuBat_jcOevM" />
                <Profile title="300DPI" pos="Head" description={dpi} link="https://media-exp1.licdn.com/dms/image/C510BAQG8NVIq-TmwCQ/company-logo_200_200/0/1579355071731?e=1677715200&v=beta&t=kcEJCe2HbuAz1hcbJtkLPY-ja5Aue646glnXzYLzIyg" />
            </VStack>

        </Container>
    )
}

export default Academic;