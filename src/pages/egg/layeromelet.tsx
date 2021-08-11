import React from 'react';
import FoodComponent from '../../components/foodComponent';


const LayerOmelet = () => {

    //https://www.russianfood.com/recipes/recipe.php?rid=154050

    const ingredients = [
        { contentLeft: "Яйца", contentRight: "6-7 шт." },
        { contentLeft: "Ветчина", contentRight: "125 г (6 ломтиков)" },
        { contentLeft: "Сыр твёрдый", contentRight: "80 г (6 ломтиков)" },
        { contentLeft: "Помидор", contentRight: "120 г (9 кусочков)" },
        { contentLeft: "Соль", contentRight: "2 щепотки" },
        { contentLeft: "Перец чёрный молотый", contentRight: "2 щепотки" },
        { contentLeft: "Масло растительное (для жарки)", contentRight: "1 ч. ложка" },
        { contentLeft: "Листья салата (по желанию)", contentRight: "2 шт." }       
    ];

    const receipt = [
        { contentLeft: "Отделите яичные белки от желтков и поместите в две разные ёмкости. Добавьте в каждую ёмкость по щепотке соли и чёрного перца и слегка взбейте вилкой, чтобы соль растворилась и масса стала однородной." },
        { contentLeft: "Нарежьте помидор полукружиями толщиной примерно 0,5 см, ветчину - кружочками, сыр - тонкими пластинками. Понадобится по 6 ломтиков ветчины и сыра и 9 кусочков помидора." },
        { contentLeft: "Разогрейте сковороду на среднем огне и смажьте тонким слоем растительного масла. Вылейте на сковороду небольшую порцию яичных белков и распределите по дну, чтобы получился тонкий блинчик. Обжарьте белок 20-30 секунд, пока он не схватится." },
        { contentLeft: "Затем выложите на правую половину белкового блинчика ветчину. ложите блинчик пополам, слева направо, накрыв ветчину. ложите блинчик пополам, слева направо, накрыв ветчину." },
        { contentLeft: "На образовавшееся свободное пространство вылейте немного яичного желтка и распределите тонким слоем. Когда желток немного схватится, добавьте 3 кусочка помидора." },
        { contentLeft: "Снова сложите омлет пополам, теперь уже справа налево, накрыв помидоры. На образовавшееся пространство налейте порцию белка, выложите 2 ломтика сыра. Накройте сыр левой половинкой омлета." },
        { contentLeft: "Влейте в сковороду следующую порцию яичных желтков, выложите 2 ломтика сыра и снова сложите омлет справа налево, накрыв сыр." },
        { contentLeft: "Повторите все слои ещё раз поочередно: белок + ветчина, желток + помидоры, белок + сыр, желток + сыр." },
        { contentLeft: "Влейте в сковороду последнюю порцию белков, выложите ветчину и помидоры." },
        { contentLeft: "Сложите омлет пополам, накрыв ветчину и помидоры. Потомите омлет на сковороде ещё 30-40 секунд, чтобы последний слой начинки прогрелся." },
        { contentLeft: "Слоёный омлет с ветчиной, помидорами и сыром готов. Переложите омлет на тарелку, при желании дополните листьями салата и подавайте к столу. Приятного аппетита!" },
        ];

    const images = [
        { src: "https://img1.russianfood.com/dycontent/images_upl/380/big_379207.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/380/big_379208.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/380/big_379209.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/380/big_379211.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/380/big_379212.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/380/big_379213.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/380/big_379214.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/380/big_379215.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/380/big_379216.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/380/big_379217.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/380/big_379219.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/380/big_379220.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/380/big_379221.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/380/big_379225.jpg"},
        { src: "https://img1.russianfood.com/dycontent/images_upl/380/big_379226.jpg"}        
    ];

    return (
        <div>
            <FoodComponent header="Слоёный омлет с ветчиной, помидорами и сыром" ingredients={ingredients} receipt={receipt} images={images} />           
        </div>
    );
};


export default LayerOmelet;
