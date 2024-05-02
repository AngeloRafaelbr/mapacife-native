import { StyleSheet } from "react-native";
import * as Animatable from 'react-native-animatable';
// import {} from 'react-native-animatable;'


export default function LogoViewer({logosourceview, style}) {
    return (
        <Animatable.Image animation="flipInY" source={logosourceview} style={style}/>
    )
};

const styles = StyleSheet.create({
    Image: {
        
    bottom:1
    
    }

});