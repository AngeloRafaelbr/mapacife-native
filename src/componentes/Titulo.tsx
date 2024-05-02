import {Text} from 'native-base'




export function Titulo({children,...rest}){
    return(
        <Text 
        fontSize='xl' 
        fontWeight="bold" 
        color="gray.500" 
        textAlign="center" 
        margin={5}
        {...rest}
        >
        {children}
      </Text>
    )
}