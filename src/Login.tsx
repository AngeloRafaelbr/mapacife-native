import {Text, Box, Link  } from 'native-base'
import { TouchableOpacity, ImageBackground, StyleSheet } from 'react-native'
import { Titulo } from './componentes/Titulo'
import { EntradaTexto } from './componentes/EntradaTexto';
import { Botao } from './componentes/Botao';
import LogoViewer from './componentes/logoviewer';
import logo from './assets/logotamanhocerto.png'
import { useState, useEffect } from 'react';
import Perfil from "./BottomTabs/Perfil";


export default function Login({navigation,route}) {
  const [email,setEmail] = useState('')
  const [senha,setSenha] = useState('')

  useEffect(() => {
    console.log(route.params.nomePersonalizado);
  }, []);
  

  const handleLogin = () => {
    console.log("Email: ",email);
    console.log("Senha:", senha);
    navigation.navigate('Tabs',{valorEmail: email});
    alert('Curta o Recife,\n Seja bem vindo!!!')
    };

    
  
  return (
    <ImageBackground source={require('./assets/recife.jpg')} style={styles.containerBackground} >

        
      <Box style={styles.containerForm}> 
        <Titulo style={styles.title}> 
        Olá, {route.params.nomePersonalizado}! {'\n'} Faça seu login 
        </Titulo> 
        
        <Box>
          <EntradaTexto label='Email' placeholder='Insira seu endereço email' onChangeText={setEmail} value={email}/>
        
          <EntradaTexto 
          label='Senha' 
          placeholder='Insira sua senha' 
          type='password'
          onChangeText={setSenha} 
          value={senha}/>
        </Box>
        
        <Botao onPress={() => {handleLogin()}}>Entrar</Botao>

        <Text style={styles.text}>
          Esqueceu sua senha?
        </Text>

        <Box width='100%' flexDirection='row' justifyContent='center' marginTop={8}>
          <Text style={styles.text}> Ainda não tem cadastro?</Text>
          <TouchableOpacity>
            <Text color='white' style={styles.text}
            onPress={() => navigation.navigate('Cadastro')} shadow={3}> 
             Faça seu cadastro 
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>

        <LogoViewer logosourceview={logo} style={styles.containerLogo}/>
    </ImageBackground>
    
  );
}
const styles = StyleSheet.create({
  containerBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems:"center" ,
    padding: 20,
  },
  containerLogo:{
      
      justifyContent:'center',
      alignItems:'center',
  },
  containerForm:{
      width:'100%',
      backgroundColor:'rgba(255, 255, 255,0.5)',
      padding:10,
      borderRadius:25,
  },
  title:{
      
      fontSize:24,
      fontWeight:'bold',
      marginTop:28,
      marginBottom:10
  },
  text:{
    fontSize:16
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
  

})