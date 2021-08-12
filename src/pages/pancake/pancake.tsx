import React from 'react';
import FoodComponent from '../../components/foodComponent';


const Pancake = () => {

    //https://www.russianfood.com/recipes/recipe.php?rid=134468

    const ingredients = [
        { contentLeft: "Яйца", contentRight: "2 шт." },
        { contentLeft: "Молоко", contentRight: "200 мл" },
        { contentLeft: "Мука пшеничная", contentRight: "10 ст. л." },
        { contentLeft: "Разрыхлитель", contentRight: "1 ч. л." },
        { contentLeft: "Сахар", contentRight: "2 ст. л." },
        { contentLeft: "Ванильный сахар (по желанию)", contentRight: "по вкусу" }       
    ];

    const receipt = [
        { contentLeft: "Смешайте 2 яйца и 200 мл молока." },
        { contentLeft: "Затем добавьте 2 ст.л. сахара и ваниль." },
        { contentLeft: "Взбейте до однородности." },
        { contentLeft: "Добавьте 10 ст. л. муки и разрыхлитель." },
        { contentLeft: "Тщательно перемешайте. Тесто получится средней густоты." },
        { contentLeft: "Разогрейте сковородку с антипригарным покрытием. На сухую сковороду налейте тесто небольшим половником. Накройте крышкой, и жарьте панкейки на среднем огне." },
        { contentLeft: "Переворачивайте, когда верхняя поверхность панкейков станет пористой, при этом будет еще влажной. Жарьте блинчики до румяности с двух сторон." },
        { contentLeft: "Складывайте готовые панкейки башенкой на тарелке. Подавайте панкейки с медом. Можно добавить орехи. Приятного аппетита!" }
        ];

    const images = [
        { src: "https://img1.russianfood.com/dycontent/images_upl/124/big_123947.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/124/big_123948.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/124/big_123949.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/124/big_123950.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/124/big_123951.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/124/big_123952.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/124/big_123953.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/124/big_123954.jpg"}
    ];

    const description = "Мягкие, сладкие, вкусные американские блинчики, которые еще называют панкейки (pancakes), отлично сочетаются с медом. Панкейки понравятся и взрослым, и детям. Блинчики на молоке станут отличным завтраком.";

    return (
        <div>
            <FoodComponent header="Панкейки (американские блинчики)" ingredients={ingredients} receipt={receipt} images={images} description={description} />
        </div>
    );
};


export default Pancake;
