import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React ,{useState}from 'react'
import SearchBar from '../components/SearchBar'
import useResult from '../hooks/useResult'
import ResultsList from '../components/ResultsList'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function SearchScreen() {

    const [searchApi,results] = useResult()
    const [term, setTerm] = useState('')


    console.log(results);

    const filterResultByPrice = (price) =>{
        return results.filter((result) =>{
            return result.price === price
        })
    }

  return (
    <ScrollView style={styles.countainer} showsVerticalScrollIndicator={false}>
      <SearchBar
        term={term}
        onTermChance={setTerm}
        onTermSubmit={()=>searchApi(term)}
      ></SearchBar>
      <ResultsList title='Ucuz' results={filterResultByPrice('₺')}></ResultsList>
      <ResultsList title='Orta' results={filterResultByPrice('₺₺')}></ResultsList>
      <ResultsList title='Pahalı' results={filterResultByPrice('₺₺₺')}></ResultsList>
    
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    countainer:{
      flex:1,
    },
    title:{
        color:'black',
        fontSize:23
    }
})