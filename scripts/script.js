'use strict';
document.addEventListener('DOMContentLoaded', () => {
// * 1. Начало.
// * 2. Ожидаем click на кнопку 'Регистрация'.
// *    2.1. Открываем всплывающее окно
// * 3. Ожидаем клик на кнопку 'Закрыть':
// *    3.1. Закрываем модальное окно
// * 4. Обработка отправки форм:
// *    4.1. Проверяем заполнение полей:
// *        4.1.1. Да: Все поля заполнены.
// *        4.1.2. Нет: Показываем ошибку 'Заполните все поля'. 
// *    4.2. Проверки корректности данных.
// *    4.3. Уведомление об упешной регистрации.
// * 5. Конец.
    // Получаем элементы DOM
    const authModal = document.getElementById('authModal');
    const registerBtn = document.getElementById('registerBtn'); // Предполагаем, что у вас есть кнопка с id="registerBtn"
    const closeBtn = document.querySelector('.close');
    const switchAuthBtn = document.getElementById('switchAuthBtn');
    const authForm = document.getElementById('authForm');
    const successNotification = document.getElementById('successNotification');
    const userProfile = document.getElementById('userProfile');
    const displayUsername = document.getElementById('displayUsername');
    

    // Показываем модальное окно при клике на кнопку регистрации
    registerBtn.addEventListener('click', function() {
      authModal.style.display = 'block';
      document.getElementById('modalTitle').textContent = 'Регистрация';
      document.getElementById('fullNameFields').style.display = 'block';
      document.querySelector('button[type="submit"]').textContent = 'Зарегистрироваться';
    });
    
    // Закрываем модальное окно при клике на крестик
    closeBtn.addEventListener('click', function() {
      authModal.style.display = 'none';
    });
    
    // Закрываем модальное окно при клике вне его области
    window.addEventListener('click', function(event) {
      if (event.target === authModal) {
        authModal.style.display = 'none';
      }
    });
    
    // Переключаем между регистрацией и входом
    switchAuthBtn.addEventListener('click', function() {
      const modalTitle = document.getElementById('modalTitle');
      const fullNameFields = document.getElementById('fullNameFields');
      const submitBtn = document.querySelector('button[type="submit"]');
      
      if (modalTitle.textContent === 'Регистрация') {
        modalTitle.textContent = 'Вход';
        fullNameFields.style.display = 'none';
        submitBtn.textContent = 'Войти';
        switchAuthBtn.textContent = 'Нет аккаунта? Зарегистрироваться';
      } else {
        modalTitle.textContent = 'Регистрация';
        fullNameFields.style.display = 'block';
        submitBtn.textContent = 'Зарегистрироваться';
        switchAuthBtn.textContent = 'Уже есть аккаунт? Войти';
      }
    });
    
    // Обработка отправки формы
    authForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Здесь должна быть логика отправки данных на сервер
      // Для примера просто имитируем успешную регистрацию
      
      // Получаем значения полей
      const username = document.getElementById('username').value;
      
      // Скрываем модальное окно
      authModal.style.display = 'none';
      
      // Показываем уведомление об успехе
      successNotification.style.display = 'block';
      
      // Через 3 секунды скрываем уведомление
      setTimeout(function() {
        successNotification.style.display = 'none';
      }, 3000);
      
      // Показываем профиль пользователя в шапке
      displayUsername.textContent = username;
      userProfile.style.display = 'block';
      
      // Очищаем форму
      authForm.reset();
    });

    const scrollUpButton = document.querySelector('.scroll-up');

if (scrollUpButton) {
    const windowHeight = document.documentElement.clientHeight;

    document.addEventListener('scroll', () => {
        let scrollPageY = window.scrollY; 

        if (scrollPageY >= 300) { 
          scrollUpButton.classList.add('scroll-up--show');
      } else {
          scrollUpButton.classList.remove('scroll-up--show');
      }
    });

    scrollUpButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
const doctorsContainer = document.querySelector(".doctors-grid");

if (doctorsContainer) {
    const dataDoctorsNames = [
        "Иванов Юрий Степанович",
        "Петрова Анна Петровна",
        "Сидоров Сергей Александрович",
        "Кузнецова Ольга Васильевна",
        "Фёдоров Роман Викторович",
        "Захарова Наталья Петровна",
        "Смирнов Алексей Евгеньевич",
        "Дмитриева Светлана Игоревна",
        "Алексеева Мария Андреевна"
    ];

    const doctorTitles = doctorsContainer.querySelectorAll(".doctors_subtitle");

    doctorTitles.forEach((item, index) => {
        if (dataDoctorsNames[index]) {
            item.textContent = dataDoctorsNames[index];
        }
    });
    // Объявляем переменную, которая будет содержать контейнер для карточек врачей
const doctorsGrid = document.querySelector('.doctors__title');

if (doctorsGrid) {
    // Находим родительский контейнер для карточек (div с классом .doctors-grid)
    const container = document.querySelector('.doctors-grid');

    // Данные врачей (можете заменить или расширить по необходимости)
    const doctorsData = [
        {
            imgSrc: 'images/ivanov_yuri_stepanovich.jpg',
            altText: 'Врач 1',
            name: 'Иванов Юрий Степанович',
            description: 'Терапевт. Опыт работы: 10 лет.'
        },
        {
            imgSrc: 'images/petrova_anna_petrovna.jpg',
            altText: 'Врач 2',
            name: 'Петрова Анна Петровна',
            description: 'Хирург. Опыт работы: 8 лет.'
        },
        {
            imgSrc: 'images/sidorov_sergey_alexandrovich.jpg',
            altText: 'Врач 3',
            name: 'Сидоров Сергей Александрович',
            description: 'Педиатр. Опыт работы: 5 лет.'
        },
        {
            imgSrc: 'images/kuznetsova_olga_vasilievna.jpg',
            altText: 'Врач 4',
            name: 'Кузнецова Ольга Васильевна',
            description: 'Офтальмолог. Опыт работы: 7 лет.'
        },
        {
            imgSrc: 'images/fedorov_roman _viktorovich.jpg',
            altText: 'Врач 5',
            name: 'Фёдоров Роман Викторович',
            description: 'Невролог. Опыт работы: 6 лет.'
        },
        {
            imgSrc: 'images/zakharova_natalya_petrovna.jpg',
            altText: 'Врач 6',
            name: 'Захарова Наталья Петровна',
            description: 'Стоматолог. Опыт работы: 9 лет.'
        },
        {
            imgSrc: 'images/smirnov_alexey_evgenievich.jpg',
            altText: 'Врач 7',
            name: 'Смирнов Алексей Евгеньевич',
            description: 'Онколог. Опыт работы: 4 года.'
        },
        {
            imgSrc: 'images/dmitrieva_svetlana_igorevna.jpg',
            altText: 'Врач 8',
            name: 'Дмитриева Светлана Игоревна',
            description: 'Врач общей практики. Опыт работы: 12 лет.'
        },
        {
            imgSrc: 'images/alekseeva_maria_andreevna.jpg',
            altText: 'Врач 9',
            name: 'Алексеева Мария Андреевна',
            description: 'Акушер-гинеколог. Опыт работы: 11 лет.'
        }
   ];

    // Функция для создания карточки врача
    const createDoctorCard = (imgSrc, altText, name, description) => {
        return `
            <article class="doctor-item">
                <img src="${imgSrc}" alt="${altText}">
                <h3 class="doctors_subtitle">${name}</h3>
                <p>${description}</p>
            </article>
        `;
    };

    // Проходим по массиву и добавляем каждую карточку в DOM
    for (const doctor of doctorsData) {
        const cardHTML = createDoctorCard(doctor.imgSrc, doctor.altText, doctor.name, doctor.description);
        container.insertAdjacentHTML('beforeend', cardHTML);
    }
}
// Находим контейнер навигации
const navigation = document.querySelector('.navigation');

if (navigation) {
    // Находим список внутри навигации
    const navList = navigation.querySelector('ul');
    
    // Данные для меню (добавлены пункты из вашего закомментированного HTML)
    const menuData = {
        services: {
            link: '#services',
            title: 'Наши услуги'
        },
        doctors: {
            link: '#doctors',
            title: 'Врачи'
        },
        schedule: {
            link: '#doctors-schedule',
            title: 'Расписание работы врачей'
        },
        map: {
            link: '#map-search',
            title: 'Поиск прикрепления участка'
        },
        contact: {
            link: '#contact',
            title: 'Контакты'
        }
    };

    // Функция для создания HTML-строки пункта меню
    const createMenuItem = (link, title) => {
        return `
            <li><a href="${link}">${title}</a></li>
        `;
    };

    // Добавляем все пункты меню в список
    for (const itemKey in menuData) {
        const menuItem = menuData[itemKey];
        const menuItemHTML = createMenuItem(menuItem.link, menuItem.title);
        navList.insertAdjacentHTML('beforeend', menuItemHTML);
    }
}
//Задание 3.6
const cardsImages = document.querySelector(".doctors");

if (cardsImages) {
    const cardListImages = cardsImages.querySelector(".doctors-grid");
    
    const apiUrl = "images.json";

    const createCard = (doctorData) => {
        return `
            <article class="doctor-item">
                <img src="${doctorData.url}" 
                     alt="${doctorData.full_name}" 
                     width="${doctorData.image_size.width}" 
                     height="${doctorData.image_size.height}">
                <h3 class="doctors_subtitle">${doctorData.full_name}</h3>
                <p>${doctorData.specialty}. Опыт работы: ${doctorData.experience}</p>
            </article>
        `;
    };

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            cardListImages.innerHTML = '';
            
            data.doctors.forEach(doctor => {
                const cardHTML = createCard(doctor);
                cardListImages.insertAdjacentHTML('beforeend', cardHTML);
            });
        })
        .catch(error => {
            console.error('Ошибка при загрузке данных:', error);
        });
}
const preloader = document.querySelector('.preloader');
const content = document.querySelector('.content');
if (preloader && content) {
    setTimeout(() => {
        // Скрываем прелоадер
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';

        // Показываем контент
        content.style.display = 'block';

        // Удаляем элемент из DOM
        preloader.remove();
    }, 3000); // Задержка 3 секунды
}
const slider = document.querySelector('.swiper');

if (slider) {
    const swiper = new Swiper(slider, {
        slidesPerView: 1, // По умолчанию для мобильных
        spaceBetween: 20,
        loop: true,
        
        // Адаптивная настройка
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 25
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        },

        // Пагинация
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Навигационные стрелки
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Дополнительные настройки
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
    });
}

}
  });