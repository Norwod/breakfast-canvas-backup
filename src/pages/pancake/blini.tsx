import React from 'react';
import FoodComponent from '../../components/foodComponent';


const Blini = () => {

    //https://www.russianfood.com/recipes/recipe.php?rid=141595

    const ingredients = [
        { contentLeft: "Яйца", contentRight: "2 шт." },
        { contentLeft: "Молоко", contentRight: "250 мл (1 стакан)" },
        { contentLeft: "Вода (кипяток)", contentRight: "250 мл (1 стакан)" },
        { contentLeft: "Масло растительное", contentRight: "3 ст. ложки" },
        { contentLeft: "Мука", contentRight: "200 г" },
        { contentLeft: "Сахар", contentRight: "3 ст. ложки" },
        { contentLeft: "Соль", contentRight: "0,5 ч. ложки" }       
    ];

    const receipt = [
        { contentLeft: "Как приготовить заварные блины. Взбиваем яйца с сахаром и солью." },
        { contentLeft: "Добавляем молоко, перемешиваем. Всыпаем просеянную муку. Перемешиваем тесто до однородности." },
        { contentLeft: "Затем вливаем кипяток, перемешивая тесто, и растительное масло. Заварное тесто для блинов готово." },
        { contentLeft: "Жарим тонкие блины на разогретой сковороде, до румяности с двух сторон." },
        { contentLeft: "Приятного аппетита!" }
        ];

    const images = [
        { src: "https://img1.russianfood.com/dycontent/images_upl/204/big_203370.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/204/big_203371.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/204/big_203372.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/204/big_203373.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/204/big_203374.jpg"}
    ];

    const description = "Предлагаю вкуснейший рецепт заварных блинов на молоке и кипятке. Блины получаются очень вкусными, нежными, а на вид - ажурными.";

    return (
        <div>
            <FoodComponent header="Заварные блины" ingredients={ingredients} receipt={receipt} images={images} description={description} />
        </div>
    );
};


export default Blini;
