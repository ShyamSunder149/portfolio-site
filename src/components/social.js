import { Container, Heading, HStack, Flex, Center, Link } from '@chakra-ui/react';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { IconButton } from '@chakra-ui/button';

const Social = () => {
    return (
        <Container maxW={'container.md'}>
            <Center>
            <Flex align='center'>
                <HStack p={5} spacing={5}>
                    <Heading>Catch Me on </Heading>
                    <Link href='https://www.linkedin.com/in/shyam-nitro'>
                    <IconButton icon={<FaLinkedinIn />}  size='lg'/>
                        </Link>
                        <Link href='https://www.instagram.com/shyam_nitro'>
                    <IconButton icon={<FaInstagram />}  size='lg'/>
                        </Link>
                    
                        <Link href='https://www.github.com/ShyamSunder149'>
                    <IconButton icon={<FaGithub />}  size='lg'/>
                        </Link>
                </HStack>
            </Flex>
            </Center>
        </Container>
    )
}

export default Social;