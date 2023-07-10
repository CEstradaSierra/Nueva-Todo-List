import { Link } from "react-router-dom";
import { UnorderedList, ListItem, chakra,Text } from "@chakra-ui/react";
import {useColorMode} from "@chakra-ui/color-mode"
function Menu() {
    const{colorMode,toggleColorMode}=useColorMode()
    const isDark= colorMode==="dark"
  return (
        <UnorderedList
        listStyleType="none"
        display="flex"
        fontWeight="semibold"
        fontSize="medium"
        color={isDark ? "white" : "black"}
        
        >
        <ListItem mr={8}>
            <chakra.span as={Link} to={"/"} _hover={{ color: "cyan.400", cursor: "pointer" }}>
            <Text fontWeight="semibold">
                Home
            </Text>
            </chakra.span>
        </ListItem>
        <ListItem mr={8}>
            <chakra.span as={Link} to={"/tareas"} _hover={{ color: "cyan.400", cursor: "pointer" }}>
            Tasks
            </chakra.span>
    
        </ListItem>
        <ListItem mr={8}>
            <chakra.span as={Link} to={"/sobre-nosotros"} _hover={{ color: "cyan.400", cursor: "pointer" }}>
            About Us
            </chakra.span>
        </ListItem>
        </UnorderedList>
 
  );
}

export default Menu;
