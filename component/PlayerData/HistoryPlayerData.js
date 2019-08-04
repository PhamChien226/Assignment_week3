import React, { Component } from 'react'
import { Text, StyleSheet, View,Dimensions } from 'react-native'

const screen = Dimensions.get('window');
export default class HistoryPlayerData extends Component {

    render() {
  console.log('render')
        return (
            <View style={{
                flex:0.4,
            }}>
                <View style={styles.totalResultWrapper}>
                    <View style={[styles.column, styles.choice]}>
                        <Text style={styles.textStyle}>Stone</Text>
                        <Text style={styles.textStyle}>Paper</Text>
                        <Text style={styles.textStyle}>Scissor</Text>
                    </View>
                    <View style={[styles.column, styles.player, styles.player1]}>
                        <Text style={styles.textStyle}style={styles.textStyle}>You</Text>
                        <Text style={styles.textStyle}>{this.props.countStone}({this.props.scaleStone}%)</Text>
                        <Text style={styles.textStyle}>{this.props.countPaper}({this.props.scalePaper}%)</Text>
                        <Text style={styles.textStyle}>{this.props.countScissor}({this.props.scaleStone}%)</Text>
                    </View>
                    <View style={[styles.column, styles.player, styles.player2]}>
                        <Text style={styles.textStyle}>Computer</Text>
                        <Text style={styles.textStyle}>0(0%)</Text>
                        <Text style={styles.textStyle}>0(0%)</Text>
                        <Text style={styles.textStyle}>0(0%)</Text>
                    </View>
                </View>
                <View style={styles.scoreWrapper}>
                    <View style={styles.player}>
                        <Text style={styles.textPlayerStyle}>You score</Text>
                        <Text style={styles.textPlayerStyle}>{this.props.yourScore}</Text>
                    </View>
                    <View style={styles.player}>
                        <Text style={[styles.textPlayerStyle]}>Computer</Text>
                        <Text style={[styles.textPlayerStyle]}>{this.props.player2Score}</Text>
                    </View>
                </View>
                <View style={styles.scaleWrapper}>
                    <View style={{
                        flex:this.props.yourWinRate,
                        backgroundColor:'green'
                    }}></View>
                    <View style={{
                        flex: 0.1,
                        backgroundColor: 'yellow'
                    }}></View>
                    <View style={{
                        flex: this.props.player2WinRate,
                        backgroundColor:'red'
                    }}></View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    totalResultWrapper:{
        flex:0.65,
        flexDirection: 'row',
        borderBottomColor:'gray',
        borderBottomWidth:1,
        marginTop:30,
    },
    column:{
        flex:33.33
    },
    choice:{
        paddingTop:25,
    },
    player:{},
    player1:{
    },
    player2:{
    },
    textStyle:{
        fontSize:20,
        fontWeight:'500',
        textAlign:'center',
        color:'gray'
    },
    scoreWrapper:{
        flex:0.35,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
    },
    player: {
        justifyContent:'center'
    },
    textPlayerStyle:{
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        color:'black'
    },
    scaleWrapper:{
        flex:0.05,
        flexDirection:'row'
    },
});
