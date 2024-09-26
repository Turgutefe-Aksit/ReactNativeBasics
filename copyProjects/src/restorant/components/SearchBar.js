import { StyleSheet, Text, View,Button, TextInput } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';



export default function SearchBar({term,onTermChance,onTermSubmit}) {
  return (
    
    <View  style = {styles.container}>
      <Ionicons name="search-outline" size={30}  color="black" />
      <TextInput style = {styles.input}
      placeholder='Ara'
      value={term}
      onChangeText={onTermChance}
      onEndEditing={onTermSubmit}>
      

      
      </TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        margin:15,
        flexDirection:'row',
        backgroundColor:'lightgrey',
        alignItems: 'center',
        borderRadius:20,
        padding:10
        
      },
      search:{
        borderWidth:20
      },
      input:{
        borderRadius:20,
        width: '50%',
        height:50,
        paddingLeft:20,
        fontSize:20,
        flex:1
      }
})