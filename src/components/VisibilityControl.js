import  React  from 'react';

export default function VisibilityControl(props){

     return(
         <div className="form-check">
             <input
              type="checkbox"
               className="form-check-input"    
               checked={props.ischecked}
               onChange={e => props.callback(e.target.checked)}
             />
            <label htmlFor="">
                Show {props.description}
            </label>
         </div>
     )
}