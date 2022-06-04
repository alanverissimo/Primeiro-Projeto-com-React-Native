import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

import './config/ReactotronConfig';


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    title: {
        color: '#FFF',
        fontSize: 32,
        fontWeight: 'bold'
    },
});

console.tron.log('Hello World');

export default function App() {
    return (
     <>
     <StatusBar barStyle="light-content" backgroundColor="#7159c1" translucent />
     
 <View style={styles.container}>
     <Text style={styles.title}>Hello GoStack!</Text>
 </View>
 </>
 );
}