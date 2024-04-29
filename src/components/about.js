import { Container, Heading, Center, Box, VStack, useColorMode, Tag } from "@chakra-ui/react";

const About = () => {

  const skills = ["React", "Java", "JavaScript", "TypeScript"]

  return (
    <Box
      bgImage="url('https://images5.alphacoders.com/133/1338166.png')"
      bgSize="cover"
      display="flex"
      alignItems="center"
      justifyContent="center"
      h="100vh"
    >
      <Container
        maxW={"container.lg"}
        py={10}
        backgroundColor={useColorMode().colorMode === "light" ? "gray.200" : "gray.800"}
        borderRadius="20"
        opacity="0.8"
        textAlign="center"
      >
        <Center>
          <Box
            p="5"
            textAlign="center"
          >
            <VStack>
              <Heading>About Me</Heading>
              <br />
              <Center>
                A Weeb who is trying to level up everyday by fighting with his
                lazy personality. Currently working as a MTS at Zoho Corp, I play around with
                Sandbox and Backup features of a product. Looking forward to
                have some fun !
              </Center>
              <br/>
              <Center>
                Skills : {skills.map(skill => <Tag p="1" ml="2">{skill}</Tag>)}
              </Center>
            </VStack>
          </Box>
        </Center>
      </Container>
    </Box>
  );
};

export default About;
