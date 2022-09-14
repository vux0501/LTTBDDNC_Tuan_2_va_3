import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Button} from 'react-native';


export default function App() {
  return (
    <ImageBackground source={require('./assets/background.png')} resizeMode="cover" style={styles.image}>
    <View style={styles.container}>
      
    <View style={styles.logo_container} >
        <Image
          style={styles.logo}
          source={require('./assets/lock.png')}
        />
        </View>

        <View style={styles.title_container} >
        <Text style={styles.title} >
            FORGET PASSWORD
        </Text>
        </View>

        <View style={styles.des_container} >
        <Text style={styles.des} >
        Provide your account’s email for which you want to reset your password
        </Text>
        </View>

        
        <View style={styles.mail_container} >
            <TextInput style={styles.mail} inlineImageLeft='search_icon'>

            </TextInput>
            
        </View>

        <View style={styles.end_container} >
        <Text style={styles.end} >
        HOW WE WORK?
        </Text>
        </View>

        <View style={{width:300, paddingTop:20}}>
        <Button title='NEXT' color={'yellow'} />
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
    justifyContent: "center"
  },
  logo_container: {

  },
  title_container:{
    width:190,
    paddingTop: 40,
   
    
  },
  title:{
    fontSize: 30,
    textAlign:'center',
    fontWeight: '600'
    
  },
  logo:{

  },
  des_container:{
    width: 370,
    paddingTop: 50
  },
  des:{
    fontWeight: '700',
    textAlign: 'center'
  },
  mail_container:{
    paddingTop: 20,
  },
  mail:{
    borderColor: 'black',
    borderWidth: 1,
    width: 300,
    paddingLeft: 30
  },
  end_container:{
    paddingTop: 20
  },
  end:{
    fontWeight:'700',
    fontSize:30
  }
  
});