/* Основные переменные и сброс */
:root {
    --primary: #2E7D32;
    --primary-dark: #1B5E20;
    --accent: #E07A5F;
    --bg-color: #F8F9FA;
    --card-bg: #FFFFFF;
    --text-main: #2C3E50;
    --text-muted: #6C757D;
    --border-color: #E2E8F0;
    --radius: 12px;
    --transition: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Montserrat', sans-serif;
    background-color: var(--bg-color);
    color: var(--text-main);
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Кнопки */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    font-size: 15px;
    font-weight: 600;
    border-radius: var(--radius);
    cursor: pointer;
    text-decoration: none;
    transition: var(--transition);
    border: none;
}

.btn-primary {
    background-color: var(--primary);
    color: #fff;
}

.btn-primary:hover {
    background-color: var(--primary-dark);
}

.btn-outline {
    background-color: transparent;
    color: var(--text-main);
    border: 2px solid var(--border-color);
}

.btn-outline:hover {
    border-color: var(--primary);
    color: var(--primary);
}

.btn-block {
    width: 100%;
}

.btn-sm {
    padding: 8px 16px;
    font-size: 13px;
}

/* Шапка сайта */
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    z-index: 1000;
}

.header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 75px;
}

.logo {
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    color: var(--primary);
}

.logo-text {
    display: flex;
    flex-direction: column;
}

.logo-title {
    font-weight: 800;
    font-size: 18px;
    letter-spacing: 1px;
    color: var(--text-main);
}

.logo-subtitle {
    font-size: 11px;
    color: var(--text-muted);
}

.nav-menu {
    display: flex;
    gap: 30px;
}

.nav-link {
    text-decoration: none;
    color: var(--text-main);
    font-weight: 500;
    font-size: 15px;
    transition: var(--transition);
}

.nav-link:hover {
    color: var(--primary);
}

.burger-btn {
    display: none;
    flex-direction: column;
    gap: 6px;
    background: none;
    border: none;
    cursor: pointer;
}

.burger-btn span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: var(--text-main);
    border-radius: 3px;
    transition: var(--transition);
}

/* Главный Баннер (Hero) */
.hero {
    position: relative;
    height: 90vh;
    min-height: 600px;
    background: url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80') center/cover no-repeat;
    display: flex;
    align-items: center;
    text-align: center;
    color: #fff;
    margin-top: 75px;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7));
}

.hero-content {
    position: relative;
    z-index: 2;
    max-width: 800px;
    margin: 0 auto;
}

.hero-badge {
    display: inline-block;
    padding: 6px 16px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    border-radius: 20px;
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 20px;
    letter-spacing: 0.5px;
}

.hero-title {
    font-family: 'Playfair Display', serif;
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 20px;
}

.hero-description {
    font-size: 18px;
    margin-bottom: 30px;
    opacity: 0.9;
}

.hero-actions {
    display: flex;
    gap: 15px;
    justify-content: center;
    margin-bottom: 50px;
}

.hero-actions .btn-outline {
    color: #fff;
    border-color: #fff;
}

.hero-actions .btn-outline:hover {
    background-color: #fff;
    color: var(--text-main);
}

.hero-stats {
    display: flex;
    justify-content: center;
    gap: 40px;
    border-top: 1px solid rgba(255,255,255,0.2);
    padding-top: 30px;
}

.stat-item {
    display: flex;
    flex-direction: column;
}

.stat-number {
    font-size: 28px;
    font-weight: 700;
}

.stat-label {
    font-size: 13px;
    opacity: 0.8;
}

/* Секции общие */
.section {
    padding: 90px 0;
}

.section-header {
    margin-bottom: 50px;
}

.section-subtitle {
    display: block;
    font-size: 13px;
    font-weight: 600;
    color: var(--primary);
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 8px;
}

.section-title {
    font-family: 'Playfair Display', serif;
    font-size: 36px;
    color: var(--text-main);
}

.section-line {
    width: 60px;
    height: 3px;
    background-color: var(--primary);
    margin: 15px auto 0;
    border-radius: 2px;
}

.text-center {
    text-align: center;
}

/* О городе */
.about-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.about-card {
    background: var(--card-bg);
    padding: 40px 30px;
    border-radius: var(--radius);
    box-shadow: 0 5px 20px rgba(0,0,0,0.03);
    transition: var(--transition);
    border: 1px solid var(--border-color);
}

.about-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.06);
}

.about-icon {
    font-size: 40px;
    margin-bottom: 20px;
}

.about-card h3 {
    font-size: 20px;
    margin-bottom: 12px;
}

.about-card p {
    color: var(--text-muted);
    font-size: 14px;
}

/* Виджет погоды */
.weather-banner {
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    color: #fff;
    padding: 30px 0;
}

.weather-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}

.weather-info {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.weather-label {
    font-size: 13px;
    opacity: 0.85;
}

.weather-main {
    display: flex;
    align-items: center;
    gap: 15px;
}

.weather-icon {
    font-size: 28px;
}

.weather-temp {
    font-size: 24px;
    font-weight: 700;
}

.weather-desc {
    font-size: 15px;
}

.weather-recommendation {
    background: rgba(255,255,255,0.15);
    padding: 12px 20px;
    border-radius: var(--radius);
    font-size: 14px;
    backdrop-filter: blur(5px);
}

/* Достопримечательности */
.filters-container {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-bottom: 40px;
    flex-wrap: wrap;
}

.filter-btn {
    padding: 10px 20px;
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
}

.filter-btn.active, .filter-btn:hover {
    background-color: var(--primary);
    color: #fff;
    border-color: var(--primary);
}

.places-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    gap: 30px;
}

.place-card {
    background: var(--card-bg);
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(0,0,0,0.04);
    border: 1px solid var(--border-color);
    transition: var(--transition);
}

.place-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.08);
}

.place-img-wrapper {
    position: relative;
    height: 200px;
}

.place-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.place-badge {
    position: absolute;
    top: 15px;
    left: 15px;
    background: rgba(0,0,0,0.6);
    backdrop-filter: blur(4px);
    color: #fff;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 12px;
}

.place-content {
    padding: 20px;
}

.place-title {
    font-size: 18px;
    margin-bottom: 8px;
}

.place-desc {
    color: var(--text-muted);
    font-size: 14px;
    margin-bottom: 20px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.place-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid var(--border-color);
    padding-top: 15px;
}

.place-tag {
    font-size: 12px;
    color: var(--text-muted);
}

.btn-more {
    background: none;
    border: none;
    color: var(--primary);
    font-weight: 600;
    font-size: 13px;
    cursor: pointer;
}

.btn-more:hover {
    text-decoration: underline;
}

/* Планировщик маршрутов */
.planner-section {
    background-color: #fff;
}

.planner-box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    background: var(--bg-color);
    padding: 40px;
    border-radius: var(--radius);
    border: 1px solid var(--border-color);
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 8px;
}

.form-select, .form-input, .form-textarea {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius);
    font-family: inherit;
    font-size: 14px;
    background: #fff;
    outline: none;
    transition: var(--transition);
}

.form-select:focus, .form-input:focus, .form-textarea:focus {
    border-color: var(--primary);
}

.planner-result {
    background: #fff;
    padding: 30px;
    border-radius: var(--radius);
    border: 1px solid var(--border-color);
}

.planner-result h3 {
    font-size: 18px;
    margin-bottom: 20px;
}

.timeline {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.timeline-item {
    display: flex;
    gap: 15px;
    font-size: 14px;
}

.timeline-time {
    font-weight: 700;
    color: var(--primary);
    min-width: 70px;
}

/* Раздел Гидов */
.guides-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
}

.guide-card {
    background: var(--card-bg);
    border-radius: var(--radius);
    padding: 30px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.03);
    border: 1px solid var(--border-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.guide-avatar-wrapper {
    position: relative;
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
}

.guide-avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
}

.guide-rating {
    position: absolute;
    bottom: 0;
    right: 0;
    background: #fff;
    padding: 3px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 700;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.guide-name {
    font-size: 18px;
    margin-bottom: 4px;
}

.guide-spec {
    font-size: 13px;
    color: var(--primary);
    font-weight: 600;
    margin-bottom: 12px;
    display: block;
}

.guide-bio {
    font-size: 14px;
    color: var(--text-muted);
    margin-bottom: 20px;
}

.guide-languages {
    display: flex;
    gap: 8px;
    justify-content: center;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

.guide-languages span {
    font-size: 11px;
    background: var(--bg-color);
    padding: 4px 10px;
    border-radius: 10px;
    color: var(--text-muted);
}

.guide-actions {
    display: flex;
    gap: 10px;
    width: 100%;
}

.guide-actions .btn {
    flex: 1;
}

/* Отзывы */
.reviews-section {
    background-color: #fff;
}

.reviews-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-bottom: 50px;
}

.review-card {
    background: var(--bg-color);
    padding: 30px;
    border-radius: var(--radius);
    border: 1px solid var(--border-color);
}

.review-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

.review-author {
    display: flex;
    flex-direction: column;
}

.review-date {
    font-size: 12px;
    color: var(--text-muted);
}

.review-text {
    font-size: 14px;
    color: var(--text-main);
}

.add-review-box {
    max-width: 700px;
    margin: 0 auto;
    background: var(--bg-color);
    padding: 40px;
    border-radius: var(--radius);
    border: 1px solid var(--border-color);
}

.add-review-box h3 {
    margin-bottom: 20px;
    font-size: 20px;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-bottom: 15px;
}

.form-textarea {
    height: 120px;
    resize: vertical;
    margin-bottom: 20px;
}

/* Контакты */
.contacts-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
}

.contacts-info {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.contact-item {
    display: flex;
    gap: 20px;
    align-items: flex-start;
}

.contact-icon {
    font-size: 28px;
    background: #fff;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    box-shadow: 0 4px 15px rgba(0,0,0,0.03);
    border: 1px solid var(--border-color);
}

.contact-item h4 {
    font-size: 16px;
    margin-bottom: 4px;
}

.contact-item p, .contact-item a {
    color: var(--text-muted);
    font-size: 14px;
    text-decoration: none;
}

.contact-item a:hover {
    color: var(--primary);
}

.social-links {
    display: flex;
    gap: 10px;
    margin-top: 8px;
}

.social-btn {
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    text-decoration: none;
    color: #fff;
}

.telegram-btn {
    background-color: #0088cc;
}

.instagram-btn {
    background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
}

.contact-form-card {
    background: var(--card-bg);
    padding: 40px;
    border-radius: var(--radius);
    box-shadow: 0 5px 20px rgba(0,0,0,0.03);
    border: 1px solid var(--border-color);
}

.contact-form-card h3 {
    margin-bottom: 20px;
    font-size: 20px;
}

.contact-form-card .form-input, 
.contact-form-card .form-textarea {
    margin-bottom: 15px;
}

/* Подвал */
.footer {
    background-color: #1A252F;
    color: #fff;
    padding: 40px 0;
    text-align: center;
}

.footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}

.footer-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 700;
    font-size: 18px;
}

.footer p {
    font-size: 13px;
    opacity: 0.7;
}

/* Модальное окно */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    backdrop-filter: blur(5px);
    z-index: 2000;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.modal-content {
    background: #fff;
    max-width: 600px;
    width: 100%;
    padding: 30px;
    border-radius: var(--radius);
    position: relative;
    max-height: 90vh;
    overflow-y: auto;
}

.modal-close {
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 28px;
    cursor: pointer;
    color: var(--text-muted);
}

.modal-close:hover {
    color: var(--text-main);
}

.modal-img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: var(--radius);
    margin: 15px 0;
}

/* Адаптивность (Медиа-запросы) */
@media (max-width: 992px) {
    .planner-box, .contacts-wrapper {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 768px) {
    .nav-menu {
        position: fixed;
        top: 75px;
        left: -100%;
        width: 100%;
        height: calc(100vh - 75px);
        background: #fff;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 25px;
        transition: var(--transition);
        box-shadow: 0 10px 20px rgba(0,0,0,0.05);
    }

    .nav-menu.active {
        left: 0;
    }

    .burger-btn {
        display: flex;
    }

    .hero-title {
        font-size: 34px;
    }

    .hero-stats {
        flex-direction: column;
        gap: 15px;
    }

    .form-row {
        grid-template-columns: 1fr;
    }
}
