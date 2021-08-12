import React from 'react';
import FoodComponent from '../../components/foodComponent';


const Olad = () => {

    //https://www.russianfood.com/recipes/recipe.php?rid=153334

    const ingredients = [
        { contentLeft: "Мука пшеничная", contentRight: "100 г" },
        { contentLeft: "Кефир", contentRight: "125 мл" },
        { contentLeft: "Яйцо", contentRight: "1 шт." },
        { contentLeft: "Сахар", contentRight: "1 щепотка" },
        { contentLeft: "Соль", contentRight: "1 щепотка" },
        { contentLeft: "Сода", contentRight: "½ ч. ложки" },
        { contentLeft: "Масло растительное", contentRight: "2-3 ст. ложки" },
        { contentLeft: "Колбаса варёная", contentRight: "150 г" },
        { contentLeft: "Сыр плавленый", contentRight: "80 г" }
    ];

    const receipt = [
        { contentLeft: "Подготавливаем продукты. Вместо плавленого сыра можно использовать обычный." },
        { contentLeft: "Кефир выливаем в глубокую миску. Вбиваем яйцо и слегка взбиваем венчиком." },
        { contentLeft: "В миску с кефирной смесью просеиваем муку и соду, добавляем сахар и соль." },
        { contentLeft: "Хорошенько перемешиваем. В тесте не должно быть комочков. Оставляем тесто для оладий на 15 минут." },
        { contentLeft: "Колбасу нарезаем кружочками." },
        { contentLeft: "Сыр нарезаем небольшими ломтиками." },
        { contentLeft: "На каждый кружок колбасы кладём два кусочка сыра." },
        { contentLeft: "Накрываем вторым кружочком колбасы. У меня получилось 6 таких «колбасных бутербродов»." },
        { contentLeft: "В сковороде разогреваем растительное масло. Выливаем по 1 столовой ложке теста и даём совсем немного схватиться." },
        { contentLeft: "Выкладываем сверху на каждый кружочек теста по колбасному бутерброду. Жарим получившуюся конструкцию на минимальном огне примерно 3 минуты." },
        { contentLeft: "Затем выливаем поверх колбасы ещё немного теста, чтобы оно покрыло края колбасы." },
        { contentLeft: "Переворачиваем оладьи с колбасой и сыром и жарим ещё 2-3 минуты." },
        { contentLeft: "Оладьи с колбасой и сыром готовы. Приятного аппетита!" }
        ];

    const images = [
        { src: "https://img1.russianfood.com/dycontent/images_upl/367/big_366637.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/367/big_366638.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/367/big_366639.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/367/big_366640.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/367/big_366641.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/367/big_366642.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/367/big_366643.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/367/big_366644.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/367/big_366645.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/367/big_366646.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/367/big_366647.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/367/big_366648.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/367/big_366649.jpg"}
    ];

    const description = "Необычные оладьи с колбасой и сыром получаются пышными, красивыми и просто великолепно выглядят в разрезе. Такой оригинальный завтрак точно придётся по вкусу любителям интересных блюд.";

    return (
        <div>
            <FoodComponent header="Оладьи с колбасой и сыром" ingredients={ingredients} receipt={receipt} images={images} description={description} />
        </div>
    );
};


export default Olad;
