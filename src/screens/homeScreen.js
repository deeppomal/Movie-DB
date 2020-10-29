import React, { Component } from 'react';
import { Container, Header, Tab, Tabs,Left,Right,Title,Body, Content } from 'native-base';

import Tab1 from './tabs/tabOne';
import Tab2 from './tabs/tabTwo';


export default class HomeScreen extends Component {

  render() {
    return (
      <Container>
         <Header hasTabs>
         
          <Body style={{alignItems:'center',justifyContent:'center'}}>
            <Title style={{fontSize:22}}>Discover</Title>
          </Body>
          
        </Header>
        <Tabs scrollWithoutAnimation={true} locked={true}>
          <Tab heading="Movies">
            <Tab1 navigation={this.props.navigation}/>
          </Tab>
          <Tab heading="TV Shows">
            <Tab2 navigation={this.props.navigation}/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}