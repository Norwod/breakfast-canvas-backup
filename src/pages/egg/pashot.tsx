import React from 'react';
import FoodComponent from '../../components/foodComponent';


const Pashot = () => {

    //https://www.russianfood.com/recipes/recipe.php?rid=145658

    const ingredients = [
        { contentLeft: "Яйцо", contentRight: "1 шт." },
        { contentLeft: "Вода", contentRight: "2 л" },
        { contentLeft: "Соль", contentRight: "1 ч. л." },
        { contentLeft: "Хлеб (для подачи)", contentRight: "1 ломтик" }       
    ];

    const receipt = [
        { contentLeft: "Разбить яйцо в небольшую емкость." },
        { contentLeft: "Нагреть воду в кастрюльке, посолить (на 2 л воды я добавляю 1 ч. л. соли). Убавить нагрев, чтобы не было сильного кипения." },
        { contentLeft: "Сделать в воде воронку, размешивая ложкой, и опустить в середину яйцо." },
        { contentLeft: "Варить яйцо пашот 3 минуты." },
        { contentLeft: "Будут немного отделяться частички белка, но это не страшно. Яйцо соберется." },
        { contentLeft: "Достаем готовое яйцо с жидким желтком из воды." },
        { contentLeft: "одаем яйцо пашот на кусочке хлеба. Вот так просто и быстро можно приготовить завтрак. Приятного аппетита!" }        
        ];

    const images = [
        { src: "https://img1.russianfood.com/dycontent/images_upl/254/sm_253493.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/254/sm_253496.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/254/big_253412.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/254/big_253413.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/254/big_253414.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/254/big_253494.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/254/big_253497.jpg"}        
    ];
        
    return (
        <div>
            <FoodComponent header="Яйцо пашот" ingredients={ingredients} receipt={receipt} images={images} />
        </div>
    );
};


export default Pashot;
