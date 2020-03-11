import React, { Fragment } from 'react'


export default function TaskRow(props){
  
    return(
      <Fragment>
        <tr key={props.index}>
            <td>{props.index + 1 }</td>
            <td>{props.task.name}</td>
            <td>
              <input type="checkbox"
               checked={props.task.done}
               onChange={()=>props.toogleTask(props.task)}
               />
            </td>
        </tr>
      </Fragment>
   )
}