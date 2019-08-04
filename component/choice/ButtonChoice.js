import React, { Component } from 'react'
import { Text, StyleSheet, View, Image,TouchableOpacity } from 'react-native'
import Button from 'react-native-button';
import CHOICES from '../../data/ChoicesData';

export default class ButtonChoice extends Component {
    render() {
        return (
            <View style={styles.choiceWrapper}>
                {CHOICES.map(item => {
                    return (
                        <TouchableOpacity
                            key={item.name}
                            style={styles.itemButtonItem}
                            onPress={() => this.props.onPressButton(item.name)}
                        >
                            <Text style={styles.textButton}
                            >{item.name}
                            </Text>
                            <Image style={styles.imageButton}
                                source={item.image}
                                resizeMode='contain'
                            />
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    choiceWrapper: {
        flex: 0.2,
        flexDirection:'row',
        justifyContent: 'space-around'
    },
    choiceButtonItem: {
        alignItems:'center',
        width: 100,
        height: 100,
        backgroundColor: 'red',
    },
    textButton:{
        fontSize:16,
    },
    imageButton: {
        height: 40,
        width:40,
    }
})
