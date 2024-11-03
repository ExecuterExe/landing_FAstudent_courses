document.addEventListener('DOMContentLoaded', function () {
    // Мобильное меню
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // FAQ аккордеон
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const currentlyActive = document.querySelector('.faq-item.active');
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
            }
            item.classList.toggle('active');
        });
    });

    // Модальные окна для курсов
    const courseCards = document.querySelectorAll('.course-card');
    const modal = document.getElementById('courseModal');
    const closeModal = document.querySelector('.close-modal');

    // Данные о курсах
    const coursesData = {
        'oge-math': {
            title: 'Математика ОГЭ',
            program: [
                'Алгебраические выражения',
                'Уравнения и неравенства',
                'Функции и графики',
                'Геометрические задачи',
                'Решение текстовых задач'
            ],
            duration: '22',
            format: 'Очно, 1 раз в неделю по 45 минут',
            price: 'Договорная'
        },
        'oge-informatics': {
            title: 'Информатика ОГЭ',
            program: [
                'Системы счисления',
                'Алгоритмизация',
                'Программирование на Pascal',
                'Работа с таблицами',
                'Логические выражения'
            ],
            duration: '32',
            format: 'Очно, 1 раз в неделю по 45 минут',
            price: 'Договорная'
        },
    };

    courseCards.forEach(card => {
        card.addEventListener('click', () => {
            const courseId = card.dataset.course;
            const courseData = coursesData[courseId];

            if (courseData) {
                document.getElementById('modalTitle').textContent = courseData.title;
                const programList = document.getElementById('courseProgram');
                programList.innerHTML = '';
                courseData.program.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    programList.appendChild(li);
                });
                document.getElementById('courseDuration').textContent = courseData.duration;
                document.getElementById('courseFormat').textContent = courseData.format;
                document.getElementById('coursePrice').textContent = courseData.price;

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Кнопка "Наверх"
    const scrollToTopBtn = document.getElementById('scrollToTop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Плавная прокрутка для навигационных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Закрываем мобильное меню при клике на ссылку
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });
    });

    // Валидация и отправка формы
    const applicationForm = document.getElementById('applicationForm');

    if (applicationForm) {
        applicationForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Получаем значения полей
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const course = document.getElementById('course').value;
            const message = document.getElementById('message').value;

            // Простая валидация
            if (!name || !email || !phone || !course) {
                alert('Пожалуйста, заполните все обязательные поля');
                return;
            }

            // Валидация email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Пожалуйста, введите корректный email');
                return;
            }

            // Валидация телефона (простая)
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            if (!phoneRegex.test(phone)) {
                alert('Пожалуйста, введите корректный номер телефона');
                return;
            }

            // Здесь будет отправка данных на сервер
            // Пока просто имитируем отправку
            const formData = {
                name,
                email,
                phone,
                course,
                message
            };

            console.log('Отправка данных:', formData);

            // Имитация отправки
            const submitBtn = applicationForm.querySelector('.submit-btn');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Отправка...';

            setTimeout(() => {
                alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
                applicationForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = 'Отправить заявку';
            }, 1500);
        });
    }

    // Анимация появления элементов при скролле
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.fade-in');

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;

            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Инициализация анимации при загрузке и скролле
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);

    // Маска для телефона
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function (e) {
            let x = e.target.value.replace(/\D/g, '')
                .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/);
            e.target.value = !x[2] ? x[1] :
                '+' + x[1] + ' (' + x[2] + ') ' +
                (x[3] ? x[3] : '') +
                (x[4] ? '-' + x[4] : '');
        });
    }

    // Обработка ресайза окна
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Пересчет позиций элементов при необходимости
            animateOnScroll();
        }, 250);
    });

    // Предзагрузка изображений
    const preloadImages = () => {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
        });
    };

    // Инициализация предзагрузки изображений
    window.addEventListener('load', preloadImages);

    // Обработка ошибок
    window.onerror = function (msg, url, lineNo, columnNo, error) {
        console.error('Error: ' + msg + '\nURL: ' + url + '\nLine: ' + lineNo + '\nColumn: ' + columnNo + '\nError object: ' + JSON.stringify(error));
        return false;
    };

    // Обработка офлайн/онлайн статуса
    window.addEventListener('online', function () {
        console.log('Соединение восстановлено');

    });

    window.addEventListener('offline', function () {
        console.log('Соединение потеряно');

    });

    window.addEventListener('beforeunload', function (e) {
        const form = document.getElementById('applicationForm');
        if (form && Array.from(form.elements).some(element => element.value)) {
            e.preventDefault();
            e.returnValue = '';
        }
    });
});