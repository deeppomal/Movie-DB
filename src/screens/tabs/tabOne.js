import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Form,View } from 'native-base';
import {Alert, StyleSheet,ActivityIndicator,FlatList} from 'react-native';
import MovieItem from '../../component/movieListItem';
import {getMovies} from '../../service/movie';

export default class Tab1 extends Component {

  constructor(props)
  {
    super(props)
    this.state={
      isLoading:true,
      movieData:null
    }
  }
  componentDidMount(){
    getMovies().then(data => {
  
      this.setState({
        isLoading:false,
        movieData:data
      })
    },error=>{
      Alert.alert("Error",error)
      }
    )
  }
  
  render() {
   
    let mView = this.state.isLoading ? (
      <View style={{alignItems:'center',justifyContent:'center'}}>
        <ActivityIndicator animating={this.state.isLoading}/>
      </View>
    ) : (

       <FlatList
          data={this.state.movieData}
          renderItem={({item}) =>{
              return <MovieItem navigation={this.props.navigation}  data={item}
            />
          }}
          
      />
      // <List 
      //   dataArray={this.state.movieData}
        // renderRow={(item) =>{
        //   return <MovieItem navigation={this.props.navigation}  data={item}
        //   />
        // }}
        
      // />
    )
    return (
      <View style={{flex:1}}>
        {mView}
      </View>
      // <Container>
      //   <Content>
      //     {mView}
      //   </Content>
      // </Container>
    );
  }
}
