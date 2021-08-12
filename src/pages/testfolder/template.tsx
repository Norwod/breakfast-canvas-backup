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

    const description = "";

    return (
        <div>
            <FoodComponent header="Test page" ingredients={ingredients} receipt={receipt} images={images} description={description} />
        </div>
    );
};


export default Template;
