import { Container, Heading, Button, Link} from '@chakra-ui/react';
import {ExternalLinkIcon} from '@chakra-ui/icons';

const Resume = () => {
    return (
        <Container maxW={'container.lg'} py={10}>
            
            <Heading>Resume</Heading>
            <br/>
            <Link href="https://drive.google.com/file/d/1DlP9dhP-ftq4rj7D9xs62o1DBRj6jlhu/view?usp=sharing">
            <Button colorScheme='teal' variant='outline'>
    Get my Resume here ! <ExternalLinkIcon mx='2px' />
  </Button>
  </Link>
            
        </Container>
    );
}

export default Resume;