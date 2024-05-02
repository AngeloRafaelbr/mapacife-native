import {VStack, Divider, ScrollView} from 'native-base'
import { CardConsulta } from '../componentes/CardEvento'
import { Titulo } from '../componentes/Titulo'
import { Botao } from '../componentes/Botao'

export default function Eventos(){
    return(
        <ScrollView padding={5}>
            <Titulo color='blue.500'>Meus Eventos</Titulo>
            <Botao marginBottom={3} marginTop={2}>Agendar Outro Evento</Botao>

            <Titulo color='blue.500' fontSize='lg' alignSelf='flex-start' marginLeft={1}> 
            Próximos Eventos
            </Titulo>
            <CardConsulta
            titulo='Show  Cantor Alceu Valença'
            local='Bar do Zezinho'
            tipo= 'Evento Interno'
            imagem='data:image/jpeg;base64,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'
            data='10/05/2024'
            foiAgendado
            />

            <Divider marginTop={5}/>

            <Titulo color='blue.500' fontSize='lg' alignSelf='flex-start' marginLeft={1}> 
            Eventos Passados
            </Titulo>
            <CardConsulta
            titulo='Show ao Vivo 10 anos'
            local='Bar Recibar'
            tipo= 'Alimentação'
            imagem='https://cdn.temporadalivre.com/blog-media/posts/cover/10070/size_800_os-melhores-restaurantes-de-recife-pe-2-37219f38.jpg'
            data='01/05/2024'
            compareceu
            />
            <CardConsulta
            titulo='Local Histórico'
            local='Museu de Pernambuco'
            tipo= 'Turismo'
            imagem='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkw2v2t-FMTSjumqHzq9NNAV1FgYrgZ6RLkA&usqp=CAU'
            data='05/04/2024'
            compareceu
            />
            <CardConsulta
            titulo='Apresentação Palhaço Picolé'
            local='Praça da Jaqueira'
            tipo= 'Evento Aberto'
            imagem='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTyWS5eyXB2wzkG3bbg9nRzLEQHm5SC2nfoMJ4Nn6iwSBeY090Mc7KPTr4xVKA3IUe-A0&usqp=CAU'
            data='02/04/2024'
            compareceu
            />



        </ScrollView>
    )
}