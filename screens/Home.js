import { StyleSheet, Text, View, Button, ImageBackground,} from 'react-native';
import React from 'react'

import { useNavigation } from '@react-navigation/native';

export default function Home(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <ImageBackground source={require('./cat.png')} resizeMode="cover" style={styles.image}>
            <Button color="green" title='Scan QR-code' onPress={()=> navigation.navigate('Scanner')} />
            <Text> </Text>
            <Button color="green" title='Create QR-code' onPress={()=> navigation.navigate('Generator')} />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center'
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
})

