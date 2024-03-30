import { Provider } from 'react-redux';

import store from './redux/redux'
import MyApp from './main';

export default App = () =>{
  return(
    <Provider store = { store }>
        <MyApp/>
    </Provider>
  ) 
}

