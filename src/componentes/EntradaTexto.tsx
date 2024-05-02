import {FormControl, Input} from 'native-base'

export function EntradaTexto({label, ...rest}){
 return(
    <FormControl marginTop={3}>
          <FormControl.Label>{label}</FormControl.Label>
          <Input placeholder='Insira seu endereço de email' 
          size='lg' 
          width='100%' 
          borderRadius='lg' 
          backgroundColor='gray.100' 
          shadow={3}
          {...rest}/>
        </FormControl>
 )   
}
