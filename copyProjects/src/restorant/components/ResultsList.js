import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import ResultDetail from './ResultDetail'
import { useNavigation } from '@react-navigation/native'


export default function ResultsList({title,results}) {

    const navigation = useNavigation()


  return (
    <View style={styles.countainer}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
      
      horizontal
      showsHorizontalScrollIndicator = {false}
      data={results}
      renderItem={({item}) =>{
        return(
            <TouchableOpacity onPress={()=> navigation.navigate("ResultShow",{id:item.id})}>
                <ResultDetail result = {item}></ResultDetail>
            </TouchableOpacity>
        )
      }}></FlatList>
    
    </View>
  )
}

const styles = StyleSheet.create({
    countainer:{
        
    },
    title:{
        marginBottom :5,
        marginLeft :15,
        fontSize: 25,
        fontWeight:'bold',
        color:'black'
        
    },
})