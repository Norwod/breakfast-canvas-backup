import React from 'react';
import FoodComponent from '../../components/foodComponent';


const Shakshuka = () => {

    //https://www.russianfood.com/recipes/recipe.php?rid=141558

    const ingredients = [
        { contentLeft: "Помидоры", contentRight: "4 шт." },
        { contentLeft: "Яйца куриные", contentRight: "4 шт." },
        { contentLeft: "Чеснок", contentRight: "4 зубка" },
        { contentLeft: "Перец острый", contentRight: "0,5 стручка" },
        { contentLeft: "Соль", contentRight: "1 ч. ложка без верх" },
        { contentLeft: "Паприка молотая", contentRight: "1 ч. ложка" },
        { contentLeft: "Перец черный молотый", contentRight: "0,25 ч. ложки" },
        { contentLeft: "Масло оливковое или растительное", contentRight: "70 г" },

    ];

    const receipt = [
        { contentLeft: "Очищаем помидоры от кожицы. 4 помидора надрезаем крест-накрест, заливаем кипятком, оставляем на 1-2 минуты, споласкиваем холодной водой и легко удаляем кожицу." },
        { contentLeft: "Подготовленные помидоры нарезаем кубиками средней величины. 4 зубчика чеснока чистим, моем, мелко нарезаем. Половину острого перца нарезаем тонкими кольцами." },
        { contentLeft: "В сковороде с толстым дном разогреваем 70 граммов оливкового или другого растительного масла, добавляем подготовленный чеснок, перемешиваем." },
        { contentLeft: "Добавляем подготовленный острый перец, еще раз перемешиваем и закладываем нарезанные кубиками помидоры." },
        { contentLeft: "Делаем маленький огонь и тушим, приблизительно, 12 минут, время от времени перемешивая. В процессе тушения добавляем 1 чайную ложку соли без верха или по вкусу, 1 чайную ложку сладкой паприки и ¼ чайной ложки чёрного молотого перца." },
        { contentLeft: "Аккуратно разбиваем в сковороду 4 яйца, жарим 3-4 минуты на маленьком огне, чтобы белок зажарился, а желток остался жидким, как в яичнице глазунье. Чуть-чуть присыпаем желтки щепоткой соли и щепоткой черного молотого перца." },
        { contentLeft: "Подаем шакшуку в сковороде, с большим количеством свежего домашнего хлеба, чтобы можно было макать в соус." }
    ];

    const images = [
        { src: "https://img1.russianfood.com/dycontent/images_upl/204/big_203052.jpg" },
        { src: "https://img1.russianfood.com/dycontent/images_upl/204/big_203053.jpg" },
        { src: "https://img1.russianfood.com/dycontent/images_upl/204/big_203054.jpg" },
        { src: "https://img1.russianfood.com/dycontent/images_upl/204/big_203055.jpg" },
        { src: "https://img1.russianfood.com/dycontent/images_upl/204/big_203056.jpg" },
        { src: "https://img1.russianfood.com/dycontent/images_upl/204/big_203057.jpg" },
        { src: "https://img1.russianfood.com/dycontent/images_upl/204/big_203058.jpg" },
        { src: "https://img1.russianfood.com/dycontent/images_upl/204/big_203059.jpg" },
        { src: "https://img1.russianfood.com/dycontent/images_upl/204/big_203060.jpg" },
        { src: "https://img1.russianfood.com/dycontent/images_upl/204/big_203061.jpg" }
    ];

    return (
        <div>
            <FoodComponent header="Шакшука" ingredients={ingredients} receipt={receipt} images={images} />

        </div>
    );
};


export default Shakshuka;
