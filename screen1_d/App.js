import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <ImageBackground source={require('./assets/background.png')} resizeMode="cover" style={styles.image}>
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={{fontSize: 30, fontWeight: '700'}}>LOGIN</Text>
      </View>
      <View style={styles.view2}>
        <TextInput placeholder='Email' style={{borderWidth:1, width: 300, height: 40, paddingLeft: 20, backgroundColor:'grey'}} ></TextInput>
        <TextInput placeholder='Password' style={{borderWidth:1, width: 300, height: 40, marginTop: 20, paddingLeft: 20, backgroundColor:'grey'}}></TextInput>
      </View>
      <View style={styles.view3}>
        <TouchableOpacity activeOpacity={0.5} style={{backgroundColor: '#E53935', width: 250, height: 35, justifyContent:'center',alignItems:'center'}}>
          <Text style={{textAlign:'center', fontSize:25, fontWeight:'700', color:'white'}}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.view4}>
        
      </View>
      <View style={styles.view5}>
        
      </View>




      <StatusBar style="auto" />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
   
    
  },
  image: {
    flex: 1,
    justifyContent: 'center'
  },
  view1:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view3:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  view4:{
    flex: 1,
    backgroundColor: 'red',
  },
  view5:{
    flex: 1,
    backgroundColor: 'yellow',
  },
});
