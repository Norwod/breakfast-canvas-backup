import React from 'react';
import FoodComponent from '../../components/foodComponent';


const JapaneesePancake = () => {

    //https://www.russianfood.com/recipes/recipe.php?rid=158127

    const ingredients = [
        { contentLeft: "Яйца крупные", contentRight: "2 шт." },
        { contentLeft: "Мука пшеничная", contentRight: "40 г" },
        { contentLeft: "Молоко", contentRight: "25 г" },
        { contentLeft: "Сахар", contentRight: "40 г" },
        { contentLeft: "Разрыхлитель", contentRight: "1/2 ч. ложки" },
        { contentLeft: "Сок лимона", contentRight: "1 ч. ложка" },
        { contentLeft: "Масло растительное (для жарки)", contentRight: "1 ч. ложка" },
        { contentLeft: " Мёд", contentRight: "по вкусу" }      
    ];

    const receipt = [
        { contentLeft: "Подготовьте ингредиенты. Смешайте пшеничную муку и разрыхлитель." },
        { contentLeft: "Разбейте яйца и отделите желтки от белков." },
        { contentLeft: "В глубкой миске соедините желтки и молоко. Частями, каждый раз перемешивая, всейте муку с разрыхлителем." },
        { contentLeft: "Хорошо перемешайте, чтобы не осталось комочков." },
        { contentLeft: "В отдельной ёмкости соедините яичные белки и лимонный сок. Взбейте смесь миксером на низкой скорости 2-3 минуты, до получения устойчивой пены." },
        { contentLeft: "Небольшими порциями, в 3-4 приёма, добавьте сахар и продолжайте взбивать яичные белки до жёстких пиков (ещё примерно 3-4 минуты)." },
        { contentLeft: "Добавляя примерно по 1 ст. ложке, вмешайте взбитые белки в тесто." },
        { contentLeft: "Перемешивайте тесто аккуратно снизу вверх, чтобы сохранить воздушность и пышность массы." },
        { contentLeft: "Разогрейте антипригарную сковороду на среднем огне, смажьте растительным маслом и промокните излишки масла бумажной салфеткой. Уменьшите огонь до минимального, выложите тесто порциями по 2,5-3 ст. ложки на каждый панкейк. Влейте на дно сковороды 1-2 ч. ложки воды (чтобы получить пар в процессе приготовления). Прикройте сковороду крышкой и готовьте панкейки на минимальном огне примерно 5-6 минут, пока поверхность теста не станет матовой, а низ не подрумянится." },
        { contentLeft: "Затем аккуратно подденьте панкейки лопаткой и переверните на другую сторону. Влейте на сковороду еще 1-2 ч. ложки воды. Прикройте сковороду крышкой и готовьте панкейки ещё примерно 5-6 минут. Коснитесь кончиком пальца боковой стороны панкейка: если тесто пружинит и не прилипает к пальцу - готово. Повторите процесс с оставшимся тестом. У меня получилось 6 панкейков." },
        { contentLeft: "Воздушные японские панкейки готовы. Переложите их на тарелку и подавайте к столу, по желанию полив мёдом. Приятного аппетита!" }
        ];

    const images = [
        { src: "https://img1.russianfood.com/dycontent/images_upl/444/big_444000.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/445/big_444001.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/445/big_444002.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/445/big_444003.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/445/big_444004.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/445/big_444005.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/445/big_444006.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/445/big_444007.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/445/big_444008.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/445/big_444140.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/445/big_444141.jpg"}
        ];

    const description = "Необычный вариант панкейков из привычных продуктов - пышные оладушки-панкейки без сливочного масла. Изюминка блюда в добавлении взбитых белков, благодаря чему тесто получается воздушным, а готовые панкейки - мягкими и нежными, словно суфле. Попробуйте!";

    return (
        <div>
            <FoodComponent header="Воздушные японские панкейки" ingredients={ingredients} receipt={receipt} images={images} description={description} />
        </div>
    );
};


export default JapaneesePancake;
