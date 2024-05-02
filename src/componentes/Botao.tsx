import {Button} from 'native-base'

export function Botao({children, ...rest}){
 return(
    <Button 
      width='100%'
      background='blue.800'
      marginTop={10}
      borderRadius='lg'
      {...rest}
      >
        {children}
      </Button>
 )   
}