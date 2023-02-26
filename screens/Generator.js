import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function Generator(){
    const [input, setInput] = useState('');
    const [qrValue, setQrValue] = useState('');

     const copyToClipboard = () => {
         ClipboardStatic.setString('hello world');
       };
    
      const fetchCopiedText = async () => {
        const text = await ClipboardStatic.getString();
        setCopiedText(text);
      };

    return(
        <View style={styles.column}>
            <QRCode
                value={qrValue ?qrValue: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"}
                size = {405}
                color='black'
                backgroundColor='white'
            ></QRCode>
            <TextInput
                style={styles.input}
                placeholder="Input text for QR-code"
                onChangeText={text =>{
                    setInput(text)
                }}
            ></TextInput>           
            <TouchableOpacity style={styles.button} onPress={()=>{setQrValue(input)}}>
                <Text style={styles.text}>Generate QR-code</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    column: {
        flexDirection: 'column',
        marginTop: 10
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        backgroundColor: `#008000`
    },
    text: {
        color: `#fff8dc`,
    }
  });