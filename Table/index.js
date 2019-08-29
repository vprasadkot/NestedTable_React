import React from 'react';

import Header from './Header';
import Row from './Row';

const Table = ({datasource, hasNestedTable}) => {
  console.log('Table : ', datasource);

  const renderRows = (d, index)=> {
    let rows = [];
    rows.push(<Row
                data={d}
                header={datasource.headers}
                key={index} 
              />)
    if(d.subTable) {
      rows.push(<tr><td colspan={datasource.headers.length}>
                <Table
                datasource={d.subTable}
                hasNestedTable="false"
                key={index} 
              /></td></tr>)
    }

    return rows;
  }
  return (
    <div class="tblContainer">
      <table cellpadding="0" cellspacing="0">
        <Header data={datasource.headers} />
        {
          datasource.data.map((d,index) => {
            return renderRows(d, index)
          })
        }
      </table>
    </div>
  )
}

export default Table;