import {Text, View, TouchableOpacity} from 'react-native';
import { findStyles } from '../Styling';

export function Find(){
    return(
        <View style={findStyles.findPage_Body}>
            <View style={findStyles.findContent_section}>
                <View style={findStyles.findContent_divider}><Text style={[findStyles.findContent_header, {color: 'white'}]}>Where do you wanna go?</Text></View>
                <View style={findStyles.findContent_container}>
                    <Text style={{color: 'white', fontSize: 20}}>ATM</Text>
                    <Text style={{color: 'white', fontSize: 20}}>Parking</Text>
                    <Text style={{color: 'white', fontSize: 20}}>Hardware</Text>
                    <Text style={{color: 'white', fontSize: 20}}>Rice Meals</Text>
                    <Text style={{color: 'white', fontSize: 20}}>Print/Xerox</Text>
                    <Text style={{color: 'white', fontSize: 20}}>Sari-sari Store</Text>
                    <Text style={{color: 'white', fontSize: 20}}>School Supplies</Text>
                    <Text style={{color: 'white', fontSize: 20}}>School Buildings</Text>
                    <Text style={{color: 'white', fontSize: 20}}>Food Snack Stalls</Text>
                    <Text style={{color: 'white', fontSize: 20}}>Convenience Store</Text>
                </View>
                        
            </View>
        </View>
    )
}