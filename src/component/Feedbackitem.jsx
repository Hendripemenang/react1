import {useState} from "react";

function Feedbackitem(props) {
    const[rating,setRating] =useState(8)
    const[text,setText] =useState('This is example of a feedback item')

    return (
       <div className="card">
           <div className="num-display">{rating}</div>
           <div className="text-display">{text}</div>

       </div>
    );
}

export default Feedbackitem;