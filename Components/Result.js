import React, {useState} from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Scanner from "./Scanner";

export default function Result () {

    const [done, setDone] = useState(false)

    if(done){
        return(
            <Scanner />
        )
    }

    return(
        <View style={styles.container}>
            <Text style={styles.par0}>QrCodeScanner</Text>
            <Text style={styles.par}>Made by Guilherme M</Text>
            <Pressable style={styles.button} onPress={() => setDone(true)}>
                <Text style={styles.par2}>
                    Press to scan.
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    par0: {
        color: 'black',
        flex: 1,
        top: '10%',
        fontSize: 40,
    },
    par: {
        color: 'black',
        flex: 2,
        top: '10%',
        fontSize: 30,
    },

    par2: {
        color: 'white',
        fontSize: 20,
    },

    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },

    button:{
        
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#1C82AD',
        maxHeight: '10%',
        flex: 2,
        bottom: '5%',
    }
  });