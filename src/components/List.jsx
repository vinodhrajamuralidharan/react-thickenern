import React from 'react';

export default function List(props) {
    const list = props.values.map((list, index) => {
      return (  
        <tr key={index}>
            <td>{props.name}</td>
            <td>{list}</td>
        </tr>
        );
    });
    return (
        <>
            {list}
        </>
    )
}