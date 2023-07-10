import {
  Box,
  Icon,
  Text,
  Flex,
  Stack,
  useMediaQuery,
  Grid,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { BiSolidUniversalAccess } from "react-icons/bi";
import { FaMoon } from "react-icons/fa";
import {BsListTask,BsFillLightningFill} from "react-icons/bs"
import {GrStorage} from "react-icons/gr"
import {AiFillEdit,AiFillDatabase} from "react-icons/ai"
import { color } from "framer-motion";
function SobreNosotros() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Stack>
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
          <Text fontSize="7xl" fontWeight="semibold">
            An manage time tool you'd expect from a busy worker
          </Text>
          <Text fontSize="2xl" color={isDark ? "gray.200" : "gray.500"}>
            Opinionated and designed for daily use
          </Text>
          <Box alignSelf="center">
            <Grid
              templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
       
            >
              <Flex
                direction="column"
                rounded="xl"
                h="40vh"
                w="40vh"
                boxShadow="lg"
                p={6}
                _hover={{ bg: "cyan.400" }}
              >
                <Icon as={BiSolidUniversalAccess} boxSize={14} color="blue" />
                <Text fontWeight="semibold" fontSize="2xl">Accessible</Text>
                <Text color="gray.500" fontWeight="semibold" fontSize="2xl">
                  The to-do list is understandable, usable and practicable by
                  all people
                </Text>
              </Flex>
              <Flex
                direction="column"
                rounded="xl"
                h="40vh"
                w="40vh"
                boxShadow="lg"
                p={6}
                _hover={{ bg: "cyan.400" }}
              >
                <Icon as={BsListTask} boxSize={14} color="blue" />
                <Text fontWeight="semibold" fontSize="2xl">Create taks</Text>
                <Text color="gray.500" fontWeight="semibold" fontSize="2xl">
                  Create your task depend on what you need and add description if you want
                </Text>
              </Flex>
              <Flex
                direction="column"
                rounded="xl"
                h="40vh"
                w="40vh"
                boxShadow="lg"
                p={6}
                _hover={{ bg: "cyan.400" }}
              >
                <Icon as={AiFillDatabase} boxSize={14} color="blue" />
                <Text fontWeight="semibold" fontSize="2xl">local Storage</Text>
                <Text color="gray.500" fontWeight="semibold" fontSize="2xl">
                  if you get out the app don´t worry your task would be there
                </Text>
              </Flex>
              <Flex
                direction="column"
                rounded="xl"
                h="40vh"
                w="40vh"
                boxShadow="lg"
                p={6}
                _hover={{ bg: "cyan.400" }}
              >
                <Icon as={FaMoon} boxSize={12} color="blue" />
                <Text fontWeight="semibold" fontSize="2xl">Light and Dark UI</Text>
                <Text color="gray.500" fontWeight="semibold" fontSize="2xl">
                  Optimized for multiple color modes. Use light or dark, your choice.
                </Text>
              </Flex>
              <Flex
                direction="column"
                rounded="xl"
                h="40vh"
                w="40vh"
                boxShadow="lg"
                p={6}
                _hover={{ bg: "cyan.400" }}
              >
                <Icon as={BsFillLightningFill} boxSize={14} color="blue" />
                <Text fontWeight="semibold" fontSize="2xl">Developer productivity</Text>
                <Text color="gray.500" fontWeight="semibold" fontSize="2xl">
                Guaranteed to boost your productivity when building your app or website.
                </Text>
              </Flex>
              <Flex
                direction="column"
                rounded="xl"
                h="40vh"
                w="40vh"
                boxShadow="lg"
                p={6}
                _hover={{ bg: "cyan.400" }}
              >
                <Icon as={AiFillEdit} boxSize={14} color="blue" />
                <Text fontWeight="semibold" fontSize="2xl">Edit tasks</Text>
                <Text color="gray.500" fontWeight="semibold" fontSize="2xl">
                  if you make a mistake typing your task, you can edit the content whatever yout want
                </Text>
              </Flex>
            </Grid>
          </Box>
        </Box>
      </Flex>
    </Stack>
  );
}

export default SobreNosotros;
