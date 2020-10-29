import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs,Text ,Thumbnail, View} from 'native-base';
import {StyleSheet,Image,ScrollView} from 'react-native';
import {imageBaseUrl} from '../config/rest_config';

export default class TVDetail extends Component {

constructor(props){
    super(props)
    this.data=props.data
}
  render() {
    const { route,navigation } = this.props;
    const { data} = route.params;
    
    return (
        <ScrollView style={styles.container}>
            <View style={styles.container}>
                <Image resizeMethod='resize' style={styles.image} source={{ uri: imageBaseUrl+data.poster_path }}/>
                <Text style={styles.title}>{data.original_name}</Text>
                <Text note style={styles.overview}>{data.overview}</Text>
                <View style={styles.subtitle1}>
                    <Text style={styles.subtitleText}>Release Date</Text>
                    <Text style={styles.subtitleText}>Avg. rating</Text>
                    <Text style={styles.subtitleText}>Popularity</Text>
                </View>
                <View style={styles.subtitle1}>
                    <Text note>{data.first_air_date}</Text>
                    <Text note>{data.vote_average}</Text>
                    <Text note>{data.popularity}</Text>
                </View>
            </View>
         </ScrollView>
    );
  }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        
    },
    image:{
        width:'100%',
        height:500,
        resizeMode:'stretch'
    },
    title:{
        marginTop:10,
        fontSize:22,
        padding:16,
       
        
    },
    overview:{
        fontSize:16,
        padding:16
        
    },
    subtitle1:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:16
    },
    subtitleText:{
        fontSize:16
    }

})
