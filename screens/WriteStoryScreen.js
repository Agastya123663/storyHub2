import React from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native';
import db from "../config"
import firebase from "firebase"

export default class WriteStoryScreen extends React.Component{
    constructor(){
        super();
        this.state={
            title:"",
            author:"",
            story : ""
        }
    }

    submitStory=async()=>{
        db.collection("bookDetails").add({
            "title" : this.state.title,
            "story" : this.state.story,
            "author" : this.state.author
        })
    }
    render(){
        return(
            <View style={{backgroundColor:"#e8beeb"}}>
                <View>
                    <Text style={{textAlign:"center",fontSize:40,color:"white"}}>Story Hub</Text>
                </View>

                <View>
                    <TextInput onChangeText={text=>{
                        this.setState({title:text})}} value={this.state.title} placeholder="Story Title" style={[styles.inputBox,{marginLeft:650,marginTop:80, width:200,height:50}]}></TextInput>
                </View>


                <View>
                    <TextInput onChangeText={text=>{
                        this.setState({author:text})}} value={this.state.author} placeholder="Author" style={[styles.inputBox,{marginLeft:650,marginTop:70, width:200,height:50}]}></TextInput>
                </View>


                <View>
                    <TextInput onChangeText={text=>{
                        this.setState({story:text})}} value={this.state.story} placeholder="Write your story" style={[styles.inputBox,{marginLeft:450,marginTop:70, width:600,height:200}]}></TextInput>
                </View>

                <View>
                    <TouchableOpacity onPress={this.submitStory} style={{borderRadius:50,backgroundColor:"yellow",borderWidth:1,width:100,marginLeft:1200,marginTop:-20}}>
                        <Text style={{fontSize:25,textAlign:"center"}}>Submit</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputBox:{
        alignItems:"center",
        textAlign:"center",
        textDecorationColor:"black",
        backgroundColor:"white",
        fontSize:20,
        borderWidth:2
    }
})