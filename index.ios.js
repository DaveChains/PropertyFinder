/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

var React = require('react');
var ReactNative = require('react-native');
var SearchPage = require('./../PropertyFinder/SearchPage');

import{
    AppRegistry
}from "react-native";

export default class PropertyFinder extends React.Component {
    render() {
        return (
            <ReactNative.NavigatorIOS
                style={styles.container}
                initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>

        );
    }
}

var styles = ReactNative.StyleSheet.create({
    text: {
        color : 'black',
        backgroundColor : 'white',
        fontSize : 30,
        margin: 80,
    }
    ,
    container: {
        flex: 1
    }
});

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
