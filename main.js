import {Text, View, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch} from 'react-redux';

import {styles} from './Styling';
import {About} from './topbarContents/About';
import {Help} from './topbarContents/Help';
import {Find} from './topbarContents/Find';

import {
    toggleAboutOn,
    toggleAboutOff,
    toggleHelpOn,
    toggleHelpOff,
    toggleFindOn,
    toggleFindOff
} from './redux/redux';

'use client'
const MyApp = () => {
    const dispatch = useDispatch();
    const aboutToggled = useSelector((state) => state.toggled.isAboutToggled);
    const helpToggled = useSelector((state) => state.toggled.isHelpToggled);
    const findToggled = useSelector((state) => state.toggled.isFindToggled);

    const toggleHomePage = () =>{
        dispatch(toggleFindOff());
        dispatch(toggleAboutOff());
        dispatch(toggleHelpOff());
    }
    const toggleFindPage = () =>{
        dispatch(toggleFindOn());
        dispatch(toggleAboutOff());
        dispatch(toggleHelpOff());
    }
    const toggleHelpPage = () =>{
        dispatch(toggleHelpOn());
        dispatch(toggleAboutOff());
        dispatch(toggleFindOff());
    }
    const toggleAboutPage = () =>{
        dispatch(toggleAboutOn());
        dispatch(toggleHelpOff());
        dispatch(toggleFindOff());
    }
    
    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <View style={styles.container}>
                <View style={styles.topbar}>
                    <TouchableOpacity 
                        onPress={() => {
                            {toggleFindPage()}
                        }} 
                        style={styles.topbarTextContainer}>
                        <Text style={styles.topbar_text}>Find</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => {
                            {toggleHomePage()}
                        }} 
                        style={styles.topbarTextContainer}>
                        <Text style={styles.topbar_text}>Map</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => {
                            {toggleHelpPage()}
                        }} 
                        style={styles.topbarTextContainer}>
                        <Text style={styles.topbar_text}>Help</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress ={() =>{
                            {toggleAboutPage()}
                        }}
                        style={styles.topbarTextContainer}>
                        <Text style={styles.topbar_text}>About</Text>
                    </TouchableOpacity>       
                </View>
                <View style={[{display: findToggled ? '' : 'none'}]}><Find/></View>
                <View style={[{display: aboutToggled ? '' : 'none'}]}><About/></View>
                <View style={[{display: helpToggled ? '' : 'none'}]}><Help/></View>
            </View>
        </SafeAreaView>
    );        

};

export default MyApp;