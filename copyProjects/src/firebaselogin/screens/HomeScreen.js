import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { auth } from '../../../firebase'
import { useNavigation } from '@react-navigation/native'


export default function HomeScreen() {

    const navigation = useNavigation();

    const handleSingOut = () =>{
        auth.signOut().then(()=>{
            navigation.navigate('StartFireBase');
        })

    }
  return (
    <View>
      <Text>Email: {auth.currentUser?.email}</Text>

      <TouchableOpacity 
            style={styles.buttons}
            onPress={handleSingOut}>
                <Text style={[styles.text,styles.outlinebuttontext]}>
                    Sing Out
                </Text>
            </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    buttons:{
        justifyContent:'center',
        alignItems:'center',
        margin:50, 
    },
    text:{
        fontSize:16,
        fontWeight:'bold',
        color: "black",
        backgroundColor: "white",
        margin:20, 
        padding: 20,
        justifyContent:'center',
        alignItems:'center'
    },
    
})