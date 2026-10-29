document.addEventListener('DOMContentLoaded', () => {
    // 1. Мобильное меню
    const burgerBtn = document.getElementById('burgerBtn');
    const navMenu = document.getElementById('navMenu');
    if (burgerBtn && navMenu) {
        burgerBtn.addEventListener('click', () => navMenu.classList.toggle('active'));
    }

    // 2. Фильтрация мест
    const filterBtns = document.querySelectorAll('.filter-btn');
    const placeCards = document.querySelectorAll('.place-card');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            placeCards.forEach(card => {
                const category = card.getAttribute('data-category');
                card.style.display = (filter === 'all' || category === filter) ? 'block' : 'none';
            });
        });
    });

    // 3. Интерактивная карта Leaflet (если есть блок #map)
    const mapElement = document.getElementById('map');
    if (mapElement && typeof L !== 'undefined') {
        const map = L.map('map').setView([41.25, 72.95], 10); // Центр Джалал-Абадской области / Манаса
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        L.marker([41.32, 72.85]).addTo(map).bindPopup('<b>Арсланбоб</b><br>Ореховые леса и водопады');
        L.marker([41.20, 73.10]).addTo(map).bindPopup('<b>Кызыл-Унгкур</b><br>Красные скалы и хвойный бор');
        L.marker([41.15, 72.90]).addTo(map).bindPopup('<b>Манас</b><br>Туристический центр и парки');
    }

    // 4. FAQ Аккордеон
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(q => {
        q.addEventListener('click', () => {
            const item = q.parentElement;
            item.classList.toggle('active');
        });
    });

    // 5. Lightbox для галереи
    const galleryImgs = document.querySelectorAll('.gallery-img');
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.querySelector('.lightbox-close');

    galleryImgs.forEach(img => {
        img.addEventListener('click', () => {
            if (lightboxModal && lightboxImg) {
                lightboxModal.style.display = 'flex';
                lightboxImg.src = img.src;
            }
        });
    });

    if (lightboxClose && lightboxModal) {
        lightboxClose.addEventListener('click', () => lightboxModal.style.display = 'none');
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) lightboxModal.style.display = 'none';
        });
    }

    // 6. Генератор маршрутов
    const generateBtn = document.getElementById('generatePlanBtn');
    if (generateBtn) {
        generateBtn.addEventListener('click', () => {
            const loc = document.getElementById('planLocation').value;
            const timelineContainer = document.getElementById('planTimeline');
            const planTitle = document.getElementById('planTitle');
            if (!timelineContainer) return;

            let locationName = loc === 'arslanbob' ? "Арсланбоб" : loc === 'kyzyl' ? "Кызыл-Унгкур" : "Манас";
            planTitle.textContent = `Маршрут по локации: ${locationName}`;

            let schedule = loc === 'arslanbob' ? [
                { time: '09:00', text: 'Встреча у центрального въезда, инструктаж.' },
                { time: '10:30', text: 'Поход к Большому водопаду Арсланбоб, фотосессия.' },
                { time: '13:00', text: 'Обед в традиционной чайхане с национальной кухней.' },
                { time: '15:00', text: 'Трекинг к панорамным смотровым площадкам.' }
            ] : loc === 'kyzyl' ? [
                { time: '09:30', text: 'Прибытие в Кызыл-Унгкур, размещение в эко-домике.' },
                { time: '10:30', text: 'Исследование уникальных красных скал и каньонов.' },
                { time: '13:30', text: 'Пикник на берегу горной реки в хвойном бору.' }
            ] : [
                { time: '10:00', text: 'Обзорная прогулка по городу Манас и парковым зонам.' },
                { time: '12:00', text: 'Посещение историко-этнографического музея.' },
                { time: '14:00', text: 'Обед в семейном парке отдыха.' }
            ];

            timelineContainer.innerHTML = '';
            schedule.forEach(item => {
                const div = document.createElement('div');
                div.className = 'timeline-item';
                div.innerHTML = `<span class="timeline-time">${item.time}</span><span class="timeline-text">${item.text}</span>`;
                timelineContainer.appendChild(div);
            });
        });
    }

    // 7. Калькулятор бюджета
    const calcPeople = document.getElementById('calcPeople');
    const calcDays = document.getElementById('calcDays');
    const calcGuide = document.getElementById('calcGuide');
    const calcTotal = document.getElementById('calcTotal');

    function updateCalculator() {
        if (!calcTotal) return;
        const people = parseInt(calcPeople.value) || 1;
        const days = parseInt(calcDays.value) || 1;
        const guideCost = calcGuide.value === 'yes' ? 1200 : 0;
        const basePerDay = 800; // Базовая стоимость проживания/питания на человека
        
        const total = (basePerDay * days * people) + (guideCost * days);
        calcTotal.textContent = total + ' сом';
    }

    if (calcPeople && calcDays && calcGuide) {
        calcPeople.addEventListener('input', updateCalculator);
        calcDays.addEventListener('input', updateCalculator);
        calcGuide.addEventListener('change', updateCalculator);
    }

    // 8. Переключатель языка (KG / RU)
    const langToggle = document.getElementById('langToggle');
    let currentLang = 'ru';

    const translations = {
        ru: {
            logoTitle: "МАНАС", logoSub: "Туристический гид",
            navHome: "Главная", navDest: "Направления", navGuides: "Гиды", navPlanner: "Маршруты", navContacts: "Контакты",
            heroBadge: "Джалал-Абадская область • Кыргызстан",
            heroTitle: "Откройте жемчужины Тянь-Шаня",
            heroDesc: "Путеводитель по Манасу, легендарному ореховому раю Арсланбобу и живописному Кызыл-Унгкуру.",
            btnDest: "Выбрать направление", btnPlanner: "Спланировать маршрут",
            stat1: "Уникальных локаций", stat2: "Реликлиевые леса", stat3: "Поддержка гидов",
            regSub: "Регионы для путешествий", regTitle: "Главные жемчужины маршрута",
            badgeArs: "Легендарное место", descArs: "Крупнейшие в мире естественные леса дикорастущего грецкого ореха, величественные водопады.",
            badgeKyz: "Уединение и леса", descKyz: "Удивительное село в окружении красных скал, хвойных лесов и бурных рек.",
            badgeMan: "Культурный центр", descMan: "Удобная отправная точка, гостеприимные зоны отдыха, музеи.",
            more: "Подробнее →",
            faqSub: "Полезная информация", faqTitle: "Часто задаваемые вопросы",
            q1: "Какое лучшее время года для поездки в Арсланбоб?",
            a1: "Лучшее время — с мая по октябрь. Летом здесь приятно прохладно, а осенью сбор орехов.",
            q2: "Какая связь и интернет ловит в горах?",
            a2: "В крупных селах работают операторы (O!, Beeline, MegaCom). В ущельях связь может пропадать.",
            q3: "Что обязательно нужно взять с собой в поход?",
            a3: "Удобную трекинговую обувь, солнцезащитный крем, головной убор и легкую ветровку."
        },
        kg: {
            logoTitle: "МАНАС", logoSub: "Туристтик гид",
            navHome: "Башкы бет", navDest: "Багыттар", navGuides: "Гиддер", navPlanner: "Маршруттар", navContacts: "Байланыш",
            heroBadge: "Жалал-Абад облусу • Кыргызстан",
            heroTitle: "Теңир-Тоонун берметтерин ачыңыз",
            heroDesc: "Манас, легендарлуу Арсланбоб жаңгак токою жана кооз Кызыл-Үңкүр боюнча гид.",
            btnDest: "Багыттарды тандоо", btnPlanner: "Маршрут түзүү",
            stat1: "Уникалдуу жайлар", stat2: "Реликт токойлор", stat3: "Гиддердин колдоосу",
            regSub: "Саякат аймактары", regTitle: "Маршруттун башкы берметтери",
            badgeArs: "Легендарлуу жер", descArs: "Дүйнөдөгү эң чоң жапайы жаңгак токойлору, укмуштуу шаркыратмалар.",
            badgeKyz: "Жалгыздык жана токой", descKyz: "Кызыл аскалар жана ийне жыгач токойлору менен курчалган кооз айыл.",
            badgeMan: "Маданий борбор", descMan: "Ыңгайлуу башталгыч чекит, эс алуу зоналары, музейлер.",
            more: "Кененирээк →",
            faqSub: "Пайдалуу маалымат", faqTitle: "Көп берилүүчү суроолор",
            q1: "Арсланбобко саякаттоого эң жакшы убакыт качан?",
            a1: "Эң жакшы убакыт — майдан октябрга чейин. Жайында салкыын, күздө жаңгак жыйноо башталды.",
            q2: "Тоолоодо байланыш жана интернет иштейби?",
            a2: "Чоң айылдарда операторлор иштейт. Терең капчыгайларда байланыш болбой калышы мүмкүн.",
            q3: "Жортуулга эмнелерди алуу керек?",
            a3: "Ыңгайлуу бут кийим, күндөн коргоочу крем, баш кийим жана жеңил күрмө."
        }
    };

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'ru' ? 'kg' : 'ru';
            langToggle.textContent = currentLang === 'ru' ? 'KG / RU' : 'RU / KG';
            
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[currentLang][key]) {
                    el.textContent = translations[currentLang][key];
                }
            });
        });
    }

    // 9. Обратная связь
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert(currentLang === 'ru' ? 'Спасибо! Ваша заявка успешно отправлена.' : 'Рахмат! Сиздин билдирүүңүз жөнөтүлдү.');
            contactForm.reset();
        });
    }
});
