import React from 'react';
import FoodComponent from '../../components/foodComponent';


const AirEgg = () => {

    //https://www.russianfood.com/recipes/recipe.php?rid=162208

    const ingredients = [
        { contentLeft: "Яйца", contentRight: "2 шт." },
        { contentLeft: "Шпинат", contentRight: "70 г" },
        { contentLeft: "Сметана", contentRight: "100 г" },
        { contentLeft: "Сыр твёрдый", contentRight: "50 г" },
        { contentLeft: "Соль", contentRight: "по вкусу" },
        { contentLeft: "Перец чёрный молотый ", contentRight: "по вкусу" },
        { contentLeft: "Масло растительное или сливочное (для подготовки форм)", contentRight: "1 ст. ложка" },       
    ];

    const receipt = [
        { contentLeft: "Подготовьте продукты по списку. Сметана подойдёт любой жирности, у меня - 20%. Сыр можно использовать любой качественный, который хорошо плавится. Я использую моцареллу." },
        { contentLeft: "Духовку включите разогреваться до температуры 180 градусов. Листья шпината освободите от стеблей, хорошо промойте проточной водой и нарежьте небольшими полосками." },
        { contentLeft: "Любым удобным способом вскипятите примерно 250 мл воды. Залейте шпинат кипятком, сразу отбросьте на сито или дуршлаг и оставьте примерно на 3-4 минуты, чтобы стекла вся жидкость." },
        { contentLeft: "Сыр натрите на средней тёрке. В глубокой миске соедините шпинат, сыр и сметану. Посолите и поперчите. Перемешайте." },
        { contentLeft: "Разбейте яйца и аккуратно отделите белки от желтков. Делайте всё не спеша, чтобы желтки остались целыми." },
        { contentLeft: "Белки перелейте в глубокую ёмкость и взбейте на средней скорости миксера примерно 3-4 минуты, до пышной устойчивой пены. (Мощность моего миксера 500 Вт.). Добавьте взбитые белки к шпинатной массе." },
        { contentLeft: "Аккуратно вмешайте их к остальным ингредиентам, стараясь меньше нарушать воздушность белков." },
        { contentLeft: "Для приготовления я буду использовать небольшие керамические жаростойкие формочки-кокотницы. Смажьте формочки растительным маслом (можно сливочным). Распределите шпинатно-белковую массу по формочкам, оставляя незаполненными примерно на 1 см до верха. В центре массы сделайте углубление." },
        { contentLeft: "Аккуратно выложите в центр каждой формочки по желтку. Отправьте формочки в духовку, разогретую до 180 градусов, примерно на 10-15 минут. Я люблю, чтобы желток оставался жидким, поэтому мне понадобилось около 12 минут. Время запекания зависит от мощности вашей духовки." },
        { contentLeft: "Воздушные яйца кокот со шпинатом, сыром и сметаной готовы. Подавайте их к столу, при желании дополнив ломтиками хлеба или овощами. Приятного аппетита!" }
        ];

    const images = [
        { src: "https://img1.russianfood.com/dycontent/images_upl/511/big_510198.jpg"},   
        { src: "https://img1.russianfood.com/dycontent/images_upl/511/big_510197.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/511/big_510199.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/511/big_510201.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/511/big_510203.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/511/big_510200.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/511/big_510202.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/511/big_510204.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/511/big_510205.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/511/big_510206.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/511/big_510207.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/511/big_510208.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/511/big_510209.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/511/big_510196.jpg"}   
    ];

    const description =  "Яйца кокот - яичница с различными добавками, запечённая в духовке в порционных формочках-кокотницах на паровой бане. Оригинальный вариант приготовления воздушных яиц кокот - со взбитыми белками, а также со шпинатом, сметаной и сыром. Отличная идея для воскресного завтрака - вкусно и красиво!" 

    return (
        <div>
            <FoodComponent header="Воздушные яйца кокот со шпинатом, сыром и сметаной" ingredients={ingredients} receipt={receipt} images={images} description={description} />           
        </div>
    );
};


export default AirEgg;
