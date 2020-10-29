import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Form,View } from 'native-base';
import {Alert, StyleSheet,ActivityIndicator,FlatList} from 'react-native';
import TVItem from '../../component/tvListItem';
import {getTv} from '../../service/tv';

export default class Tab2 extends Component {

  constructor(props)
  {
    super(props)
    this.state={
      isLoading:true,
      tvData:null
    }
  }
  componentDidMount(){
    getTv().then(data => {

    
      this.setState({
        isLoading:false,
        tvData:data
      })
    },error=>{
      Alert.alert("Error",error)
      }
    )
  }
  render() {
    
    
    let tView = this.state.isLoading ? (
      <View style={{alignItems:'center',justifyContent:'center'}}>
        <ActivityIndicator animating={this.state.isLoading}/>
      </View>
    ) : (

      <FlatList
          data={this.state.tvData}
          renderItem={({item}) =>{
              return <TVItem navigation={this.props.navigation}  data={item}
            />
          }}
      
      />
      // <List 

      //   dataArray={this.state.tvData}
      //   renderRow={(item) =>{
      //     return <TVItem navigation={this.props.navigation} data={item}/>
      //   }}
      // />
    )
    return (
      <Container>
        <Content>
          {tView}
        </Content>
      </Container>
    );
  }
}
