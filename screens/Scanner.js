import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, Button, Linking } from 'react-native';
import { BarCodeScanner } from "expo-barcode-scanner";

export default function Scanner(){
    const [hasPermossion, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() =>{
        (async () =>{
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const copyToClipboard = () => {
        Clipboard.setString('hello world');
      };
    
      const fetchCopiedText = async () => {
        const text = await Clipboard.getString();
        setCopiedText(text);
      };

    const handleBarCodeScanned = ({type, data}) => {
        setScanned(true);    
        //alert('Bar Code With Type ${type} and data ${Linking.openURL(${data})} has been scanned');
         Linking.openURL(data);
    };

    if(hasPermossion === null){
        return <Text>Requesting for Camera Permission</Text>
    }
    if(hasPermossion === false){
        return <Text>No Access to Camera</Text>
    }

    return(
        <View style={styles.container}>
            <BarCodeScanner 
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style = {StyleSheet.absoluteFillObject}
            />
            {scanned && <Button color="green" title="Tap to Scan Again" onPress={() => setScanned(false)}/>}
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start'
    },
})
