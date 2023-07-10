
import { Link } from "react-router-dom";
import { useColorMode } from "@chakra-ui/color-mode";
import {
  Box,
  Button,
  Text,
  Flex,
  Stack,
  useMediaQuery,

} from "@chakra-ui/react";

function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Stack align="center" justify="center">
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Begin to manage to manage your time with
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="Linear(to-r,cyan.400,blue.500,purple.600)"
            bgClip="text"
          >
            the To-Do List
          </Text>
          <Text fontSize="3xl">
            the App is focus in daily task and allows to keep the current state
          </Text>
          <Link to="/sobre-nosotros">
          
            <Button
              size="lg"
              mt="5"
              colorScheme="blue"
    
            >
              Start Right Here
            </Button>
          </Link>
        </Box>
      </Flex>
    </Stack>
  );
}

export default Home;
