import { StyleSheet, Text, Pressable } from 'react-native';
import React, {useState, useEffect} from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Result from './Result';

export default function Scanner() {

  const [done, setDone] = useState(false)

  const [permission, setPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  function solve(){
    setPermission(true);
    setScanned(true)
    setDone(true)
  }
  

  useEffect(() => {
    if(done){
      return(
        <Result />
      )
    }

    const getPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      if(status == 'granted') setPermission(true);
      else setPermission(false);
    };

    getPermissions();
  },[]);

  const handleBarCodeScanned = ({ type, data }) =>{
    setScanned(true);
    alert(`Bar code Type: ${type} Data${data} successfully scanned`)
    setDone(true)
  }

  if(permission === null){
    return <Text>Requesting camera permission</Text>
  }if(permission === false){
    return <Text>Camera acess denied</Text>
  }

  if(scanned || done){
    return(
        < Result />
    )
  }
  else{
    return (
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={styles.BarCode}
          >
           <Pressable style={styles.Btt} onPress={() => setDone(true)}>
          <Text style={styles.par2}>
            Home
          </Text>
        </Pressable> 
          </BarCodeScanner>
          

      );
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  BarCode: {
      position: 'relative',
      top: 0,
      left: 0,
      bottom: 40,
      right: 0,
      flex: 1,
      alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#1C82AD',
  },
  Btt: {
    position: 'relative',
    alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 50,
        elevation: 3,
        backgroundColor: '#1C82AD',
        maxHeight: '10%',
        flex: 2,
        bottom: 1,
  },

  par2: {
    color: 'white',
    fontSize: 20,
},
});
