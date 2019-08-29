import React from 'react';

const Row = ({data, header}) => {
  console.log("ROW: ", data, header);
  return (
     <tr>
        {
          header.map((h) => {
            return (
              <td>
                {
                  data[h.field]
                }
              </td>
            )
          })
        }
    </tr>
  )
}
export default Row;