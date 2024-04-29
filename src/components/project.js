import {
  Container,
  LinkBox,
  Link,
  Heading,
  LinkOverlay,
  Text,
  SimpleGrid,
  Button,
  Center,
  VStack,
  Tag,
  HStack
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import data from "../data/data.json";

function Single({ title, desc, link, github, tags, concepts }) {
  return (
    <LinkBox maxW="lg" p="5" borderWidth="1px" rounded="lg">
      <Heading size="md" my="2">
        <LinkOverlay href={link}>{title}</LinkOverlay>
      </Heading>
      <Text mb="3">{desc}</Text>
      <HStack pb="3">
      <Text>Tags : </Text>
        {tags.map((tag) => {
          return <Tag>{tag}</Tag>
        })}
      </HStack>
      <HStack pb="3">
      <Text>Concepts : </Text>
        {concepts.map((concept) => {
          return <Tag>{concept}</Tag>
        })}
      </HStack>
      <Link href={link} pr="5">
        <Button colorScheme="teal" variant="outline">
          Go to Project <ExternalLinkIcon mx="2px" />
        </Button>
      </Link>
      <Link href={github}>
        <Button colorScheme="teal" variant="outline">
          Github repo <ExternalLinkIcon mx="2px" />
        </Button>
      </Link>
    </LinkBox>
  );
}

const Project = () => {
  const projects = data.projects;

  return (
    <Container maxW="container.lg" py={10} h="calc(100vh)" display="flex" alignItems="center" justifyContent="center">
      <Center display="flex">
        <VStack>
          <Heading>Projects</Heading>
          <br />
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {projects.map((project) => (
              <Single
                title={project.title}
                desc={project.desc}
                link={project.link}
                github={project.github}
                tags={project.tags}
                concepts={project.concepts}
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Center>
    </Container>
  );
};

export default Project;
