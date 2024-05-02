import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Text, Divider} from 'native-base'
import HomeImage from '../assets/home.png';



export function Conteudo({nomeperfil, descricao, imagemPerfil, imagemConteudo}){
 return(
    <View style={styles.conteudo}>
                <View style={styles.conteudoCabecalho}>
                    <Image source={imagemPerfil} style={styles.conteudoCabecalhoImagem}/>
                    <Text style={styles.conteudoCabecalhoTexto}> {nomeperfil}</Text>
                    
                    
                </View>
                <Divider/>
                <View style={styles.conteudoImagem}>
                        <Image source={imagemConteudo} style={styles.conteudoImagem}/>
                        <Text style={styles.conteudoDescricao}> {descricao}</Text>
                </View>
            </View>
 )   
}

const styles = StyleSheet.create({

    conteudo: {
        height:550,
        margin:4,
        padding:4,
        backgroundColor:"rgba(0, 40, 130, 0.08)",
        borderRadius:10,
        borderColor: 'grey',
        borderWidth:2,
        marginTop: 20, 
        marginBottom:20,
        flex:1
    },
    conteudoCabecalho:{
        alignItems:'center',
        flexDirection: 'row',
        padding:10

    },
    conteudoCabecalhoImagem:{
        width: 64,
        height: 64,
        borderRadius: 50,

    },
    conteudoCabecalhoTexto:{
        paddingLeft:10,
        fontSize: 16,
    },
    conteudoImagem:{
        width:'100%',
        flex:1,
        borderRadius:10,
        
    },
    conteudoDescricao:{
        paddingVertical:8,
        
        
    },
})