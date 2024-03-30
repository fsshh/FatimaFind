import {Text, View, TouchableOpacity} from 'react-native';
import { helpStyles } from '../Styling';
export function Help(){
    return(
        <View style={helpStyles.helpPage_Body}>
            <View style={helpStyles.helpContent_section}>
                <Text style={[helpStyles.helpContent_header, {color: 'white'}]}>Get In Touch</Text>
                <Text style={[helpStyles.helpContent_paragraph, {color: 'white'}]}>
                    If you have any question or Concerns kindly contact me on the links below
                </Text>
                <TouchableOpacity>
                    <Text style={[helpStyles.helpContent_paragraph, {color: 'white'}, {textDecorationLine:'underline'}]}>
                        Find Fatima Concerns
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}