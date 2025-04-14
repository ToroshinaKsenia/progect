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
}
  });