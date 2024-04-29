import {
  Container,
  Heading,
  Button,
  Link,
  Center,
  Box,
  VStack,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";

const Resume = () => {
  return (
    <Container
      maxW={"container.lg"}
      py={10}
      backgroundColor={useColorMode().colorMode === "light" ? "gray.200" : "gray.700"}
      borderRadius="20"
      bgImage={useColorMode().colorMode === "dark" ? "url('https://4kwallpapers.com/images/walls/thumbs_3t/14877.jpeg')" : "url('https://c4.wallpaperflare.com/wallpaper/814/751/790/kimi-no-na-wa-your-name-wallpaper-preview.jpg')" } bgSize="cover"
    >
      <Center>
        <Box display="flex" alignItems="center" justifyContent="center" >
          <VStack>
            <Heading color="white">Resume</Heading>
            <br />
            <Link href="https://docs.google.com/document/d/1WhbhbrX_ZGxal8GiGvl-cgoBlzzO2fyOqiWr1Z-odJM/edit?usp=sharing">
              <Button colorScheme={useColorMode().colorMode === "light" ? "whiteAlpha" : "teal"} variant="outline">
                Get my Resume here ! <ExternalLinkIcon mx="2px" />
              </Button>
            </Link>
          </VStack>
        </Box>
      </Center>
    </Container>
  );
};

export default Resume;
