/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {Button, NativeModules, SafeAreaView, StyleSheet} from 'react-native';

import IosProgressBar from './IosProgressBar';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.box}>
      <IosProgressBar
        progress={0.5}
        progressTintColor={'#000'}
        trackTintColor={'#ccc'}
        style={styles.bar}
      />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  bar: {width: '80%', height: 30},
  box: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
