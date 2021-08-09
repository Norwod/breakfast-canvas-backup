import React, { useReducer } from 'react';
import FoodComponent from '../../components/foodComponent';


const Omelete = () => {



    const ingredients = [
        { contentLeft: "Яйцо куриное", contentRight: "5 шт." },
        { contentLeft: "Молоко", contentRight: "100 мл" },
        { contentLeft: "Мука пшеничная", contentRight: "0,5 ст.л." },
        { contentLeft: "Соль", contentRight: "0,5 ч.л." },
        { contentLeft: "Масло растительное", contentRight: "2 ст.л." }   
    ];

    const receipt = [        
        { image: "", contentLeft: "Яйца выпустить в миску." },
        { image: "", contentLeft: "Влить в яйца молоко." },
        { image: "", contentLeft: "Добавить муку и соль. По желанию можно добавить щепотку сахара, но я предпочитаю без него." },
        { image: "", contentLeft: "Тщательно взбить смесь венчиком или просто вилкой до однородности." },
        { image: "", contentLeft: "Влить яичную смесь на разогретую с растительным маслом сковороду. Накрыть сковороду крышкой. Выпекать омлет на сковороде минут 10-15 на небольшом огне до готовности. Омлет должен подняться и пропечься. По желанию омлет можно перевернуть и обжарить с другой стороны." },
        { image: "", contentLeft: "Наш классический омлет готов. Приятного аппетита!" }
        ];   

    return (
       <FoodComponent header="Омлет" ingredients={ingredients} receipt={receipt} />
    );
};


export default Omelete;
