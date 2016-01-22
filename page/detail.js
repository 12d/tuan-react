
'use strict';
var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  DataSource,
  TouchableHighlight,
  ListView,
  ScrollView,
  Image,
  View,
  ActivityIndicatorIOS
} = React;

var styles = StyleSheet.create({
  container: {
    marginTop: 165
  }
});
var Detail = React.createClass({
  detailHandler (e){
      console.log(this);
  },
  render (){
    return (
        <View style={{marginTop: 100}}>
          <ActivityIndicatorIOS/>
        </View>
    )
  }
});

module.exports = Detail;
