import {Text, View} from 'react-native';
import { aboutStyles } from '../Styling';


export function About(){
    return(
        <View style={aboutStyles.aboutPage_Body}>
            <View style={aboutStyles.aboutContent_section}>
                <Text style={[aboutStyles.aboutContent_header, {color: 'white'}]}>Our Mission</Text>
                <Text style={[aboutStyles.aboutContent_paragraph, {color: 'white'}]}>
                    Jasper T. Agtarap, Sander G. Bermundo, Marc Aldrei T. Domingo, Justin G. Dominguez,
                    Dexter Jhon P. Logdonio, Vince Miguell A. Molina, Joshua B. Natalio, and John Michael 
                    C. Romanillos are the founders of Fatima Find Research. Fatima Find is a project that 
                    mainly focuses in navigation, and aims to help many possible audience around fatima vicinities.
                </Text>
            </View>
            <View style={aboutStyles.aboutContent_section}>
                <Text style={[aboutStyles.aboutContent_header, {color: 'white'}]}>About</Text>
                <Text style={[aboutStyles.aboutContent_paragraph, {color: 'white'}]}>
                    The Fatima Find is a interactive collection of place and stalls that is waiting to be familiarized by the users. 
                    It takes a few combination of programming languages to create the app such as HTML, CSS, JAVASCRIPT, 
                    and Firebase. This Project is made to be available offline and provide accurate location, so the user 
                    can have the convenience that they need.
                </Text>
            </View>
            {/* <Text style={aboutStyles.textColor}>This is an About Page</Text> */}
        </View>
    )
}