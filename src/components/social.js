import { Container, HStack, Flex, Center, Link } from '@chakra-ui/react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { IconButton } from '@chakra-ui/button';

const Social = () => {
    return (
        <Container maxW={'container.md'}>
            <Center>
            <Flex align='center'>
                <HStack p={5} spacing={5}>
                    <Link href='https://www.linkedin.com/in/shyam-nitro'>
                    <IconButton icon={<FaLinkedinIn />}  size='lg'/>
                        </Link>
                        <Link href='https://www.github.com/ShyamSunder149'>
                    <IconButton icon={<FaGithub />} size='lg'/>
                        </Link>
                </HStack>
            </Flex>
            </Center>
        </Container>
    )
}

export default Social;