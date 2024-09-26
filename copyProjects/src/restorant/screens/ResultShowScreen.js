import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import yelp from '../api/yelp';

export default function ResultShowScreen({route}) {
    const id = route.params.id;
    const [result, setResult] = useState(null)
    const getResult = async(id) =>{
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(() =>{
        getResult(id);
    },[]);
    if(!result){
        return null
    }
  return (
    <View>
      <Text>{result.name}</Text>
      <Text>{result.phone}</Text>
      <Image 
            style={styles.img}  
            source={result.image_url ? {uri: result.image_url}:null}></Image>
      
      {/* <FlatList
        data={result.image_url}
        renderItem={({item}) => { 
            return (
                <Image style={{width:50,height:50}}  
                source={{uri: item} }/>
            );
        }}
        /> */}

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
})