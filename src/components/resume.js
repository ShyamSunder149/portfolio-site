import { Container, Heading, Button, Link} from '@chakra-ui/react';
import {ExternalLinkIcon} from '@chakra-ui/icons';

const Resume = () => {
    return (
        <Container maxW={'container.lg'} py={10}>
            
            <Heading>Resume</Heading>
            <br/>
            <Link href="https://drive.google.com/file/d/1eaIa4Rw76GFEuMV0pL1cQJ0HF7fOJLOt/view?usp=sharing">
            <Button colorScheme='teal' variant='outline'>
    Get my Resume here ! <ExternalLinkIcon mx='2px' />
  </Button>
  </Link>
            
        </Container>
    );
}

export default Resume;