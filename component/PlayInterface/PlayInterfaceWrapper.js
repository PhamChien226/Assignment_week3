import React, { Component } from 'react'
import { Text, StyleSheet, View,Image } from 'react-native'

export default class PlayInterfaceWrapper extends Component {
    result=()=>{
        // console.log(this.props.result.name)
        // console.log(this.props.result.image)
        console.log(this.props.result)

    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.playInterface}>
                    <Image
                        source={this.props.playerChoice.image}
                        style={styles.winImage}
                        resizeMode='contain'
                    />
                    <Image
                        source={require('../../assets/vs1.jpg')}
                        style={styles.vsImage}
                        resizeMode='contain'
                    />
                    <Image
                        source={this.props.computerChoice.image}
                        style={styles.loseImage}
                        resizeMode='contain'
                    />
                </View>
                <View style={styles.result}>
                    <Image
                        source={this.props.result.image}
                        // source={require}
                        style={styles.imageResult}
                        resizeMode='cover'
                    />
                </View>
         </View> 
        )
    }
}

const styles = StyleSheet.create({

    container:{
        flex:0.4,
        flexDirection:'column'
    },
    playInterface:{
        flex:0.6,
        flexDirection:'row',
        // backgroundColor:'yellow'
    },
    winImage:{
        flex:33.33,
        height:140,
    },
    vsImage:{
        flex: 33.33,
        height: 140,
        // backgroundColor: 'cyan'
    },
    loseImage:{
        flex: 33.33,
        height:180,
        // backgroundColor: 'gray',
        alignSelf:'center',
    },
    result:{
        flex:0.4,
        justifyContent:'center'
    },
    imageResult:{
        flex:1,
        alignSelf: 'center',
        width:130,
        height:130,
    },

});
