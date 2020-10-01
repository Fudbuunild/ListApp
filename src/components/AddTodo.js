import React,{useState} from 'react'
import {View,StyleSheet,TextInput,Alert,Keyboard} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import {THEME} from "../theme"

export const AddTodo = ({onSubmit}) => {

    const [value,setValue] = useState('')

    const pressHandelr = () =>{
     if(value.trim()){
         onSubmit(value)
         setValue('')
         Keyboard.dismiss()
     }else{
         Alert.alert('Name write is not null')
     }
    }

    return (
        <View style={styles.block}>
            <TextInput style={styles.input}
            onChangeText={setValue}
            value={value}
            placeholder="Write name of"
            autoCorrect={false}
            autoCapitalize='none'
            />
            <AntDesign.Button onPress={pressHandelr} name="pluscircleo">
                Add
            </AntDesign.Button>
        </View>
    )
}

const styles = StyleSheet.create({
    block:{
     flexDirection:'row',
     justifyContent:'space-between',
     alignItems:'center',
     marginBottom:15
    },
    input:{
       padding:10,
       width:'70%',
       borderStyle:'solid',
       borderBottomWidth:2,
       borderBottomColor:THEME.MAIN_COLOR
    }
})
