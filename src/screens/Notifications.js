import React, {Component} from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-navigation';
import Colors from '../constants/Colors';

export default class Notifications extends Component
{
    render()
    {
        return <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.blue}}>
            <Text>
                Notifications
            </Text>
        </SafeAreaView>
    }
}