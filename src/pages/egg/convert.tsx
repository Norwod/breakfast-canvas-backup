import React from 'react';
import FoodComponent from '../../components/foodComponent';


const Convert = () => {

    //https://www.russianfood.com/recipes/recipe.php?rid=157593

    const ingredients = [
        { contentLeft: "Яйца", contentRight: "2 шт." },
        { contentLeft: "Сыр твёрдый", contentRight: "50 г (1-2 ломтика)" },
        { contentLeft: "Соль", contentRight: "по вкусу" },
        { contentLeft: "Масло растительное", contentRight: "1 ст. ложка" },
        { contentLeft: "Петрушка свежая", contentRight: "1-2 веточки" }
    ];

    const receipt = [
        { contentLeft: "В миску разбиваем яйца. Солим по вкусу (сыр содержит соль, так что солить нужно осторожно). Взбиваем вилочкой до однородности." },
        { contentLeft: "В сковороде (диаметром 20 см) на среднем огне разогреваем растительное масло. Вливаем яичную смесь и распределяем по дну, аккуратно наклоняя сковороду в стороны и формируя тонкий блинчик. Жарим на среднем огне примерно 1-2 минуты, пока края блинчика не схватятся, а серединка не останется жидкой." },
        { contentLeft: "В центр яичного блинчика выкладываем ломтики сыра и готовим ещё примерно 1 минуту." },
        { contentLeft: "Как только сыр начнёт плавиться, аккуратно складываем края блинчика, формируя конвертик. Для этого вначале подворачиваем и накрываем начинку двумя противоположными краями блинчика." },
        { contentLeft: "Затем подворачиваем остальные два свободных края. Слегка прижимаем лопаткой получившийся конвертик на несколько секунд, чтобы скрепить края блинчика с начинкой в таком положении." },
        { contentLeft: "Затем аккуратно переворачиваем яичный конвертик с начинкой швом вниз и обжариваем примерно 20-30 секунд." },
        { contentLeft: "Румяный яичный конвертик с сырной начинкой готов. Перекладываем блюдо на тарелку. Приятного аппетита!" }
        ];

    const images = [
        { src: "https://img1.russianfood.com/dycontent/images_upl/437/big_436563.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/437/big_436564.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/437/big_436565.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/437/big_436566.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/437/big_436567.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/437/big_436568.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/437/big_436569.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/437/big_436570.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/437/big_436571.jpg"}
    ];

    const description = "Простое и сытное блюдо всего из двух основных ингредиентов - яиц и сыра. Готовятся яичные конвертики с сыром очень быстро и совсем несложно. Всего 5 минут - и вкуснейший завтрак готов!";

    return (
        <div>
            <FoodComponent header="Яичный конвертик с сыром" ingredients={ingredients} receipt={receipt} images={images} description={description} />
        </div>
    );
};


export default Convert;
