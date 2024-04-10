import {StyleSheet, Platform, StatusBar} from 'react-native';


export const styles = StyleSheet.create({
    AndroidSafeArea: {
      flex: 1,
      backgroundColor: "white",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    container: {
      flex: 1,
      backgroundColor: '#333333',
    },
    // TOP/UPPER NAVIGATION BAR
    topbar: {
      
      width: '100%',
      height: '6%',
      backgroundColor: "#2ECC7180",
  
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'absolute',

      paddingLeft: 15,
      paddingRight: 15,
      
      borderBottomWidth: 1,
      borderColor: '#333333'
    },
  
    topbar_text: {
      color: 'white',
      fontSize: 20,
      fontWeight: "500",

    },

    topbarTextContainer:{
        width: 80,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
  });


export const aboutStyles = StyleSheet.create({
  aboutPage_Body:{
    width: "100%",
    height: "100%",

    display: 'flex',
    alignItems: 'center',
    backgroundColor: "#2ECC7180",
    
    marginTop: 48.5,
    padding: 25,
  },

  aboutContent_section:{
    display: 'flex',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  aboutContent_header:{
    fontSize: 50,
    fontWeight: 500,
  },

  aboutContent_paragraph:{
    fontSize: 17.5,
    textAlign:"justify"
  },
});

export const helpStyles = StyleSheet.create({
  helpPage_Body:{
    width: "100%",
    height: "100%",
    
    display: 'flex',
    alignItems: 'center',
    backgroundColor: "#2ECC7180",

    marginTop: 48.5,
    padding: 25,
  },

  helpContent_section:{
    display: 'flex',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  helpContent_header:{
    fontSize: 45,
    fontWeight: 500,
  },

  helpContent_paragraph:{
    fontSize: 17.5,
    textAlign:"justify"
  },


});

export const findStyles = StyleSheet.create({
 findPage_Body:{
    width: "50%",
    height: "100%",
    backgroundColor: "#308E5B",
  },

 findContent_section:{
    width: "100%",
  },
  findContent_divider:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    paddingTop: 10,
    paddingBottom: 10,

    borderBottomWidth: 1,
    borderColor: '#333333'

  },
  findContent_header:{
    fontSize: 20,
    fontWeight: 500,
  },

  findContent_paragraph:{
    fontSize: 17.5,
    textAlign:"justify"
  },

  findContent_container:{
    paddingTop: 10,
    paddingLeft: 10,
    gap: 10,
  },
});

export const mapsStyles = StyleSheet.create({
  mapsPage_body:{
    width: "100%",
    height: "100%",
    marginTop: 48.5,
    backgroundColor: "#2ECC7180",
  },
})
