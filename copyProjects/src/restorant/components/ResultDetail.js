import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function ResultDetail({result}) {
  return (
    <View style={styles.countainer}>
        <Text style={styles.text}>{result.name}</Text>
        <Text style={styles.text}>{result.rating} Yıldız</Text>
        <Image 
            style={styles.img}  
            source={result.image_url ? {uri: result.image_url}:null}></Image>
      
    </View>
  )
}

const styles = StyleSheet.create({
    countainer:{
        marginLeft:15
    },
    img:{
        width:250,
        height:150,
        borderRadius:20
    },
    text:{
        
        fontSize: 17,
        color: 'black',
    }
})