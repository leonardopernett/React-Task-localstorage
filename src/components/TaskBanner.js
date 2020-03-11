import React, { Fragment } from 'react';


export default function TaskBanner(props){
    return (
       <Fragment>
            <h2 className="bg-primary text-white p-4 text-center">
                {props.username} Task App ({props.taskItem.filter(t => !t.done).length } Tasks to do)
            </h2>
       </Fragment>
    )
}