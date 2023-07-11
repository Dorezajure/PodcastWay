// Получаю элемент где лежат все карточки с курсами и кнопку, нажав на которую должны добавиться 2 новые карточки 
const elements = {
    button:  document.getElementById("btn"),
    course: document.getElementById("courseBtn"),
    expensesList: document.querySelector(".course__wrapper")
}

// Прослушка на кнопку
elements.button.addEventListener("click", function(){
    // Карточка товара, записанная в виде шаблонной строки (таких будет две, но пока хотя бы одну бы добавить)
    const cardOne = `<div class="course__card">
                    <div class="course__card__img"><img src="./img/teacher__one.png" alt="course"></div>
                    <div class="course__card__content">
                        <div class="course__card__format"><p class="course__card__format__text">Онлайн-формат</p></div>
                        <div class="course__card__pount"><p>1 Поток</p></div>
                        <div class="course__card__text"><h3>“Запуск подкаста с нуля”</h3></div>
                        <div class="course__card__title"><p>Задай собственную культуру подкастов, прямо у себя дома! Что тебе для этого нужно? Тебе потребуется всего лишь ноутбук, микрофон, необходимый предустановленный софт и немного свобожного времени. Действуй!</p></div>
                        <button class="course__card__btn">Узнать подробнее</button>
                    </div>
                </div>`;
    const cardTwo = `<div class="course__card">
                        <div class="course__card__img"><img src="./img/teacher__two.png" alt="course"></div>
                        <div class="course__card__content">
                            <div class="course__card__format"><p class="course__card__format__text">Онлайн-формат</p></div>
                            <div class="course__card__pount"><p>1 Поток</p></div>
                            <div class="course__card__text"><h3>“Запуск подкаста с нуля”</h3></div>
                            <div class="course__card__title"><p>Задай собственную культуру подкастов, прямо у себя дома! Что тебе для этого нужно? Тебе потребуется всего лишь ноутбук, микрофон, необходимый предустановленный софт и немного свобожного времени. Действуй!</p></div>
                            <button class="course__card__btn">Узнать подробнее</button>
                        </div>
                    </div>`
    // Добавляю карточку в конец списка 
    elements.expensesList.insertAdjacentHTML('afterend', cardOne);
    elements.expensesList.insertAdjacentHTML('afterend', cardTwo);
});

/*
1. Получить кнопку
2. По клику добавляем 2 карточки с курсами 
3. Выводим на страницу 2 карточки 
*/

