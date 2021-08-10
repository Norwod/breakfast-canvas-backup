import React from 'react';
import FoodComponent from '../../components/foodComponent';


const Template = () => {

    //

    const ingredients = [
        { contentLeft: "", contentRight: "" },
        { contentLeft: "", contentRight: "" },
        { contentLeft: "", contentRight: "" },
        { contentLeft: "", contentRight: "" },
        { contentLeft: "", contentRight: "" }   
    ];

    const receipt = [        
        { image: "", contentLeft: "" },
        { image: "", contentLeft: "" },
        { image: "", contentLeft: "" },
        { image: "", contentLeft: "" },
        { image: "", contentLeft: "" },
        { image: "", contentLeft: "" }
        ];   

    return (
       <FoodComponent header="" ingredients={ingredients} receipt={receipt} />
    );
};


export default Template;
