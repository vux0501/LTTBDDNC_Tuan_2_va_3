import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Button } from 'react-native';


export default function App() {
  return (
    <ImageBackground source={require('./assets/background.png')} resizeMode="cover" style={styles.image}>
    <View style={styles.container}>
      
        <View style={styles.logo_container} >
        <Image
          style={styles.logo}
          source={require('./assets/circle.png')}
        />
        </View>

        <View style={styles.title_container} >
        <Text style={styles.title} >
            GROW YOUR BUSINESS 
        </Text>
        </View>

        <View style={styles.des_container} >
        <Text style={styles.des} >
        We will help you to grow your business using
        online server 
        </Text>
        </View>

        <View style={styles.button_container} >
          <Button title='LOGIN' color={'yellow'} />
          <Button title='SIGN UP' color={'yellow'} />
        </View>

        <View style={styles.end_container} >
        <Text style={styles.end} >
        HOW WE WORK?
        </Text>
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
    paddingTop: 60,
   
    
  },
  title:{
    fontSize: 30,
    textAlign: 'center'
    
  },
  logo:{
    width: 150,
    height: 150,
  },
  des_container:{
    paddingTop: 50
  },
  des:{
    fontWeight: '700'
  },
  button_container:{
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 200
  },
  end_container:{
    paddingTop: 20
  },
  end:{
    fontWeight:'700',
    fontSize:30
  }
  
});
