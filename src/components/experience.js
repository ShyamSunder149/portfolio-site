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

const Experience = () => {
    const { useState } = React;
    const [smoose, setSmoose] = useState(
        ["Implemented the UI forthe Customer App, Admin App and Branding site ensuring a seamless and user-friendly experience",
        "Actively contributed to Design aspects of the UIs during my internship",
            ]);
    const [zoho,setZoho] = useState(
        ["Part of eDiscovery Dev Team | Data ETL | Zoho Desk","Worked on the Enhancement fixes of tools which are used internally to carry out and support DC Migrations. Enhancements includes Mail handling, Error Handling and Implementing pre check and post check routines for DC Migration using Java","Worked on the Backup feature which enables the customer to take the backup of data either peridoically or once in a month with the data in the given range. Supports all modules present in the product."]
    )
    
    return (
        <Container maxW={'container.lg'} py={10}>
            <Heading>Experience</Heading>
            <br />
            <VStack spacing={10} align='left'>
                
            
            <Profile title="Zoho" pos="Member Techinal Staff - 10 months" duration="Jan 2023 - Present"description={zoho} link="https://media.licdn.com/dms/image/C560BAQH-TYqVPOAI8g/company-logo_200_200/0/1672583365986?e=1681948800&v=beta&t=zLTkgH9TVqAEQF73hK3lpA6YdxoJfK4VuUNTVA0R-sI" />
            <Profile title="Smoose" pos="Intern - 2 months" description={smoose} duration="Nov 2020 - Dec 2020" link="https://media-exp1.licdn.com/dms/image/C4D03AQE5ZjOFuHDZaA/profile-displayphoto-shrink_400_400/0/1622372473648?e=1675296000&v=beta&t=x7Cae94bD5umVUmDH3g3rIUlYLZ_CB5JJhf6erXyra4" />
            </VStack>

        </Container>
    )
}

export default Experience;