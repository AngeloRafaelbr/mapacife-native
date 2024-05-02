import {VStack, Text, ScrollView, Box} from 'native-base'

import { Botao } from '../componentes/Botao'
import { CardConsulta } from '../componentes/CardEvento'
import { Titulo } from '../componentes/Titulo'
import { EntradaTexto } from '../componentes/EntradaTexto'

export default function Explorar(){
    return(
        <ScrollView padding={5}>
            <VStack>
                <Box borderRadius='40' shadow={2} padding={5} paddingTop={1} margin={2} backgroundColor={'gray.200'}> 
                    <EntradaTexto label='' placeholder='Digite uma palavra-chave'/>
                    <EntradaTexto label='' placeholder='Digite sua localização'/>
                </Box>
                <Titulo color='blue.500'>Resultados da Busca</Titulo>
                <Box>
                    <CardConsulta
                        titulo='Show  Cantor Carlinhos'
                        local='Purecife'
                        tipo= 'Evento Interno'
                        imagem='https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2021/07/alceu-por-leo-aversa-160-1-1.jpg'
                        data='10/05/2024'
                        foiAgendado
                    />
                    <CardConsulta
                        titulo='Show  Cantora Rosa'
                        local='Restbarboré'
                        tipo= 'Evento Interno'
                        imagem='https://th.bing.com/th/id/R.9b189a2b1ab3b6eb299fe6d575c9b487?rik=vcbt5swYEB15vg&pid=ImgRaw&r=0'
                        data='10/05/2024'
                        foiAgendado
                    />
                    <CardConsulta
                        titulo='Rodízio Pela Metade Do Preço'
                        local='Pizzaria do Zezinho'
                        tipo= 'Evento Interno'
                        imagem='https://uploads.metropoles.com/wp-content/uploads/2023/08/09145143/Pizza-31.jpg'
                        data='10/05/2024'
                        foiAgendado
                    />
                </Box>
            </VStack>
        </ScrollView>
    )
}