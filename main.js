import {Text, View, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch} from 'react-redux';

import {styles} from './Styling';
import {About} from './topbarContents/About';
import {Help} from './topbarContents/Help';
import { Maps } from './topbarContents/Maps';

import {
    toggleAboutOn,
    toggleAboutOff,
    toggleHelpOn,
    toggleHelpOff,
    toggleFindOff,
    toggleFindSwitch,
    toggleMapOn,
    toggleMapOff
} from './redux/redux';

'use client'
const MyApp = () => {
    const dispatch = useDispatch();
    const aboutToggled = useSelector((state) => state.toggled.isAboutToggled);
    const helpToggled = useSelector((state) => state.toggled.isHelpToggled);
    const mapToggled = useSelector((state) => state.toggled.isMapToggled);

    const toggleMapPage = () =>{
        dispatch(toggleMapOn());
        dispatch(toggleFindOff());
        dispatch(toggleAboutOff());
        dispatch(toggleHelpOff());
    }
    const toggleFindPage = () =>{
        dispatch(toggleFindSwitch());
        dispatch(toggleMapOn());
        dispatch(toggleAboutOff());
        dispatch(toggleHelpOff());
    }
    const toggleHelpPage = () =>{
        dispatch(toggleHelpOn());
        dispatch(toggleAboutOff());
        dispatch(toggleFindOff());
        dispatch(toggleMapOff());
    }
    const toggleAboutPage = () =>{
        dispatch(toggleAboutOn());
        dispatch(toggleHelpOff());
        dispatch(toggleFindOff());
        dispatch(toggleMapOff());
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
                            {toggleMapPage()}
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
                {/* TOGGLES THE PAGE WHEN THE CORRESPONDING TEXT IS CLICKED */}
                <View style={[{display: mapToggled ? '' : 'none'}]}><Maps/></View>
                <View style={[{display: aboutToggled ? '' : 'none'}]}><About/></View>
                <View style={[{display: helpToggled ? '' : 'none'}]}><Help/></View>
            </View>
        </SafeAreaView>
    );        

};

export default MyApp;