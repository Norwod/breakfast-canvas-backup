import React from 'react';
import FoodComponent from '../../components/foodComponent';


const Template = () => {

    //

    const ingredients = [
        { contentLeft: "", contentRight: "" },
       
    ];

    const receipt = [
        { contentLeft: "" },
        ];

    const images = [
        { src: ""},        
    ];

    return (
        <div>
            <FoodComponent header="Test page" ingredients={ingredients} receipt={receipt} images={images} />           

        </div>
    );
};


export default Template;
