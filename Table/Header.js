import React from 'react';

const Header = ({data}) => {
  console.log("header:", data);
  return (
    <thead>
      <tr>
      {
        data.map((head, index) => {
          return (<th key={index}>
            {
              head.name
            }
          </th>)
        })
      }
      </tr>
    </thead>
  )
}

export default Header;