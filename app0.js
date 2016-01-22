/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
var dataSource={"dataSource": [{
  "icon": "http://images4.c-ctrip.com/target/tuangou/039/628/491/902a4b3a7c7245f19e9f3538b4813cf9_225_168_m4.jpg",
  "hotelName": "上海衡山妈勒戈壁大酒店",
  "subtitle": "商务高级房＋双早＋精致双人下午茶",
  "price": "¥902",
  "oprice": "¥1128",
  "soldCount": "1225",
  "score": "4.3分"
},
{
  "icon": "http://images4.c-ctrip.com/target/tuangou/039/628/491/902a4b3a7c7245f19e9f3538b4813cf9_225_168_m4.jpg",
  "hotelName": "上海衡山妈勒戈壁大酒店",
  "subtitle": "商务高级房＋双早＋精致双人下午茶",
  "price": "¥902",
  "oprice": "¥1128",
  "soldCount": "1225",
  "score": "4.3分"
},
{
  "icon": "http://images4.c-ctrip.com/target/tuangou/039/628/491/902a4b3a7c7245f19e9f3538b4813cf9_225_168_m4.jpg",
  "hotelName": "上海衡山妈勒戈壁大酒店",
  "subtitle": "商务高级房＋双早＋精致双人下午茶",
  "price": "¥902",
  "oprice": "¥1128",
  "soldCount": "1225",
  "score": "4.3分"
},
{
  "icon": "http://images4.c-ctrip.com/target/tuangou/039/628/491/902a4b3a7c7245f19e9f3538b4813cf9_225_168_m4.jpg",
  "hotelName": "上海衡山妈勒戈壁大酒店",
  "subtitle": "商务高级房＋双早＋精致双人下午茶",
  "price": "¥902",
  "oprice": "¥1128",
  "soldCount": "1225",
  "score": "4.3分"
},
{
  "icon": "http://images4.c-ctrip.com/target/tuangou/039/628/491/902a4b3a7c7245f19e9f3538b4813cf9_225_168_m4.jpg",
  "hotelName": "上海衡山妈勒戈壁大酒店",
  "subtitle": "商务高级房＋双早＋精致双人下午茶",
  "price": "¥902",
  "oprice": "¥1128",
  "soldCount": "1225",
  "score": "4.3分"
},
{
  "icon": "http://images4.c-ctrip.com/target/tuangou/039/628/491/902a4b3a7c7245f19e9f3538b4813cf9_225_168_m4.jpg",
  "hotelName": "上海衡山妈勒戈壁大酒店",
  "subtitle": "商务高级房＋双早＋精致双人下午茶",
  "price": "¥902",
  "oprice": "¥1128",
  "soldCount": "1225",
  "score": "4.3分"
},
{
  "icon": "http://images4.c-ctrip.com/target/tuangou/039/628/491/902a4b3a7c7245f19e9f3538b4813cf9_225_168_m4.jpg",
  "hotelName": "上海衡山妈勒戈壁大酒店",
  "subtitle": "商务高级房＋双早＋精致双人下午茶",
  "price": "¥902",
  "oprice": "¥1128",
  "soldCount": "1225",
  "score": "4.3分"
},
{
  "icon": "http://images4.c-ctrip.com/target/tuangou/039/628/491/902a4b3a7c7245f19e9f3538b4813cf9_225_168_m4.jpg",
  "hotelName": "上海衡山妈勒戈壁大酒店",
  "subtitle": "商务高级房＋双早＋精致双人下午茶",
  "price": "¥902",
  "oprice": "¥1128",
  "soldCount": "1225",
  "score": "4.3分"
},
{
  "icon": "http://images4.c-ctrip.com/target/tuangou/039/628/491/902a4b3a7c7245f19e9f3538b4813cf9_225_168_m4.jpg",
  "hotelName": "上海衡山妈勒戈壁大酒店",
  "subtitle": "商务高级房＋双早＋精致双人下午茶",
  "price": "¥902",
  "oprice": "¥1128",
  "soldCount": "1225",
  "score": "4.3分"
},
{
  "icon": "http://images4.c-ctrip.com/target/tuangou/039/628/491/902a4b3a7c7245f19e9f3538b4813cf9_225_168_m4.jpg",
  "hotelName": "上海衡山妈勒戈壁大酒店",
  "subtitle": "商务高级房＋双早＋精致双人下午茶",
  "price": "¥902",
  "oprice": "¥1128",
  "soldCount": "1225",
  "score": "4.3分"
},
{
  "icon": "http://images4.c-ctrip.com/target/tuangou/039/628/491/902a4b3a7c7245f19e9f3538b4813cf9_225_168_m4.jpg",
  "hotelName": "上海衡山妈勒戈壁大酒店",
  "subtitle": "商务高级房＋双早＋精致双人下午茶",
  "price": "¥902",
  "oprice": "¥1128",
  "soldCount": "1225",
  "score": "4.3分"
},
{
  "icon": "http://images4.c-ctrip.com/target/tuangou/039/628/491/902a4b3a7c7245f19e9f3538b4813cf9_225_168_m4.jpg",
  "hotelName": "上海衡山妈勒戈壁大酒店",
  "subtitle": "商务高级房＋双早＋精致双人下午茶",
  "price": "¥902",
  "oprice": "¥1128",
  "soldCount": "1225",
  "score": "4.3分"
},
{
  "icon": "http://images4.c-ctrip.com/target/tuangou/039/628/491/902a4b3a7c7245f19e9f3538b4813cf9_225_168_m4.jpg",
  "hotelName": "上海衡山妈勒戈壁大酒店",
  "subtitle": "商务高级房＋双早＋精致双人下午茶",
  "price": "¥902",
  "oprice": "¥1128",
  "soldCount": "1225",
  "score": "4.3分"
},{
  "icon": "http://images4.c-ctrip.com/target/tuangou/039/628/491/902a4b3a7c7245f19e9f3538b4813cf9_225_168_m4.jpg",
  "hotelName": "上海衡山妈勒戈壁大酒店",
  "subtitle": "商务高级房＋双早＋精致双人下午茶",
  "price": "¥902",
  "oprice": "¥1128",
  "soldCount": "1225",
  "score": "4.3分"
},
{
  "icon": "http://images4.c-ctrip.com/target/tuangou/039/628/491/902a4b3a7c7245f19e9f3538b4813cf9_225_168_m4.jpg",
  "hotelName": "上海衡山妈勒戈壁大酒店",
  "subtitle": "商务高级房＋双早＋精致双人下午茶",
  "price": "¥902",
  "oprice": "¥1128",
  "soldCount": "1225",
  "score": "4.3分"
},
{
  "icon": "http://images4.c-ctrip.com/target/tuangou/039/628/491/902a4b3a7c7245f19e9f3538b4813cf9_225_168_m4.jpg",
  "hotelName": "上海衡山妈勒戈壁大酒店",
  "subtitle": "商务高级房＋双早＋精致双人下午茶",
  "price": "¥902",
  "oprice": "¥1128",
  "soldCount": "1225",
  "score": "4.3分"
},
{
  "icon": "http://images4.c-ctrip.com/target/tuangou/039/628/491/902a4b3a7c7245f19e9f3538b4813cf9_225_168_m4.jpg",
  "hotelName": "上海衡山妈勒戈壁大酒店",
  "subtitle": "商务高级房＋双早＋精致双人下午茶",
  "price": "¥902",
  "oprice": "¥1128",
  "soldCount": "1225",
  "score": "4.3分"
},
{
  "icon": "http://images4.c-ctrip.com/target/tuangou/039/628/491/902a4b3a7c7245f19e9f3538b4813cf9_225_168_m4.jpg",
  "hotelName": "上海衡山妈勒戈壁大酒店",
  "subtitle": "商务高级房＋双早＋精致双人下午茶",
  "price": "¥902",
  "oprice": "¥1128",
  "soldCount": "1225",
  "score": "4.3分"
},
{
  "icon": "http://images4.c-ctrip.com/target/tuangou/039/628/491/902a4b3a7c7245f19e9f3538b4813cf9_225_168_m4.jpg",
  "hotelName": "上海衡山妈勒戈壁大酒店",
  "subtitle": "商务高级房＋双早＋精致双人下午茶",
  "price": "¥902",
  "oprice": "¥1128",
  "soldCount": "1225",
  "score": "4.3分"
},
{
  "icon": "http://images4.c-ctrip.com/target/tuangou/039/628/491/902a4b3a7c7245f19e9f3538b4813cf9_225_168_m4.jpg",
  "hotelName": "上海衡山妈勒戈壁大酒店",
  "subtitle": "商务高级房＋双早＋精致双人下午茶",
  "price": "¥902",
  "oprice": "¥1128",
  "soldCount": "1225",
  "score": "4.3分"
},
{
  "icon": "http://images4.c-ctrip.com/target/tuangou/039/628/491/902a4b3a7c7245f19e9f3538b4813cf9_225_168_m4.jpg",
  "hotelName": "上海衡山妈勒戈壁大酒店",
  "subtitle": "商务高级房＋双早＋精致双人下午茶",
  "price": "¥902",
  "oprice": "¥1128",
  "soldCount": "1225",
  "score": "4.3分"
},
{
  "icon": "http://images4.c-ctrip.com/target/tuangou/039/628/491/902a4b3a7c7245f19e9f3538b4813cf9_225_168_m4.jpg",
  "hotelName": "上海衡山妈勒戈壁大酒店",
  "subtitle": "商务高级房＋双早＋精致双人下午茶",
  "price": "¥902",
  "oprice": "¥1128",
  "soldCount": "1225",
  "score": "4.3分"
},
{
  "icon": "http://images4.c-ctrip.com/target/tuangou/039/628/491/902a4b3a7c7245f19e9f3538b4813cf9_225_168_m4.jpg",
  "hotelName": "上海衡山妈勒戈壁大酒店",
  "subtitle": "商务高级房＋双早＋精致双人下午茶",
  "price": "¥902",
  "oprice": "¥1128",
  "soldCount": "1225",
  "score": "4.3分"
},
{
  "icon": "http://images4.c-ctrip.com/target/tuangou/039/628/491/902a4b3a7c7245f19e9f3538b4813cf9_225_168_m4.jpg",
  "hotelName": "上海衡山妈勒戈壁大酒店",
  "subtitle": "商务高级房＋双早＋精致双人下午茶",
  "price": "¥902",
  "oprice": "¥1128",
  "soldCount": "1225",
  "score": "4.3分"
},
{
  "icon": "http://images4.c-ctrip.com/target/tuangou/039/628/491/902a4b3a7c7245f19e9f3538b4813cf9_225_168_m4.jpg",
  "hotelName": "上海衡山妈勒戈壁大酒店",
  "subtitle": "商务高级房＋双早＋精致双人下午茶",
  "price": "¥902",
  "oprice": "¥1128",
  "soldCount": "1225",
  "score": "4.3分"
},
{
  "icon": "http://images4.c-ctrip.com/target/tuangou/039/628/491/902a4b3a7c7245f19e9f3538b4813cf9_225_168_m4.jpg",
  "hotelName": "上海衡山妈勒戈壁大酒店",
  "subtitle": "商务高级房＋双早＋精致双人下午茶",
  "price": "¥902",
  "oprice": "¥1128",
  "soldCount": "1225",
  "score": "4.3分"
}]}

var Header = require('./lib/header');
var Product = require('./lib/product');
var Detail = require('./page/detail');
var {
  AppRegistry,
  StyleSheet,
  Text,
  DataSource,
  TouchableHighlight,
  ListView,
  ScrollView,
  Image,
  NavigatorIOS,
  View,
} = React;



var HistoryList = React.createClass({
  renderItem(data){
      var self = this;
      return (
        <TouchableHighlight onPress={this.detailHandler.bind(this.props.app)}>
        <View>
         <Product dataSource={data}/>
         </View>
        </TouchableHighlight>
      )
  },
  detailHandler(){
    this.props.app.props.navigator.push({
      title: 'hawai hotel Detail Info',
      component: Detail,
      passProps: {
          product: {
            name: 'Hotel',
            price: '12yuen',
            score: '1.1',
            address: 'sdfasd'
          }
      }
    })
  },
  getInitialState(){
    return {
      dataSource: null
    }
  },
// render: function() {
//   return (
//     <ListView
//       dataSource={this.state.dataSource}
//       renderRow={this.renderItem}
//     />
//   );
// },
  // render (){
  //     alert(this.state.dataSource);
  //     return (
  //       <ListView dataSource={this.state.dataSource}
  //       renderRow={this.renderItem}/>
  //     )
  // },
  render(){
    return (
      <ScrollView style={styles.scrollView} scrollEnabled={true}>
        {this.props.dataSource.map(this.renderItem)}
      </ScrollView>
    )
  }
});
var Tuan = React.createClass({
  render () {
    var data = this.state.dataSource,
        historyList = data ? <HistoryList dataSource={data} app={this}/>
                      : <Text style={styles.noResult}>There is no historyList</Text>
    return (
      <View style={styles.container}>
         <Header title="浏览历史"/>
         {historyList}
      </View>
    );
  },
  getInitialState(){
    return {
      dataSource: null
    }
  },
  componentDidMount(){
      this.getHotelListData();
  },
  getHotelListData(){
      this.setState({
        dataSource: dataSource.dataSource
      })
  }
  // getHotelListData(){
  //   var self = this,
  //       xhr = new XMLHttpRequest(),
  //       url = 'c?a='+Math.random();
  //
  //   xhr.onload=function(){
  //     var data = JSON.parse(xhr.responseText);
  //     self.setState({dataSource: data.dataSource});
  //   }
  //   xhr.open('GET', url);
  //   xhr.send(null);
  // }
});
var styles = StyleSheet.create({
  container: {

  },
  noResult: {
    marginTop: 200,
    color: '#ff0000',
    fontSize: 12
  },
  scrollView: {height:600}
});

var App = React.createClass({
  render(){
    return (
      <NavigatorIOS style={{flex:1,marginTop: 48,backgroundColor: '#ff0000'}} initialRoute={{
        title: 'Home',
        component: Tuan
      }}/>
    )
  }
})
AppRegistry.registerComponent('Test', () => App);
