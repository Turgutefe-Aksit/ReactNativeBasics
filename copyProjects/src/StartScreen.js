import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function startScreen() {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.app}>
            <Button title='retorant' onPress={()=> navigation.navigate("StartRestorant",{})}>

            </Button>
      </View>
      <View style={styles.app}>
            <Button title='FireBase Login App' onPress={()=> navigation.navigate("StartFireBase",{})}>

            </Button>
      </View>
      <View style={styles.app}>
            <Button title='Blog App' onPress={()=> navigation.navigate("IndexScreen",{})}>

            </Button>
      </View>

    </View>
    
  )
}

const styles = StyleSheet.create({
  
  container:{
    flex :1,
    alignItems:'center',
    justifyContent:'center',
  },
  app:{
    margin:20,
    width: '50%',
  }
  
});