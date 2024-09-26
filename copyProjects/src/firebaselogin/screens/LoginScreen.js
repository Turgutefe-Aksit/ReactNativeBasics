import { StyleSheet, Text, View,KeyboardAvoidingView, TextInput, TouchableOpacity, Alert } from 'react-native'
import React,{useState,useEffect} from 'react'
import { auth } from '../../../firebase'
import { useNavigation } from '@react-navigation/native'

export default function LoginScreen() {

    const navigation = useNavigation();

    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(()=>{
        auth.onAuthStateChanged(user =>{
            if(user){
                navigation.navigate("FireBaseHome")
            }
        })
    },[])

    const handleSingUp = () =>{
        auth.createUserWithEmailAndPassword(mail,password).
        then(userCredentails => {
            const user = userCredentails.user;
            console.log(user.email)
        }).
        catch(e=> Alert.alert(e.message))
    }

    const handleLogin = () =>{
        auth.signInWithEmailAndPassword(mail,password).
        then(userCredentails => {
            const user = userCredentails.user;
            console.log("Login detected: ",user.email)
        }).
        catch(e=> Alert.alert(e.message))
    }

  return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <View style={styles.inputsContainer}>
            <TextInput 
            placeholder='Email' 
            style={styles.inputs} 
            value={mail} 
            onChangeText={text => setMail(text)}/>
            
            <TextInput 
            placeholder='Password' 
            style={styles.inputs}
            secureTextEntry 
            value={password} 
            onChangeText={text => setPassword(text)}/>
        </View>

        <View style={styles.buttonsContainer}>
            <TouchableOpacity 
            style={styles.buttons}
            onPress={handleLogin}>
                <Text style={[styles.text,styles.outlinebuttontext]}>
                    Login
                </Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={[styles.buttons,styles.outlinebutton]}
            onPress={handleSingUp}>
                <Text style={styles.text}>
                    Sing Up
                </Text>
            </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
   
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonsContainer:{
        flexDirection:'row',
        margin: 10,
    },
    buttons:{
        padding:15,
        marginHorizontal: 20,
        width:100,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"blue",
        borderRadius:10,
    },
    text:{
        fontSize:16,
        fontWeight:'bold',
        color: "black"
    },
    inputs:{
        backgroundColor:"white",
        margin:15,
        paddingVertical:20,
        borderRadius:10,
        paddingLeft:20
    },
    inputsContainer:{
        marginBottom:100,
        width:"100%",    

    },
    outlinebutton:{
        backgroundColor:"white",
    },
    outlinebuttontext:{
        color:"white",
    },
    
})