import { Text, Avatar, VStack, Box} from 'native-base'
import { Botao } from './Botao'

interface CardProps{
    titulo: string;
    imagem: string;
    tipo: string;
    local: string;
    data: string;
    compareceu?: boolean;
    foiAgendado?: boolean;
}

export function CardConsulta({
titulo,
imagem,
tipo,
local,
data,
compareceu,
foiAgendado

}: CardProps){
    return(
        <Box width='100%' borderRadius='40' 
        backgroundColor={compareceu ? 'green.100' : 'gray.200'} padding={5}
        shadow={2} margin={2} >
            <Box flexDirection='row'>
                <Avatar source={{ 
                    uri: imagem}} 
                    size='20'/>
            <Box padding={1} >
                <Text fontWeight='bold'> {titulo}</Text>
                <Text> Local: {local}</Text>
                <Text> Tipo: {tipo}</Text>
                <Text> Data: {data}</Text>
            </Box>
        </Box>

            <Botao marginTop={3}>
                {foiAgendado? 'Cancelar Comparecimento' : ' Agendar Novo Evento'}
            </Botao>
        </Box>
    )
}