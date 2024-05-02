import React,{useState} from "react";
import {View, Text, StyleSheet, Pressable, ImageBackground} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';

import { EntradaTexto } from "./componentes/EntradaTexto";
import LogoViewer from "./componentes/logoviewer";
import BandeiraViewer from "./componentes/bandeiraviewer";


import logo from './assets/logotamanhocerto.png'
import { Flex } from "native-base";
// import bandeira from {{ uri: "https://th.bing.com/th/id/R.05b566db79b41812a799471b57cb9405?rik=zt5SauYR9BGGfA&pid=ImgRaw&r=0"}}

export default function Bemvindo({navigation}) {
    /*Erro ta aqui*///navigation.setOptions({tabBarVisible: false});
    const [nomePersonalizado,setnomePersonalizado] = useState('')

    return(
        <View style={styles.container}>
         <ImageBackground source={require('./assets/recife.jpg')} style={styles.containerBackground}>
            <View style={styles.containerSuperior}>
                <View style={styles.containerLogo}>
                        <LogoViewer logosourceview={logo} style={null}/>
                        <BandeiraViewer imagesourceview={{ uri: "https://th.bing.com/th/id/R.05b566db79b41812a799471b57cb9405?rik=zt5SauYR9BGGfA&pid=ImgRaw&r=0"}}/>    
                </View>
                <View style={styles.containerForm}>
                    <Text style={styles.title}>Nos diga seu nome Recifence</Text>
                    {/* <TextInput  placeholder="Digite algo..." /> */}
                    <EntradaTexto 
          label='' 
          placeholder='Insira seu nome personalizado' 
          onChangeText={setnomePersonalizado} 
          value={nomePersonalizado}/>
        
                </View>
            </View>
            
            <Animatable.View delay={700} animation='fadeInUp'  style={styles.containerDialogo}>
                <Text style={styles.title}>Pronto para iniciar novas aventuras?</Text>
                <Text style={styles.text}>Faça seu Login para Começar!</Text>
                <Pressable 
                onPress={() => navigation.navigate('Login',{nomePersonalizado})}
                style={styles.button}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </Pressable>
            </Animatable.View>
            
         </ImageBackground>
        </View>
    )}

const styles = StyleSheet.create({
    container:{
            flex:1,
            justifyContent:"center",
            
    },
    containerSuperior:{
        flex:2,
        justifyContent:"center",
    },
    containerLogo:{
        flex:1,
        backgroundColor:'rgba(255, 100, 5,0.2)',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    containerForm:{
        
        backgroundColor:'#FFF',
        paddingStart:'5%',
        paddingEnd:'5%',
        borderTopLeftRadius:25,
    },
    containerTextForm:{
        
        fontSize:32,
    },
    containerDialogo:{
        flex:1,
        backgroundColor:'#FFF',
        paddingStart:'5%',
        paddingEnd:'5%',
        
    },
    formulario:{
        backgroundColor:'#FFF',
        paddingStart:'5%',
        paddingEnd:'5%',
        borderTopRightRadius:25,
        borderTopLeftRadius:25,
    },
    title:{
        
        fontSize:24,
        fontWeight:'bold',
        marginTop:28,
        marginBottom:10
    },
    text:{
        color:'#a1a1a1',
    },
    button:{
        position:'absolute',
        backgroundColor: 'rgb(255, 100, 5)',
        borderRadius:50,
        paddingVertical:8,
        width:'60%',
        alignSelf: 'center',
        bottom:'15%',
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        fontSize:18,
        color:'#FFF',
        fontWeight:'bold'
    },
    teste: {
       flexDirection:'column'

    },
    containerBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    }

})