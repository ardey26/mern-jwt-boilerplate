
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getKards } from './actions/kards'
// COMPONENT IMPORTS
import Input from './components/Input.js'
import Edit from './components/Edit.js'
import List from './components/List.js'


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getKards());
  }, [dispatch])
  return (
    <div className="App">
      <List />
    </div>
  );
}

export default App;
