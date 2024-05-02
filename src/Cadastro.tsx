import { VStack, Image, Box, ScrollView} from 'native-base';
import { useState } from 'react'


import Logo from './assets/logotamanhocerto.png'
import { Titulo } from './componentes/Titulo'
import { EntradaTexto } from './componentes/EntradaTexto';
import { Botao } from './componentes/Botao';
import { secoes } from './utils/EntradaTextoCadastro';



export default function Cadastro() {

  const [numSecao, setNumSecao] = useState(0);

  

  function avancarSecao(){
    if(numSecao < secoes.length - 1){
    setNumSecao(numSecao + 1)
    }
  }

  function voltarSecao(){
    if(numSecao > 0){
    setNumSecao(numSecao - 1)
    }
  }

  return (
    <ScrollView flex={1} >
      <Image source={Logo} alt="Logo Mapacife" alignSelf='center' />

      <Titulo> 
      {secoes[numSecao].titulo}
      </Titulo> 
      
      <Box>
        {
          secoes[numSecao].entradaTexto.map(entrada => {
            return <EntradaTexto label={entrada.label} 
            placeholder={entrada.placeholder} key={entrada.id}/>
          })
        }
      </Box>
      


      { numSecao > 0 &&
        <Botao onPress={voltarSecao} background='gray.400' >Voltar</Botao>
      }
      
      { numSecao == 0 && <Botao onPress={avancarSecao} mb={10}>Avançar</Botao>}
    </ScrollView>
  );
}