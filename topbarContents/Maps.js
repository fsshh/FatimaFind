import {Text, View, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';

import MapView, { Callout, Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps';
import { mapsStyles } from '../Styling';
import { Find } from './Find';

import { markerIsToggled } from './Find';

const INITIAL_REGION = {
	latitude: 14.659125237745373, 
	longitude:  120.9989589966933,
    latitudeDelta: 0.004,
	longitudeDelta: 0.002
};

export function Maps(){
    const findToggled = useSelector((state) => state.toggled.isFindToggled);
    const markerValue = useSelector((state) => state.markers.markerData);
    return(
        <View style={mapsStyles.mapsPage_body}>
            <View style={{display: findToggled ? '' : 'none'}}><Find/></View>
            <MapView
                // height:'100%', width: '100%'
                style={[StyleSheet.absoluteFill, {position: 'absolute', zIndex: -1}]}
                provider={PROVIDER_GOOGLE}
                followsUserLocation={true}
                showsUserLocation={true}
                showsMyLocationButton={true}
                showsCompass={true}
                toolbarEnabled={true}
                zoomEnabled={true}
                rotateEnabled={true}
                region={INITIAL_REGION}
            >   

                {markerIsToggled == true && (
                    markerValue.map((marker, index) => (
                        <Marker
                            key={index}
                            title={marker.name}
                            coordinate={marker}
                        >
                            <Callout>
                                <View style={{padding: '15px', justifyContent:'center', alignItems: 'center'}}>
                                    <Text style={{fontWeight:'bold'}}>{marker.name}</Text>
                                    <Text>{marker.latitude}, {marker.longitude}</Text>
                                    
                                </View>
                            </Callout>
                        </Marker>
                    ))
                )}
            </MapView>
        </View>
    )
}

