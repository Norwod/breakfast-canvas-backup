import React, { useReducer } from 'react';
import FoodComponent from '../../components/foodComponent';


const Rice = () => {
    
    const ingredients = [
        { contentLeft: "Рис круглозерный", contentRight: "200 г (1 стакан ёмкостью 250 мл)" },
        { contentLeft: "Вода", contentRight: "500 мл (2 стакана)" },
        { contentLeft: "Молоко", contentRight: "750 мл (3 стакана)" },
        { contentLeft: "Соль", contentRight: "0,5 ч. ложки" },
        { contentLeft: "Сахар", contentRight: "1,5 ст. ложки (по вкусу)" },
        { contentLeft: "Масло сливочное", contentRight: "по вкусу" }
    ];

    const receipt = [
        { contentLeft: "Для приготовления каши лучше всего использовать круглый белый рис, он лучше разваривается, из него получается самая мягкая и нежная каша.Рис несколько раз нужно промыть, чтобы вода после промывания стала прозрачной." },
        { contentLeft: "В кастрюлю насыпаем промытый рис, заливаем водой и ставим на плиту вариться. Вода закипела - варим рисовую кашу на среднем огне минут 10, практически до полного выкипания воды." },
        { contentLeft: "Затем наливаем молоко, добавляем соль, сахар (добавляйте сахар по вкусу, мне нравится, когда каша в меру сладкая). Перемешиваем. Варим молочную рисовую кашу на медленном огне, иногда помешивая, минут 10, до загустения, но не до полного выкипания молока. Только следите, чтобы молоко не убежало.Выключаем огонь, накрываем кастрюлю крышкой и даём каше настояться 10-15 минут." },
        { contentLeft: "В готовую рисовую кашу на молоке можно добавить кусочек сливочного масла, каша будет еще вкуснее! Приятного аппетита!" }
    ];

    const images = [
        { src: "https://img1.russianfood.com/dycontent/images_upl/485/sm_484357.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/485/sm_484358.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/485/big_484359.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/485/big_484360.jpg"},
    ];

    const description = "";

    return (
        <div>
            <FoodComponent header="Рис" ingredients={ingredients} receipt={receipt} images={images} description={description} />
        </div>
    );
}

          

export default Rice;
