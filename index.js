import React from 'react';
import { render } from 'react-dom';
import * as datasource from './Data/tblData';
import Table from './Table/';
import './style.css';

const App = ()=> {
  console.log("Table data: ", datasource.primary);
  return (
    <div>
      Hello World!
      <Table
        datasource={ datasource.primary }
        hasNestedTable="true"
      />
    </div>
  )
}

export default App;
render(<App />, document.getElementById('root'));
