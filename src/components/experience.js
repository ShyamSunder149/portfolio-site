import { Container, Heading, Image, Stack, Text, Button, Divider, VStack, HStack, UnorderedList } from "@chakra-ui/react";
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
    
    return (
        <Container maxW={'container.lg'} py={10}>
            <Heading>Experience</Heading>
            <br />
            <VStack spacing={8} align='left'>
                <Profile title="Smoose" pos="Intern" description={smoose} link="https://media-exp1.licdn.com/dms/image/C4D03AQE5ZjOFuHDZaA/profile-displayphoto-shrink_400_400/0/1622372473648?e=1675296000&v=beta&t=x7Cae94bD5umVUmDH3g3rIUlYLZ_CB5JJhf6erXyra4" />
                 </VStack>

        </Container>
    )
}

export default Experience;