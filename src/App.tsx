import { Center, Flex, Heading } from "@chakra-ui/react";

function App(): JSX.Element {
  return (
    <Center bg="tomato" h="100px" color="white">
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Heading as="h1" size="4xl" isTruncated>
          This is the Center
        </Heading>
        <p>hello world</p>
      </Flex>
    </Center>
  );
}

export default App;
