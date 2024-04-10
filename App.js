import { Provider } from 'react-redux';
import { useEffect } from 'react';
import store from './redux/redux'
import MyApp from './main';
import * as Location from 'expo-location'

export default App = () =>{
   // Gets permission to access the device's location
  useEffect(() =>{
    Location.requestForegroundPermissionsAsync();
  }, [])

  return(
    <Provider store = { store }>
        <MyApp/>
    </Provider>
  ) 
}

