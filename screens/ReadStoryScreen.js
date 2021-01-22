import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ReadStoryScreen extends React.Component{
    render(){
        return(
            <View style={{backgroundColor:"#e8beeb"}}>
                <Text style={{textAlign:"center",fontSize:30,marginTop:250}}>Read your story</Text>
            </View>
        )
    }
}