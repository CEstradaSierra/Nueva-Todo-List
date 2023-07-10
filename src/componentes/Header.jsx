import { Text } from "@chakra-ui/react"
export const Header=(props)=>{
    const{titleApp}=props
    return(
        <Text fontFamily="sans-serif" fontWeight="bold" fontSize="4xl">

            {titleApp}
        </Text>
    )
}