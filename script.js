/*
=====================================
🖼 ЗАГРУЗКА СВОЕГО ИЗОБРАЖЕНИЯ
=====================================
*/

const imageInput = document.getElementById("imageInput");
const previewImage = document.getElementById("previewImage");

imageInput.addEventListener("change", function(event){

    // Получаем файл
    const file = event.target.files[0];

    // Если файл выбран
    if(file){

        // Создаём URL картинки
        const imageURL = URL.createObjectURL(file);

        // Показываем картинку
        previewImage.src = imageURL;

        // Делаем картинку видимой
        previewImage.style.display = "block";
    }

});


/*
=====================================
🎮 СОЗДАНИЕ 10 УРОВНЕЙ
=====================================
*/

const levelContainer = document.querySelector(".level-list");

// Цикл от 1 до 10
for(let i = 1; i <= 10; i++){

    // Создаём div
    const level = document.createElement("div");

    // Добавляем класс
    level.classList.add("level");

    /*
    Если уровень чётный
    => ночь
    иначе => день
    */

    if(i % 2 === 0){

        level.classList.add("night");

        level.innerHTML = `
            <h3>Уровень ${i}</h3>
            <p>🌙 Ночь</p>
            <p>Скорость: ${i * 10}%</p>
        `;

    }else{

        level.classList.add("day");

        level.innerHTML = `
            <h3>Уровень ${i}</h3>
            <p>☀ День</p>
            <p>Скорость: ${i * 10}%</p>
        `;

    }

    // Добавляем уровень на сайт
    levelContainer.appendChild(level);

}


/*
=====================================
🌆 ПЛАВНАЯ ПРОКРУТКА
=====================================
*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});
