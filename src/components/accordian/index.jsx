
import React, {useState} from "react";
import data from "../data";
function Accordion(){

    const [selected, setSelected] = useState(null);

    function handleClick(index){
        setSelected(selected === index ? null : index)
    }

    return (
        <div>
            {
                data.map((item,index) =>
                     <div key={index}> 
                        <h1>{item.question}</h1>
                        <span onClick={() => handleClick(index)} className="spanner-class">+</span>
                        {selected === index && <p>{item.answer}</p>}
                     </div>) 
            }
        </div>

    );

}


export default Accordion;