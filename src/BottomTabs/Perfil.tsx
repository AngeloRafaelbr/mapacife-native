import {VStack, Text, ScrollView, Avatar, Divider, Pressable, Box, Button, HStack} from 'native-base'
import { Titulo } from '../componentes/Titulo'
import { useWindowDimensions, ImageBackground, StyleSheet, View} from 'react-native';
import { useEffect, useState } from 'react';

import { strings as stringsPtBr } from '../assets/strings';
import { strings as stringsEn } from '../assets/stringsEnglish';






var strings = stringsPtBr


export default function Perfil({navigation,route}){
    // para responsividade
    const window=useWindowDimensions();
    const [orientation,setOrientation] = useState('portrait');
    useEffect( () => {
        const isPortrait= window.height> window.width;
        setOrientation(isPortrait? 'portrait':'landscape')
    }, [window]);

    // const {valorEmail} = route.params
    // const params = navigation.getParam({valorEmail}, {});
    


    //para trocar de linguagem (tentar no app.tsx, para todas as telas)
    const [language,setLanguage] =  useState('pt-BR') 
    const alterarLinguagem =  () => {
        if(language==='pt-BR'){
            setLanguage('En')
            console.log('Mudou para En ')
            console.log(orientation)
            strings = stringsEn
        }else{
            setLanguage('pt-BR')
            console.log('Mudou para Pt')
            strings = stringsPtBr
        }
        language === 'pt-BR' ? stringsEn : stringsPtBr ;
        // console.log({language})

    }

    
    return(
      <View style={orientation === 'portrait'? styles.portraitView: styles.landscapeView}>
        <ScrollView  >
            <VStack flex={1} alignItems='center' padding={5}>
                <Titulo color='blue.500'>{strings.perfilTitulo}</Titulo>
                {/* <Titulo>{valorEmail}</Titulo> */}
                <Box flexDirection='row' alignItems='center'>
                    <Avatar source={{ 
                        uri: 'https://avatars.githubusercontent.com/u/54721131?v=4'}} 
                        
                        size={'xl'}
                    />
                    
                </Box>
                <Text color='blue.500'>{strings.perfilInformacoes}</Text>
                <Text> André Pereira</Text>
                <Text> 12/12/1995</Text>
                <Text> Boa Viagem</Text>

                <Divider/>

                <Button 
                borderRadius={30} 
                color='blue.500' 
                width='100%' 
                margin={2} 
                justifyContent='Left' 
                onPress={alterarLinguagem}>

                    <HStack flexDirection='row' alignItems='center'>
                        <Avatar source= {{ uri: 'https://th.bing.com/th/id/OIP.9bQ11MxSSA6U30CO-fce3gHaEK?rs=1&pid=ImgDetMain'}}/>
                        <Text color='white'> Pt-Br / En</Text>
                    </HStack>

                </Button>
                
                <Divider/>

                <Titulo color='blue.500'>{strings.perfilEventosMarcados}</Titulo>
                <Text> RecifeBar </Text>
                <Text> RecifeRestaurante</Text>

            </VStack>
            
        </ScrollView>
    </View>
    )
}

const styles = StyleSheet.create({
    portraitView:{
            flex:1,
            backgroundColor:'rgba(131, 247, 84, 0.24)'
            
    },
    landscapeView:{
        flex:1,
            backgroundColor:'rgba(255, 216, 179, 0.8)'
        
},
   

})