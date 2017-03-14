import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { Nav, Tab } from 'react-native-simple-tab';

export default class sparkClick extends Component {
  constructor() {
    super();

    this.state = {
      page: 0,
    };

    this._onTabChange = this._onTabChange.bind(this);
  }

  _onTabChange(tabIndex) {
    this.setState({ page: tabIndex });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.myPackage}>
          react-native-cross-platform-tab
        </Text>
        <View style={{ flex: 1 }}>
          <Text style={styles.myText}>
            Selected Tab Index
          </Text>
          <Text style={styles.myTabIndex}>
            {this.state.page}
          </Text>
        </View>
        <Nav
          selected={this.state.page}
          onTabChange={this._onTabChange}>
            <Tab name="home"label="Home" />
            <Tab name="heart"label="Favorite" />
            <Tab name="cart"label="Cart" />
            <Tab name="shirt"label="Custom" />
            <Tab name="menu"label="Menu" />
        </Nav>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 40,
  },
  myPackage: {
    flex: 1,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  myText: {
    textAlign: 'center',
  },
  myTabIndex: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

AppRegistry.registerComponent('sparkClick', () => sparkClick);
