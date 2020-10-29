import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs,Text ,Thumbnail, View, Right} from 'native-base';
import {StyleSheet,Image,TouchableOpacity} from 'react-native';
import {imageBaseUrl} from '../config/rest_config';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class MovieItem extends Component {

constructor(props){
    super(props)
    this.data=props.data
}
  render() {
    const { navigation } = this.props;
    console.log(this.data.title)
    return (
        <Content style={styles.content}>
            <TouchableOpacity onPress={() => navigation.navigate('movieDetails',{
                data:this.data

            })}>
            <View style={styles.itemView}>
                <Image resizeMethod='resize' style={styles.imageS} source={{ uri: imageBaseUrl+this.data.poster_path }} />
                <View  style={styles.contentView}>
                    <Text numberOfLines={1} style={styles.title}>{this.data.title}</Text>
                        <View style={styles.voteView}>
                            <MaterialCommunityIcons 
                                name={'thumb-up'} 
                                size={18} />
                            <Text style={styles.votesText}>{this.data.vote_average}</Text>
                    </View>
                </View>
                <Text  note numberOfLines={2}>{this.data.overview}</Text>
            </View>
            </TouchableOpacity>
        </Content>
     
    );
  }
}

const styles = StyleSheet.create({
    imageS :{
        width:'100%',
        height:200,
        resizeMode:'cover'
       
    },
    content:{
        padding:16
    },
    itemView:{
        marginBottom:16,
        flexDirection:'column'
    },
    title :{
        fontSize:20,
        
    },
    contentView : {
        flexDirection:'row',
        marginTop:16,
        justifyContent:'space-between'
    },
    votesText : {
        fontSize:20,
        marginStart:10
    },
    voteView:{
        flexDirection:'row',
        alignItems:'center'
    }
})