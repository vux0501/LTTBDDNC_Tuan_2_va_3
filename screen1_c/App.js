import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <ImageBackground source={require('./assets/background.png')} resizeMode="cover" style={styles.image}>
    <View style={styles.container}>
      
    <View style={styles.logo_container} >
        <Text style={styles.logo} >
            CODE
        </Text>
        </View>

        <View style={styles.title_container} >
        <Text style={styles.title} >
            VERIFICATION
        </Text>
        </View>

        <View style={styles.des_container} >
        <Text style={styles.des} >
        Enter ontime password sent on
        ++849092605798
        </Text>
        </View>

        
        <View style={styles.code_container} >
            <TextInput maxLength={1} style={styles.code}>
            </TextInput>
            <TextInput maxLength={1} style={styles.code}>
            </TextInput>
            <TextInput maxLength={1} style={styles.code}>
            </TextInput>
            <TextInput maxLength={1} style={styles.code}>
            </TextInput>
            <TextInput maxLength={1} style={styles.code}>
            </TextInput>
            <TextInput maxLength={1} style={styles.code}>
            </TextInput>
        </View>

        <View style={{width:300, paddingTop:30}}>
        <Button title='VERIFY CODE' color={'yellow'} />
        </View>
      
      <StatusBar style="auto" />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 150,
    flex: 1,
    alignItems: 'center',
    
   

  },
  image: {
    flex: 1,
    justifyContent: 'center'
  },
  logo_container: {

  },
  title_container:{
    width:190,
    paddingTop: 40,
   
    
  },
  title:{
    fontSize: 25,
    textAlign:'center',
    fontWeight: '600'
    
  },
  logo:{
    textAlign: 'center',
    fontSize: 50,
    fontWeight: '700'
  },
  des_container:{
    width: 370,
    paddingTop: 50
  },
  des:{
    fontWeight: '700',
    textAlign: 'center'
  },
  code_container:{
    paddingTop: 20,
    flexDirection: 'row',
    width: 200,
    justifyContent: 'center'
    
  },
  code:{
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    width: 40,
    height: 40,
    textAlign: 'center'

  },
});
