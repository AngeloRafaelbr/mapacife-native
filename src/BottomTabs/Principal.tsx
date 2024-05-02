import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Text, ScrollView, Avatar, FlatList, Divider} from 'native-base'
import HomeImage from '../assets/home.png';
import { Titulo } from "../componentes/Titulo";
import { Conteudo } from "../componentes/Conteudo";



const data = [
    {
        id: Math.random().toString(36).substring(2, 15),
        foto: {uri: 'https://th.bing.com/th/id/OIP.zsCuJC--icQ0WnrpvNevdQHaE8?rs=1&pid=ImgDetMain'}
    },
    {
        id: Math.random().toString(36).substring(2, 15),
        foto: HomeImage
    },
    {
        id: Math.random().toString(36).substring(2, 15),
        foto: {uri: 'https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2021/03/07/615x300/1_logo_da_prefeitura_do_recife-17208878.jpg'}
    },
    {
        id: Math.random().toString(36).substring(2, 15),
        foto: HomeImage
    },
    {
        id: Math.random().toString(36).substring(2, 15),
        foto: {uri: 'https://th.bing.com/th/id/OIP.zsCuJC--icQ0WnrpvNevdQHaE8?rs=1&pid=ImgDetMain'}
    },
    {
        id: Math.random().toString(36).substring(2, 15),
        foto: HomeImage
    },
    {
        id: Math.random().toString(36).substring(2, 15),
        foto: HomeImage
    },
    {
        id: Math.random().toString(36).substring(2, 15),
        foto: HomeImage
    },
]
export default function Home(){

    
return(
    
        <ScrollView style={styles.conteinerPrincipal}>
            
            <Titulo children={'Feed de Eventos'} color='blue.500' style={styles.nomePagina}></Titulo>
            
            <Divider/>
            <View style={styles.momentos}>
                <FlatList
                horizontal={true}
                data={data}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                renderItem={(item) =>
                    <View style={styles.momentosCard} key={item.item.id}> 
                        <Image style={styles.momentosCardImage} source={item.item.foto} />
                        {/* source={item.item.foto} */}
    
                    </View>
                }
                />
            </View>
            <Divider/>   
            <Conteudo nomeperfil='PrefeituraDoRecife' 
            descricao='Monumento de Brennand "Tá" toda iluminada, 
                     esculturas restauradas e com segurança no 
                    local! Quem vai agora? 🙌' 
            imagemPerfil={{uri: 'https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2021/03/07/615x300/1_logo_da_prefeitura_do_recife-17208878.jpg'}}
            imagemConteudo={HomeImage}/>

<Conteudo nomeperfil='Rosalina Freire' 
            descricao='Comemorando aniversário de 50 Anos em grande estilo!' 
            imagemPerfil={{uri: 'https://th.bing.com/th/id/OIP.zsCuJC--icQ0WnrpvNevdQHaE8?rs=1&pid=ImgDetMain'}}
            imagemConteudo={{uri: 'https://th.bing.com/th/id/R.fcf1d89eeb1d9a571e4ed8780ad70620?rik=NBF2JdhAtGzyfg&pid=ImgRaw&r=0'}}/>
            

            
        </ScrollView>
        
);
    
}

const styles = StyleSheet.create({

    conteinerPrincipal:{
        flex:1,
        backgroundColor:'white'
        
    },
    nomePagina:{
        
    },
    momentos:{
        
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingVertical: 10,
    },
    momentosCard:{
        margin:3,
        
    },
    momentosCardImage:{
        borderWidth:3,
        borderColor:'#F7B55A',
        borderRadius: 50,
        width: 80,
        height: 80,
    },
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
        borderRadius:10
        
    },
    conteudoDescricao:{
        
        
    },
})

