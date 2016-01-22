'use strict';
var React = require('react-native');
var Stars = require('../lib/stars');
var styles = require('../css/styles');
var {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  ScrollView,
  View,
} = React;

class Page extends React.Component {
    render(){
        var self = this,
            data = this.props.itemData;
        return (
            <View style={[styles.usersReview, styles.commentItem]}>
                <View style={styles.commentsRow}>
                    <Text style={[styles.phoneCls, styles.grayCls]}>{data.nick}</Text>
                    <Text style={[styles.recommendCls, styles.grayCls]}>{data.date.substring(0,10)}</Text>
                </View>
                <View style={styles.commentsRow}>
                    <Text style={styles.labelCls}>评分</Text>
                    <Stars stars={data.custPt} style={styles.starCls}/>
                </View>
                <View style={styles.commentsRow}>
                    <Text style={styles.referItem}>卫生：{data.ratPt}</Text>
                    <Text style={styles.referItem}>环境：{data.raatPt}</Text>
                    <Text style={styles.referItem}>服务：{data.servPt}</Text>
                    <Text style={styles.referItem}>设施：{data.faclPt}</Text>
                </View>
                <View>
                    <Text style={styles.reviewCls}>{data.content}</Text>
                </View>
            </View>
        )
    }
}

module.exports = Page;
