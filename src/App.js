import React, { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import AddTechModal from './components/logs/techs/AddTechModal';
import EditLogModal from './components/logs/EditLogModal';
import TechListModal from './components/logs/techs/TechListModal';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
function App() {
  useEffect (() => {
    //init materialize js 
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar/>
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <AddTechModal />
          <EditLogModal />
          <TechListModal/>
          <Logs/>
        </div>
      </Fragment>
    </Provider>
  )

} 

export default App;
