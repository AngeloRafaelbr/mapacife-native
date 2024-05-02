import { StyleSheet } from "react-native";
import * as Animatable from 'react-native-animatable';

export default function BandeiraViewer({imagesourceview}) {
    return (
        <Animatable.Image animation="flipInY" source={imagesourceview} style={styles.Image}/>
    )
};

const styles = StyleSheet.create({
    Image: {
        width:'30%',
        height:'60%',
        marginStart: 10,
        resizeMode: 'contain',
    
        //borderRadius:18,
    }

});