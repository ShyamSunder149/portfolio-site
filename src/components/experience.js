import { Container, Heading, Image, Stack, Text, VStack, HStack, UnorderedList } from "@chakra-ui/react";
import { CardBody, CardFooter, Card } from "@chakra-ui/card";
import React from 'react';

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

const Experience = () => {
    const { useState } = React;
    const [smoose, setSmoose] = useState(
        ["Worked on the FrontEnd part of Static and Dynamic Web Applications of the company",
        "Gained experience on Hosting websites",
            ]);
    const [zoho,setZoho] = useState(
        ["Part of eDiscovery Dev team - Data ETL/Zoho Desk"]
    )
    
    return (
        <Container maxW={'container.lg'} py={10}>
            <Heading>Experience</Heading>
            <br />
            <VStack spacing={10} align='left'>
                
            
            <Profile title="Zoho" pos="Project Trainee" duration="Jan 2023 - Present"description={zoho} link="https://media.licdn.com/dms/image/C560BAQH-TYqVPOAI8g/company-logo_200_200/0/1672583365986?e=1681948800&v=beta&t=zLTkgH9TVqAEQF73hK3lpA6YdxoJfK4VuUNTVA0R-sI" />
            <Profile title="Smoose" pos="Intern" description={smoose} duration="Nov 2020 - Dec 2020" link="https://media-exp1.licdn.com/dms/image/C4D03AQE5ZjOFuHDZaA/profile-displayphoto-shrink_400_400/0/1622372473648?e=1675296000&v=beta&t=x7Cae94bD5umVUmDH3g3rIUlYLZ_CB5JJhf6erXyra4" />
            </VStack>

        </Container>
    )
}

export default Experience;