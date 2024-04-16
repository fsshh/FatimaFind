import {Text, View, TouchableOpacity} from 'react-native';
import { findStyles } from '../Styling';

import {useSelector, useDispatch} from 'react-redux'
import { changeMarkerData } from '../redux/redux';

import { toggleFindOff } from '../redux/redux';
// MARKER DATA FILES

import { atm_markers, parking_markers, 
    hardware_markers, riceMeals_marker, 
    printXerox_marker, sariStore_marker,
    schoolSupplies_marker, schoolBuildings_marker, 
    foodStalls_marker, convenienceStore_marker, 
    emptyMarker} from '../mapMarkers.js'
import { MarkerAnimated } from 'react-native-maps';


export let markerIsToggled = false;

export function Find(){
    const dispatch = useDispatch()

    let activateMarker = (marker_name) =>{
        dispatch(changeMarkerData(marker_name));
        markerIsToggled = true;
        dispatch(toggleFindOff());
    }
    
    return(
        <View style={findStyles.findPage_Body}>
            <View style={findStyles.findContent_section}>
                <View style={findStyles.findContent_divider}><Text style={[findStyles.findContent_header, {color: 'white'}]}>Where do you wanna go?</Text></View>
                <View style={findStyles.findContent_container}>
                    <TouchableOpacity
                        onPress={() =>{
                            activateMarker(atm_markers);
                        }}>
                        <Text style={{color: 'white', fontSize: 20}}>ATM</Text></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>{
                            activateMarker(parking_markers)
                        }}>
                        <Text style={{color: 'white', fontSize: 20}}>Parking</Text></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>{
                            activateMarker(hardware_markers)
                        }}>
                        <Text style={{color: 'white', fontSize: 20}}>Hardware</Text></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>{
                            activateMarker(riceMeals_marker)
                        }}>
                        <Text style={{color: 'white', fontSize: 20}}>Rice Meals</Text></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>{
                            activateMarker(printXerox_marker)
                        }}>
                        <Text style={{color: 'white', fontSize: 20}}>Print/Xerox</Text></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>{
                            activateMarker(sariStore_marker)
                        }}>
                        <Text style={{color: 'white', fontSize: 20}}>Sari-sari Store</Text></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>{
                            activateMarker(schoolSupplies_marker)
                        }}>
                        <Text style={{color: 'white', fontSize: 20}}>School Supplies</Text></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>{
                            activateMarker(schoolBuildings_marker)
                        }}>
                        <Text style={{color: 'white', fontSize: 20}}>School Buildings</Text></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>{
                            activateMarker(foodStalls_marker)
                        }}>
                        <Text style={{color: 'white', fontSize: 20}}>Food Snack Stalls</Text></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>{
                            activateMarker(convenienceStore_marker)
                        }}>
                        <Text style={{color: 'white', fontSize: 20}}>Convenience Store</Text></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>{
                            activateMarker(emptyMarker)
                        }}>
                        <Text style={{color: 'white', fontSize: 20}}>Clear Marker</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}