document.addEventListener('DOMContentLoaded', function () {
    // Мобильное меню
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    function toggleMenu() {
        // Переключаем классы
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        // Блокируем/разблокируем скролл
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
    }

    // Обработчик клика по бургеру
    hamburger.addEventListener('click', toggleMenu);

    // Закрываем меню при клике на ссылку
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Закрываем меню при ресайзе окна
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Закрываем меню при клике вне его
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) &&
            !navLinks.contains(e.target) &&
            navLinks.classList.contains('active')) {
            toggleMenu();
        }
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
            brief: 'Плавная подготовка к экзамену без нервов и лишнего напряжения',
            image: 'assets/oge-math.png',
            description: 'Добро пожаловать на наш интенсивный курс подготовки к ОГЭ по математике! За 25 насыщенных занятий мы проведем вас через все аспекты экзамена, от базовых понятий до сложных задач. Начнем с подробного разбора структуры ОГЭ и критериев оценки, затем погрузимся в решение практических задач. Вы освоите все ключевые темы: числа и вычисления, уравнения и неравенства, функции и графики, геометрию и теорию вероятностей. Особое внимание уделим сложным заданиям второй части, включая текстовые и геометрические задачи. Наш курс построен на последовательном изучении материала с постоянной практикой и закреплением знаний. Завершим подготовку интенсивным повторением и психологическим настроем на успех. Присоединяйтесь!',
            program: [
                'Занятие 1: Введение в экзамен (формат ОГЭ, структура, критерии оценки, обзор демоверсии)',
                'Занятие 2-3: Разбор задач с практическим содержанием (задания 1-5)',
                'Занятие 4: Числа и вычисления (задания 6 и 8)',
                'Занятие 5: Числовые неравенства, координатная прямая (задание 7)',
                'Занятие 6: Решение линейных и квадратных уравнений (задание 9)',
                'Занятие 7: Теория вероятностей (задание 10)',
                'Занятие 8: Графики функций (задание 11)',
                'Занятие 9: Расчеты по формулам (задание 12)',
                'Занятие 10: Неравенства и системы неравенств (задание 13)',
                'Занятие 11: Прогрессии (задание 14)',
                'Занятие 12: Треугольники (задание 15)',
                'Занятие 13: Окружность, круг и их элементы (задание 16)',
                'Занятие 14: Четырехугольники (задание 17)',
                'Занятие 15: Фигуры на квадратной решетке (задание 18)',
                'Занятие 16-17: Повторение по 1 (тестовой) части',
                'Занятие 18: Разбор задания 20',
                'Занятие 19: Текстовые задачи (задание 21)',
                'Занятие 20: Геометрические задачи на вычисление (задание 23)',
                'Занятие 21-24: Практика по всем темам (задания 1-23)',
                'Занятие 25: Подготовка к экзамену (советы, психологическая подготовка, повторение)'
            ],
            lifehacks: [
                'Освоить алгоритмы быстрого решения типовых заданий ОГЭ',
                'Научиться эффективно распределять время между заданиями на экзамене',
                'Развить навыки проверки своих решений и поиска ошибок',
                'Освоить техники решения геометрических задач без лишних вычислений',
                'Научиться применять формулы сокращенного умножения для быстрого счета',
                'Освоить методы решения текстовых задач с помощью уравнений и систем',
                'Научиться работать с графиками функций и координатной плоскостью',
                'Научиться быстро находить ошибки в условиях задач и избегать ловушек',
                'Развить навыки правильного оформления заданий с развернутым ответом'
            ],
            duration: '25 занятий',
            price: '550 руб. за занятие'
        },
        'oge-informatics': {
            title: '',
            brief: '',
            image: '',
            description: '',
            program: [
                ''
            ],
            lifehack: [
                ''
            ],
            duration: '',
            price: ''
        },
        'oge-russian': {
            title: 'Русский ОГЭ',
            brief: 'Эффективная подготовка к ОГЭ по русскому языку с проверенными лайфхаками, опробованные на личном опыте',
            image: 'assets/oge-russian.png',
            description: 'Добро пожаловать на наш интенсивный курс подготовки к ОГЭ по русскому языку! За 18 насыщенных занятий мы проведем вас через все аспекты экзамена, от базовых понятий до сложных заданий. Начнем с подробного разбора структуры ОГЭ и критериев оценивания. Затем погрузимся в ключевые темы: синтаксический анализ, пунктуацию, орфографию, грамматические нормы и анализ текста. Особое внимание уделим подготовке к сочинению и изложению, а также устной части экзамена. Курс включает интенсивную практику, разбор сложных случаев и домашние задания для закрепления материала. Мы проведем пробный экзамен в условиях, максимально приближенных к реальным, с последующим детальным разбором. Завершим подготовку занятием по психологической готовности к экзамену. Присоединяйтесь, и вместе мы превратим подготовку к ОГЭ по русскому языку в эффективный и увлекательный процесс!',
            program: [
                'Занятие 1: Введение в экзамен (структура ОГЭ, критерии оценивания)',
                'Занятие 2-3: Синтаксический анализ предложения',
                'Занятие 4-5: Пунктуация',
                'Занятие 6-7: Орфографический анализ слов',
                'Занятие 8: Грамматические (морфологические) нормы русского языка',
                'Занятие 9: Синонимические словосочетания',
                'Занятие 10: Смысловой и лексический анализ текста, выразительные средства',
                'Занятие 11: Темы для сочинений',
                'Занятие 12-13: Итоговое повторение',
                'Занятие 14: Моделирование экзамена',
                'Занятие 15: Разбор пробного экзамена',
                'Занятие 16: Психологическая подготовка',
                'Занятие 17: Подготовка к изложению',
                'Занятие 18: Подготовка к устному экзамену'
            ],
            lifehacks: [
                'Научиться быстро определять грамматическую основу в сложных предложениях',
                'Освоить эффективные методы синтаксического анализа предложений',
                'Овладеть техниками применения правил пунктуации в нестандартных случаях',
                'Развить навыки орфографического анализа для сложных слов',
                'Научиться распознавать и исправлять нарушения морфологических норм',
                'Освоить приемы быстрой замены словосочетаний синонимичными конструкциями',
                'Научиться эффективно находить в тексте эпитеты, метафоры и другие средства выразительности',
                'Развить навыки написания сжатого изложения с сохранением ключевых моментов',
                'Освоить стратегии эффективного прохождения устной части экзамена',
                'Научиться применять техники психологической подготовки для снижения стресса на экзамене',
                'Овладеть методами эффективного распределения времени при выполнении всех заданий ОГЭ',
                'Научиться быстро анализировать свои ошибки после пробного экзамена для улучшения результатов'
            ],
            duration: '18 занятий',
            price: '550 руб. за занятие'
        },
        'oge-social': {
            title: 'Обществознание ОГЭ',
            brief: 'Эффективная подготовка к ОГЭ по обществознанию: 42 занятия с фокусом на практику и лайфхаками!',
            image: 'assets/oge-social.png',
            description: 'Добро пожаловать на наш интенсивный курс подготовки к ОГЭ по обществознанию! За 42 занятия, проходящих 1-2 раза в неделю, мы глубоко погрузимся во все ключевые разделы экзамена: человек и общество, экономика, социология, политика и право. Наш курс построен на принципе максимальной эффективности: вся теория представлена в удобных скриптах, что позволяет рационально использовать время и сосредоточиться на практике. Мы уделяем огромное внимание решению заданий, подобных экзаменационным, чтобы вы были полностью готовы к формату ОГЭ',
            program: [
                'Экономика (15 тем, 8 занятий)',
                'Практикум: решение задания 12',
                'Политика (6 тем, 3 занятия)',
                'Практикум: работа над второй частью ОГЭ',
                'Право (11 тем, 6 занятий)',
                'Практикум: решение полных вариантов ОГЭ',
                'Социология (11 тем, 5 занятий)',
                'Человек и его окружение (8 тем, 4 занятия)',
                'Практикум: углубленная работа над второй частью ОГЭ',
                'Общество, в котором мы живем (6 тем, 3 занятия)',
                'Практикум: дополнительная работа над заданием 12',
                'Человек в мире культуры (7 тем, 4 занятия)',
                'Итоговый практикум: решение полных вариантов ОГЭ'
            ],

            lifehacks: [
                'Доступ к базе актуальных заданий, аналогичных экзаменационным',
                'Интенсивная практика решения заданий ОГЭ + варианты',
                'Использование эффективных скриптов для быстрого усвоения теории',
                'Специальные техники для эффективного решения задания 12',
                'Стратегии работы над второй частью ОГЭ, отрабатываемые на отдельных занятиях',
                'Методики быстрого усвоения большого объема информации по экономике и праву'
            ],
            duration: '42 занятия (1-2 р. в неделю)',
            price: '550 руб. за занятие'
        },
        'fun-math': {
            title: 'Занимательная математика',
            brief: 'Увлекательное путешествие в мир чисел, логики и творческого мышления. Он предназначен для учеников, желающих открыть для себя красоту и практическую пользу математики, развить ключевые навыки решения проблем и применить их в реальной жизни.',
            image: 'assets/math-fun.png',
            description: 'Добро пожаловать в удивительный мир "Занимательной математики" – курса, который превратит ваше представление о царице наук! Здесь вы станете настоящими математическими волшебниками, исследуя захватывающие области: от комбинаторики и криптографии до теории вероятностей и геометрии. Наш курс – это увлекательное приключение, созданное для любознательных школьников, где вы не только получите теоретические знания, но и примените их на практике. Вы научитесь решать сложные задачи, участвовать в интеллектуальных играх, развивать логическое мышление и создавать собственные математические шедевры. Присоединяйтесь к нам, и вы откроете для себя красоту и практическую пользу математики, которая станет вашим верным спутником на пути к успеху!',
            program: [
                '1. Что такое занимательная математика? [Игра "Математический марафон"]',
                '2. Логические задачки (решение и обсуждение методов) [Групповая работа: решение задач в командах]',
                '3. Математические головоломки (изучение типов, примеры, судоку) [Конкурс: "Король судоку"]',
                '4. Комбинаторика (принципы, задачи на перестановки и комбинации) [Викторина: "Комбинаторный взрыв"]',
                '5. Игры, развивающие математическое мышление (карточные, настольные) [Командные соревнования]',
                '6. Числовые последовательности (изучение, задачи на нахождение общего члена) [Конкурс: "Найди закономерность"]',
                '7. Математические ребусы (знакомство, решение, создание) [Конкурс: "Лучший ребус"]',
                '8. Геометрические задачи (задачи на построение, свойства фигур) [Практикум: "Геометрическое конструирование"]',
                '9. Основы математической криптографии (принципы шифрования) [Игра "Крипто-шифр"]',
                '10. Вероятность и случайные события (понятия, эксперименты, задачи) [Игра с кубиками]',
                '11. Алгебраические головоломки (уровни сложности, создание и решение уравнений) [Конкурс: "Алгебраический лабиринт"]',
                '12. Математика и искусство (фракталы, симметрия) [Практикум: "Математическое искусство"]',
                '13. История математики (исторические этапы, великие математики) [Викторина: "Математические гении"]',
                '14. Применение математики в природе (модели в биологии и экологии) [Исследовательский проект: "Математика вокруг нас"]',
                '15. Задачи на логику и анализ (игра в "мозгобойни", стратегии решения) [Турнир "Математические бои"]',
                '16. Финансовая математика (проценты, налоги, скидки) [Практикум: "Математика в быту"]',
                '17. Математика и технологии (применение в IT и программировании) [Мастер-класс: "Программирование для математиков"]',
                '18. Математические модели (введение, создание, применение) [Проект: "Моделируем реальность"]',
                '19. Спорт и математика (анализ статистики, вероятности исходов) [Исследование: "Математика в спорте"]',
                '20. Конкурсная математика (подготовка к конкурсам, разбор задач) [Тренировочные соревнования]',
                '21. Работа над ошибками (анализ ошибок, методы улучшения) [Индивидуальные консультации]',
                '22. Проектные занятия (создание и презентация проектов) [Конкурс проектов]',
                '23. Повторение пройденного материала (обзор интересных тем) [Игра-quiz]',
                '24. Заключительное занятие (обсуждение курса, опрос)'
            ],
            lifehacks: [
                'Научиться быстро и эффективно решать логические задачи',
                'Развить навыки комбинаторного мышления для решения сложных проблем',
                'Улучшить способность находить закономерности и решать головоломки',
                'Освоить основы криптографии для защиты личной информации',
                'Понимать принципы вероятности для принятия решений в условиях неопределенности',
                'Развить логическое и аналитическое мышление для успеха в жизни',
                'Научиться применять математику в программировании и IT',
                'Получить опыт работы над проектами и презентации результатов',
                'Подготовиться к участию в математических конкурсах и олимпиадах',
                'Понять, как математика связана с различными областями жизни, такими как спорт, природа и искусство'
            ],
            duration: '24 занятия',
            price: '350 руб. за занятие'
        },
        'fun-russian': {
            title: '',
            brief: '',
            image: '',
            description: '',
            program: [
                ''
            ],
            lifehack: [
                ''
            ],
            duration: '',
            price: ''
        },
        'fun-informatics': {
            title: 'Занимательаня информатика',
            brief: 'Откройте мир IT: от основ до собственных проектов! Развивайте цифровые навыки и креативность в увлекательной форме. Идеально для школьников 7-9 классов, мечтающих о будущем в мире технологий',
            image: 'assets/informatics-fun.png',
            description: "Добро пожаловать в мир 'Занимательной информатики' – курса, который превращает сложное в простое, а скучное в увлекательное! Здесь вы не просто изучите компьютеры, а станете настоящими цифровыми волшебниками.\n\n" +
                "Наш курс – это интерактивное приключение в мире современных технологий, созданное специально для любознательных школьников 7-9 классов. Мы разработали программу, которая не только даст вам теоретические знания, но и позволит применить их на практике.\n\n" +
                "Вместе мы исследуем четыре захватывающих раздела: введение в информатику, алгоритмы и логику, цифровую культуру и безопасность, а также создадим собственные проекты. Вы узнаете, как устроены компьютеры, освоите основы программирования и научитесь безопасно путешествовать по просторам интернета.\n\n" +
                "Но это еще не все! Мы поможем вам развить алгоритмическое мышление и логику, которые пригодятся не только в информатике, но и в повседневной жизни. Вы также узнаете, как цифровые технологии влияют на общество и какие профессии будущего вас ждут.\n\n" +
                "В конце курса вас ждет настоящий вызов – создание собственного проекта! Вы сможете применить все полученные знания, проявить креативность и научиться работать в команде. А после – с гордостью представить свое творение на суд зрителей.\n\n" +
                "Наш курс – это не просто уроки, а увлекательное путешествие в мир информационных технологий. Присоединяйтесь к нам, и вы откроете двери в удивительное цифровое будущее!",
            program: [
                'Раздел 1: Введение в информатику (5 занятий)',
                '1. Знакомство с предметом (история, информация, системы счисления) [Викторина "Угадай устройство компьютера" с картинками',
                '2. Компьютер, устройство и работа (компоненты, их функции, ПО и ОС) [Конкурс: "Сбор ПК" по картинкам]',
                '3. Интернет и Веб-технологии (работа Интернета, Веб-сайты, безопасность в Интернете) [Ребусы по Интернет-терминам]',
                '4. Информационные технологии в жизни (IT в сферах жизни, примеры, преимущества и недостатки IT) [Конкурс: "Кто изобрел?"] ',
                '5. История информатики (хронология, машины, вклад) [Конкурс: "Хронология компьютеров"]',
                'Раздел 2: Алгоритмы и логика (5 занятий)',
                '6. Что такое алгоритм? (примеры, схемы и команды, блоки команд в ситуациях) [Конкурс: "Составь алгоритм"]',
                '7. Логические задачи (с помощью алгоритмов, с помощью логики) [Викторина: "Логические головоломки"]',
                '8. Условные операторы и циклы (концепция, применение в задачах) [Конкурс: "Кто быстрее решит задачу?"]',
                '9. Кодирование и декодирование информации (методы, применение) [Викторина "Расшифруй код"]',
                '10. Система счисления (повторение основ, перевод чисел, двоичная система) [Конкурс: "Переведи число"]',
                'Раздел 3: Цифровая культура и безопасность (5 занятий)',
                '11. Как работает интернет? (сеть, возможности, ограничения) [Викторина "Знаешь ли ты интернет?"]',
                '12. Безопасность в интернете (киберугрозы, пароли, правила поведения) [Конкурс: "Создай безопасный пароль"]',
                '13. Цифровые технологии и общество (влияние, этика, право) [Викторина "Цифровые вызовы"]',
                '14. IT в разных сферах жизни (образование, медицина, транспорт) [Конкурс: "Презентация IT-проекта"]',
                '15. Цифровой след (понятие, значение, безопасность) [Викторина "Защити свой цифровой след"]',
                'Раздел 4: Проектная работа (5 занятий)',
                '16. Выбор темы проекта (обсуждение идей, цели и задачи, формирование групп)',
                '17. Разработка проекта (сбор информации, планирование, концепция)',
                '18. Реализация проекта (создание продукта, использование инструментов)',
                '19. Презентация проектов (презентация результатов, обсуждение, награждение)',
                '20. Итоговое занятие (повторение понятий, обсуждение достижений и перспектив, награждение активных учащихся)',
                '21. Заключительная игра/викторина (игровое занятие по темам курса, награждение победителей)'
            ],
            lifehacks: [
                'Научиться применять алгоритмы в реальной жизни',
                'Не попадаться на мошеннические сайты',
                'Понимать, как работает компьютер и его компоненты',
                'Эффективно искать информацию в интернете',
                'Создавать безопасные пароли для защиты личных данных',
                'Решать логические задачи и развивать критическое мышление',
                'Понимать, как кодируется и декодируется информация',
                'Осознавать влияние цифровых технологий на общество',
                'Применять информационные технологии в различных сферах жизни',
                'Управлять своим цифровым следом и защищать личную информацию',
                'Работать в команде над проектами, связанными с информатикой',
                'Презентовать свои идеи и результаты работы перед аудиторией'
            ],
            duration: '20 занятий',
            price: '350 руб за занятие'
        },
        'ege-math': {
            title: '',
            brief: '',
            image: '',
            description: '',
            program: [
                ''
            ],
            lifehack: [
                ''
            ],
            duration: '',
            price: ''
        },
        'ege-russian': {
            title: '',
            brief: '',
            image: '',
            description: '',
            program: [
                ''
            ],
            lifehack: [
                ''
            ],
            duration: '',
            price: ''
        },
        'ege-social': {
            title: '',
            brief: '',
            image: '',
            description: '',
            program: [
                ''
            ],
            lifehack: [
                ''
            ],
            duration: '',
            price: ''
        },
        'success-course': {
            title: '',
            brief: '',
            image: '',
            description: '',
            program: [
                ''
            ],
            lifehacks: [
                ''
            ],
            duration: '',
            price: ''
        }
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
                const lifehackList = document.getElementById('courseLifehacks');
                lifehackList.innerHTML = '';
                courseData.lifehack.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    lifehackList.appendChild(li);
                });
                document.getElementById('courseDuration').textContent = courseData.duration;
                document.getElementById('courseFormat').textContent = courseData.format;
                document.getElementById('coursePrice').textContent = courseData.price;

                const enrollButton = document.getElementById('enrollButton');
                enrollButton.onclick = function () {
                    // Закрываем модальное окно
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';

                    // Находим select с курсами и устанавливаем нужное значение
                    const courseSelect = document.getElementById('course');
                    courseSelect.value = courseId;

                    // Плавно скроллим к форме
                    const contactForm = document.getElementById('applicationForm');
                    contactForm.scrollIntoView({ behavior: 'smooth' });

                    // Добавляем фокус на первое поле формы
                    document.getElementById('name').focus();
                };

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

    function openModal(courseId) {
        const courseData = coursesData[courseId];
        if (courseData) {
            document.getElementById('modalTitle').textContent = courseData.title;
            document.getElementById('courseBrief').textContent = courseData.brief;
            document.getElementById('courseImage').src = courseData.image;
            document.getElementById('courseDuration').textContent = courseData.duration;
            document.getElementById('coursePrice').textContent = courseData.price;
            document.getElementById('courseDescription').textContent = courseData.description;
            const programList = document.getElementById('courseProgram');
            programList.innerHTML = '';
            courseData.program.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                programList.appendChild(li);
            });

            const lifehacksList = document.getElementById('courseLifehacks');
            lifehacksList.innerHTML = '';
            courseData.lifehacks.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                lifehacksList.appendChild(li);
            });

            // Показываем модальное окно
            document.getElementById('courseModal').style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }

    // Обработчики для кнопок деталей
    const detailButtons = document.querySelectorAll('.detail-btn');
    detailButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);

            // Скрываем все detail-content
            document.querySelectorAll('.detail-content').forEach(content => {
                content.style.display = 'none';
            });

            // Показываем выбранный content
            targetContent.style.display = 'block';

            // Убираем активный класс у всех кнопок
            detailButtons.forEach(btn => btn.classList.remove('active'));

            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
        });
    });

    // Обработчик для кнопки "Записаться на курс"
    document.getElementById('enrollButton').addEventListener('click', function () {
        // Закрываем модальное окно
        document.getElementById('courseModal').style.display = 'none';
        document.body.style.overflow = 'auto';

        // Скроллим к форме заявки
        const contactForm = document.getElementById('applicationForm');
        contactForm.scrollIntoView({ behavior: 'smooth' });

        // Фокусируемся на первом поле формы
        document.getElementById('name').focus();
    });

    // Закрытие модального окна
    document.querySelector('.close-modal').addEventListener('click', function () {
        document.getElementById('courseModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Закрытие модального окна при клике вне его
    window.addEventListener('click', function (event) {
        if (event.target == document.getElementById('courseModal')) {
            document.getElementById('courseModal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Вызов функции openModal при клике на карточку курса
    document.querySelectorAll('.course-card').forEach(card => {
        card.addEventListener('click', function () {
            const courseId = this.getAttribute('data-course');
            openModal(courseId);
        });
    });

    // Обработчик для кнопки "Записаться на курс"
    document.getElementById('enrollButton').addEventListener('click', function () {
        // Закрываем модальное окно
        document.getElementById('courseModal').style.display = 'none';
        document.body.style.overflow = 'auto';

        // Скроллим к форме заявки
        const contactForm = document.getElementById('applicationForm');
        contactForm.scrollIntoView({ behavior: 'smooth' });

        // Фокусируемся на первом поле формы
        document.getElementById('name').focus();
    });

    // Закрытие модального окна
    document.querySelector('.close-modal').addEventListener('click', function () {
        document.getElementById('courseModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Закрытие модального окна при клике вне его
    window.addEventListener('click', function (event) {
        if (event.target == document.getElementById('courseModal')) {
            document.getElementById('courseModal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Вызов функции openModal при клике на карточку курса
    document.querySelectorAll('.course-card').forEach(card => {
        card.addEventListener('click', function () {
            const courseId = this.getAttribute('data-course');
            openModal(courseId);
        });
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