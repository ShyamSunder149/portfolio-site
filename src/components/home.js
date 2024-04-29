import { Center, Heading, Text, Image, VStack } from "@chakra-ui/react";
import "./home.css";

const Home = () => {
  const words = [
    "Hello, Nitro Here",
    "こんにちは、ニトロです",
    "Hola Soy nitro",
    "Bonjour, je suis Nitro",
    "Hallo, ich bin Nitro",
  ];
  const title = words[Math.floor(Math.random() * words.length)];
  return (
    <div>
      {/* <ul class="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul> */}
      <Center h="91vh" w="100vw">
        <VStack>
          <Heading size="xl" marginRight="auto" marginTop="-20%">
            {title}
          </Heading>

          <Text>
            BTW how did you end up here? 👀 <br /> Anyways feel free to scroll
            down...
            <br /> You might just stumble upon what you've been looking for!
          </Text>
        </VStack>
        <Image src="https://orig00.deviantart.net/f6bd/f/2013/285/1/d/monkey_d__luffy_by_naruto_lover16-d6q69ti.png"></Image>
      </Center>
    </div>
  );
};

export default Home;
