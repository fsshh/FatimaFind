import {Text, View, TouchableOpacity} from 'react-native';
import { findStyles } from '../Styling';
import { Marker, MarkerAnimated } from 'react-native-maps';

import {useSelector, useDispatch} from 'react-redux'
import { changeMarkerData } from '../redux/redux';

// MARKER DATA FILES

import { atm_markers, parking_markers, 
    hardware_markers, riceMeals_marker, 
    printXerox_marker, sariStore_marker,
    schoolSupplies_marker, schoolBuildings_marker, 
    foodStalls_marker, convenienceStore_marker, 
    emptyMarker} from '../mapMarkers.js'


export let markerIsToggled = false;

export function Find(){
    const dispatch = useDispatch()
    return(
        <View style={findStyles.findPage_Body}>
            <View style={findStyles.findContent_section}>
                <View style={findStyles.findContent_divider}><Text style={[findStyles.findContent_header, {color: 'white'}]}>Where do you wanna go?</Text></View>
                <View style={findStyles.findContent_container}>
                    <TouchableOpacity
                        onPress={() =>{
                            dispatch(changeMarkerData(atm_markers));
                            markerIsToggled = true;
                        }}>
                        <Text style={{color: 'white', fontSize: 20}}>ATM</Text></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>{
                            dispatch(changeMarkerData(parking_markers));
                            markerIsToggled = true;
                        }}>
                        <Text style={{color: 'white', fontSize: 20}}>Parking</Text></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>{
                            dispatch(changeMarkerData(hardware_markers));
                            markerIsToggled = true;
                        }}>
                        <Text style={{color: 'white', fontSize: 20}}>Hardware</Text></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>{
                            dispatch(changeMarkerData(riceMeals_marker));
                            markerIsToggled = true;
                        }}>
                        <Text style={{color: 'white', fontSize: 20}}>Rice Meals</Text></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>{
                            dispatch(changeMarkerData(printXerox_marker));
                            markerIsToggled = true;
                        }}>
                        <Text style={{color: 'white', fontSize: 20}}>Print/Xerox</Text></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>{
                            dispatch(changeMarkerData(sariStore_marker));
                            markerIsToggled = true;
                        }}>
                        <Text style={{color: 'white', fontSize: 20}}>Sari-sari Store</Text></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>{
                            dispatch(changeMarkerData(schoolSupplies_marker));
                            markerIsToggled = true;
                        }}>
                        <Text style={{color: 'white', fontSize: 20}}>School Supplies</Text></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>{
                            dispatch(changeMarkerData(schoolBuildings_marker));
                            markerIsToggled = true;
                        }}>
                        <Text style={{color: 'white', fontSize: 20}}>School Buildings</Text></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>{
                            dispatch(changeMarkerData(foodStalls_marker));
                            markerIsToggled = true;
                        }}>
                        <Text style={{color: 'white', fontSize: 20}}>Food Snack Stalls</Text></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>{
                            dispatch(changeMarkerData(convenienceStore_marker));
                            markerIsToggled = true;
                        }}>
                        <Text style={{color: 'white', fontSize: 20}}>Convenience Store</Text></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>{
                            markerIsToggled = true;
                            dispatch(changeMarkerData(emptyMarker));
                        }}>
                        <Text style={{color: 'white', fontSize: 20}}>Clear Marker</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}