
'use strict';
var React = require('react-native');
var Stars = require('../lib/stars');
var styles = require('../css/styles');
var Review = require('../com/review');
var {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  ScrollView,
  ListView,
  ActivityIndicatorIOS,
  AsyncStorage,
  View,
} = React;
var COMMENTS_DATA_KEY = 'COMMENTS_DATA';
var config = {
    hotelId: 662485,
    commentsAjax: 'http://m.ctrip.com/restapi/soa2/10101/json/CommentListSearch?hotelId=',
}
Array.from = function(){
    return Array.prototype.apply(null, [arguments])
}
class Page extends React.Component {
    componentDidMount(){
        
        // console.log(this.props.navigator);
    }
    componentWillMount(){
        this.pageIdx = 1;
        this.getComments(this.pageIdx);
    }
    constructor(){
        this.hotelId = config.hotelId;
        this.rawData = [];
        this.dataSource =  new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        })  
    }
    getItemStorageKey(){
        //return Array.from(arguments).join('_');
        return Array.prototype.join.call(arguments, '_');
    }
    getCommentsFromCache(page, callback){
        var self = this;
        AsyncStorage.getItem(COMMENTS_DATA_KEY).then((val)=>{
            var rs = val && JSON.parse(val)[self.getItemStorageKey(self.hotelId, page)];

            callback && callback(rs);    
        })
    }
    getComments(page){
        var self = this;
        this.getCommentsFromCache(page,(rs)=>{
            if(rs){
                self.updateStatus(rs);
            }else{
                self.requestComments(page);
            }
        });
    }
    requestComments(page, callback){
        var self = this;
        // self.showLoading();
        fetch(config.commentsAjax+self.hotelId+'&pageIdx='+page)
        .then((rs)=>{

                //var json = JSON.parse(rs._bodyText);
            // var json2 = eval('('+rs._bodyText+')')
            // debugger
            //
            // console.log(json2.servPt);
            return rs.json()
        })
        .then((rs)=>{
            self.updateStatus(rs);
            self.updateStorage(rs, [self.hotelId, page]);
            
        })
        .done()
    }
    updateStorage(rs, keys){
        var keyStr = this.getItemStorageKey.apply(this, keys);
        var data = AsyncStorage.getItem(COMMENTS_DATA_KEY).then((val)=>{
            val = val || {}
            val[keyStr] = rs;
            AsyncStorage.setItem(COMMENTS_DATA_KEY, JSON.stringify(val));
        })
    }
    updateStatus(rs){
        var self = this;

        self.pageIdx++;
        self.rawData = self.rawData.concat(rs.cmts);
        self.setState({
            dataSource: self.dataSource.cloneWithRows(self.rawData),
            reviewData: rs
        });
    }
    renderReviewItem(data){
//         return (
// <Text>111</Text>
//             )
        return (
            <Review itemData={data}/>
        )
    }
    renderHeader(){
        var data = this.state.reviewData;
        return (
            <View>
                <View style={[styles.mainComments, styles.commentItem]}>
                    <View style={styles.commentsRow}>
                        <Text style={styles.labelCls}>总评</Text>
                        <Stars stars={data.custPt} style={styles.starCls}/>
                        <Text style={[styles.scoreCls]}>{data.custPt}分</Text>
                        <Text style={styles.recommendCls}>{parseInt(data.percent*100)}%用户推荐</Text>
                    </View>
                    <View style={styles.commentsRow}>
                        <Text style={styles.referItem}>卫生：{data.ratPt}</Text>
                        <Text style={styles.referItem}>环境：{data.raatPt}</Text>
                        <Text style={styles.referItem}>服务：{data.servPt}</Text>
                        <Text style={styles.referItem}>设施：{data.faclPt}</Text>
                    </View>
                </View>
                <Text style={{fontWeight:'bold', color: '#333', padding: 10,marginBottom:10}}>用户点评</Text>
            </View>
                    
        )
    }
    onEndReachedHander(){
        this.getComments(this.pageIdx);    
    }
    // renderFooter(){
    //     return (
    //         <ActivityIndicatorIOS size="large"/>
    //     )
    // }
    renderFooter(){
        return (
            <Text>Loading</Text>
        )
    }
    // render(){
    //     return (
    //         <Text style={{paddingTop:100}}>111</Te>
    //     )
    // }
    render(){
        var self = this,
            renderStr = this.state ? 
                <ListView ref="listWrap" pageSize="5" renderFooter={this.renderFooter}  onEndReachedThreshold="0" onEndReached={this.onEndReachedHander.bind(this)} renderHeader={this.renderHeader.bind(self)} dataSource={this.state.dataSource} renderRow={this.renderReviewItem}/> 
                : <Text>No Result</Text>;

        return renderStr
    
    }
    // render(){
    
    //     var self = this,
    //         renderStr = this.state ? <ListView dataSource={this.state.dataSource} renderRow={this.renderReviewItem}/> : <Text>Node</Text>
    //     return (
    //         <ScrollView style={styles.wrapCls}>
    //             <View style={[styles.mainComments, styles.commentItem]}>
    //                 <View style={styles.commentsRow}>
    //                     <Text style={styles.labelCls}>总评</Text>
    //                     <Stars stars='3' style={styles.starCls}/>
    //                     <Text style={[styles.scoreCls]}>3.7分</Text>
    //                     <Text style={styles.recommendCls}>94%用户推荐</Text>
    //                 </View>
    //                 <View style={styles.commentsRow}>
    //                     <Text style={styles.referItem}>卫生：4.6</Text>
    //                     <Text style={styles.referItem}>环境：4.8</Text>
    //                     <Text style={styles.referItem}>服务：4.7</Text>
    //                     <Text style={styles.referItem}>设施：4.6</Text>
    //                 </View>
    //             </View>
    //             <Text style={{fontWeight:'bold', color: '#333', padding: 10,marginBottom:10}}>用户点评</Text>
    //             {renderStr}
    //         </ScrollView>
    //     )
    // }
}

module.exports = Page;
