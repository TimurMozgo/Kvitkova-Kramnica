// ============ TELEGRAM INIT ============
const tg = window.Telegram?.WebApp;
if (tg) {
  tg.expand();
  tg.ready();
  try { tg.setHeaderColor('#FFF5F7'); } catch(e){}
  try { tg.setBackgroundColor('#FFF5F7'); } catch(e){}
}

const haptic = (type = 'light') => {
  try { tg?.HapticFeedback?.impactOccurred(type); } catch(e){}
};

// ============ SUPABASE CONFIG ============
const SUPABASE_URL = 'https://suzzmeyxjxjddbxbzsbb.supabase.co';
const SUPABASE_KEY = 'sb_publishable_tOW6vFluEzjX-RiNRbcMQw_8SeDFc7J';

// ============ I18N ============
const I18N = {
  ua: {
    appTitle: 'Квіткова Крамниця', appSubtitle: 'Свіжі квіти щодня', heroTitle: 'Ласкаво просимо!', heroText: 'Створюйте букети мрії з нашими свіжими квітами', heroCta: 'Перейти до каталогу',
    feat1Title: 'Швидка доставка', feat1Text: 'Від 30 хвилин по місту', feat2Title: 'Свіжі квіти', feat2Text: 'Поставка щоранку', feat3Title: 'Найкращі ціни', feat3Text: 'Прямі поставки',
    catalogTitle: 'Каталог', catalogEmptyTitle: 'Каталог порожній', catalogEmptyText: 'Товари ще не додані', backBtn: 'Назад', pdFeature1: 'Свіжі квіти', pdFeature2: 'Швидка доставка', pdFeature3: 'Гарантія якості',
    addToCart: 'Додати до кошика', addToFavorites: 'Додати до обраного', removeFromFavorites: 'Видалити з обраного', cartTitle: 'Кошик', cartEmptyTitle: 'Кошик порожній', cartEmptyText: 'Додайте квіти з каталогу',
    cartTotalLabel: 'Разом:', checkoutBtn: 'Оформити заявку', orderTitle: 'Оформлення заявки', nameLabel: "Ваше ім'я", namePlaceholder: "Введіть ім'я", phoneLabel: 'Номер телефону', phonePlaceholder: '+380 (XX) XXX-XX-XX',
    submitBtn: 'Надіслати заявку', profileTitle: 'Мій профіль', profileRole: 'Покупець', menuOrders: 'Мої замовлення', menuFavorites: 'Обране', menuAdmin: 'Адмін-панель', adminTitle: 'Адмін-панель',
    adminAddTitle: 'Додати товар', prodNamePh: 'Назва', prodPricePh: 'Ціна (₴)', prodDescPh: 'Опис', photoLabel: 'Фото товару', photoHint: 'До 5 фото, до 5 МБ кожне (стискаються)', photoBtn: 'Додати фото',
    adminAddBtn: 'Додати', adminEditBtn: 'Зберегти', adminProducts: 'Товари', navHome: 'Головна', navCatalog: 'Каталог', navCart: 'Кошик', navProfile: 'Профіль', modalTitle: 'Заявку надіслано!',
    modalText: "Ми зв'яжемося з вами найближчим часом", modalBtn: 'Чудово', nameError: "Введіть коректне ім'я", phoneError: 'Введіть коректний номер телефону', guest: 'Гість', user: 'Користувач',
    flowerRose: 'Троянда', flowerTulip: 'Тюльпан', flowerDaisy: 'Ромашка', flowerSunflower: 'Соняшник', flowerLavender: 'Лаванда', favoritesTitle: 'Обране', favoritesEmptyTitle: 'Список порожній',
    favoritesEmptyText: 'Додайте товари до обраного', ordersTitle: 'Мої замовлення', ordersEmptyTitle: 'Замовлень немає', ordersEmptyText: 'Ви ще не робили замовлень', orderNumber: 'Замовлення №',
    orderDate: 'Дата:', orderTotal: 'Сума:', orderStatus: 'Статус:'
  },
  ru: {
    appTitle: 'Цветочная Лавка', appSubtitle: 'Свежие цветы каждый день', heroTitle: 'Добро пожаловать!', heroText: 'Создавайте букеты мечты с нашими свежими цветами', heroCta: 'Перейти к каталогу',
    feat1Title: 'Быстрая доставка', feat1Text: 'От 30 минут по городу', feat2Title: 'Свежие цветы', feat2Text: 'Поставка каждое утро', feat3Title: 'Лучшие цены', feat3Text: 'Прямые поставки',
    catalogTitle: 'Каталог', catalogEmptyTitle: 'Каталог пуст', catalogEmptyText: 'Товары ещё не добавлены', backBtn: 'Назад', pdFeature1: 'Свежие цветы', pdFeature2: 'Быстрая доставка', pdFeature3: 'Гарантия качества',
    addToCart: 'Добавить в корзину', addToFavorites: 'Добавить в избранное', removeFromFavorites: 'Удалить из избранного', cartTitle: 'Корзина', cartEmptyTitle: 'Корзина пуста', cartEmptyText: 'Добавьте цветы из каталога',
    cartTotalLabel: 'Итого:', checkoutBtn: 'Оформить заявку', orderTitle: 'Оформление заявки', nameLabel: 'Ваше имя', namePlaceholder: 'Введите имя', phoneLabel: 'Номер телефона', phonePlaceholder: '+380 (XX) XXX-XX-XX',
    submitBtn: 'Отправить заявку', profileTitle: 'Мой профиль', profileRole: 'Покупатель', menuOrders: 'Мои заказы', menuFavorites: 'Избранное', menuAdmin: 'Админ-панель', adminTitle: 'Админ-панель',
    adminAddTitle: 'Добавить товар', prodNamePh: 'Название', prodPricePh: 'Цена (₴)', prodDescPh: 'Описание', photoLabel: 'Фото товара', photoHint: 'До 5 фото, до 5 МБ каждое (сжимаются)', photoBtn: 'Добавить фото',
    adminAddBtn: 'Добавить', adminEditBtn: 'Сохранить', adminProducts: 'Товары', navHome: 'Главная', navCatalog: 'Каталог', navCart: 'Корзина', navProfile: 'Профиль', modalTitle: 'Заявка отправлена!',
    modalText: 'Мы свяжемся с вами в ближайшее время', modalBtn: 'Отлично', nameError: 'Введите корректное имя', phoneError: 'Введите корректный номер телефона', guest: 'Гость', user: 'Пользователь',
    flowerRose: 'Роза', flowerTulip: 'Тюльпан', flowerDaisy: 'Ромашка', flowerSunflower: 'Подсолнух', flowerLavender: 'Лаванда', favoritesTitle: 'Избранное', favoritesEmptyTitle: 'Список пуст',
    favoritesEmptyText: 'Добавьте товары в избранное', ordersTitle: 'Мои заказы', ordersEmptyTitle: 'Заказов нет', ordersEmptyText: 'Вы еще не делали заказов', orderNumber: 'Заказ №',
    orderDate: 'Дата:', orderTotal: 'Сумма:', orderStatus: 'Статус:'
  }
};

let currentLang = localStorage.getItem('fl_lang') || 'ua';
let editingProductId = null;

function t(key) { return I18N[currentLang]?.[key] || I18N.ua[key] || key; }

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.classList.add('i18n-switching');
    setTimeout(() => { el.textContent = t(el.dataset.i18n); }, 160);
    setTimeout(() => { el.classList.remove('i18n-switching'); }, 400);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  updateFlowerSelect();
  document.title = '🌸 ' + t('appTitle');
  document.documentElement.lang = currentLang === 'ua' ? 'uk' : 'ru';
}

function updateFlowerSelect() {
  const select = document.getElementById('prodIcon');
  if (!select) return;
  const flowers = [
    { value: 'rose', label: t('flowerRose'), emoji: '🌹' }, { value: 'tulip', label: t('flowerTulip'), emoji: '🌷' },
    { value: 'daisy', label: t('flowerDaisy'), emoji: '🌼' }, { value: 'sunflower', label: t('flowerSunflower'), emoji: '🌻' },
    { value: 'lavender', label: t('flowerLavender'), emoji: '💜' }
  ];
  select.innerHTML = flowers.map(f => `<option value="${f.value}">${f.emoji} ${f.label}</option>`).join('');
}

// ============ STATE & SERVER SYNC ============
let products = [];
let cart = JSON.parse(localStorage.getItem('fl_cart')) || [];
let favorites = JSON.parse(localStorage.getItem('fl_favorites')) || [];
let orders = JSON.parse(localStorage.getItem('fl_orders')) || [];
let currentProductId = null;
let pendingPhotos = [];

async function loadProductsFromServer() {
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/products?select=*`, {
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`
      }
    });
    if (response.ok) {
      const data = await response.json();
      products = data.map(row => ({
        id: Number(row.id),
        name: { ua: row.name_ua, ru: row.name_ru },
        price: Number(row.price),
        desc: { ua: row.desc_ua, ru: row.desc_ru },
        icon: row.icon,
        images: row.images ? row.images.split(',') : []
      }));
      localStorage.setItem('fl_products', JSON.stringify(products));
    } else { throw new Error('Failed to fetch'); }
  } catch (error) {
    console.warn('Сервер недоступен, используем локальный кэш:', error);
    products = JSON.parse(localStorage.getItem('fl_products')) || [];
  }
  renderCatalog();
}

function getLocalizedName(item) {
  if (typeof item.name === 'object') return item.name[currentLang] || item.name.ua;
  return item.name;
}
function getLocalizedDesc(item) {
  if (!item.desc) return '';
  if (typeof item.desc === 'object') return item.desc[currentLang] || item.desc.ua;
  return item.desc;
}

// ============ SVG ICONS ============
const FLOWER_SVGS = {
  rose: `<svg viewBox="0 0 100 100"><defs><radialGradient id="r1"><stop offset="0%" stop-color="#FFB6C1"/><stop offset="100%" stop-color="#FF6B9D"/></radialGradient></defs><circle cx="50" cy="50" r="35" fill="url(#r1)"/><path d="M50 30 C40 30, 35 40, 42 48 C35 48, 35 58, 45 58 C45 65, 55 65, 55 58 C65 58, 65 48, 58 48 C65 40, 60 30, 50 30 Z" fill="#fff" opacity="0.5"/><circle cx="50" cy="48" r="8" fill="#C44569"/></svg>`,
  tulip: `<svg viewBox="0 0 100 100"><path d="M50 20 C35 20, 25 35, 30 50 C30 60, 40 65, 50 65 C60 65, 70 60, 70 50 C75 35, 65 20, 50 20 Z" fill="#FF6B9D"/><path d="M50 25 C42 25, 38 35, 42 45" stroke="#fff" stroke-width="2" fill="none" opacity="0.5"/><rect x="47" y="60" width="6" height="25" fill="#4ECDC4"/><path d="M50 70 C40 68, 35 72, 35 78" stroke="#4ECDC4" stroke-width="3" fill="none"/></svg>`,
  daisy: `<svg viewBox="0 0 100 100"><g transform="translate(50 50)"><ellipse cx="0" cy="-25" rx="8" ry="20" fill="#fff"/><ellipse cx="0" cy="-25" rx="8" ry="20" fill="#fff" transform="rotate(45)"/><ellipse cx="0" cy="-25" rx="8" ry="20" fill="#fff" transform="rotate(90)"/><ellipse cx="0" cy="-25" rx="8" ry="20" fill="#fff" transform="rotate(135)"/><ellipse cx="0" cy="-25" rx="8" ry="20" fill="#fff" transform="rotate(180)"/><ellipse cx="0" cy="-25" rx="8" ry="20" fill="#fff" transform="rotate(225)"/><ellipse cx="0" cy="-25" rx="8" ry="20" fill="#fff" transform="rotate(270)"/><ellipse cx="0" cy="-25" rx="8" ry="20" fill="#fff" transform="rotate(315)"/><circle cx="0" cy="0" r="12" fill="#FFD93D"/></g></svg>`,
  sunflower: `<svg viewBox="0 0 100 100"><g transform="translate(50 50)"><ellipse cx="0" cy="-28" rx="10" ry="18" fill="#FFB347"/><ellipse cx="0" cy="-28" rx="10" ry="18" fill="#FFB347" transform="rotate(30)"/><ellipse cx="0" cy="-28" rx="10" ry="18" fill="#FFB347" transform="rotate(60)"/><ellipse cx="0" cy="-28" rx="10" ry="18" fill="#FFB347" transform="rotate(90)"/><ellipse cx="0" cy="-28" rx="10" ry="18" fill="#FFB347" transform="rotate(120)"/><ellipse cx="0" cy="-28" rx="10" ry="18" fill="#FFB347" transform="rotate(150)"/><ellipse cx="0" cy="-28" rx="10" ry="18" fill="#FFB347" transform="rotate(180)"/><ellipse cx="0" cy="-28" rx="10" ry="18" fill="#FFB347" transform="rotate(210)"/><ellipse cx="0" cy="-28" rx="10" ry="18" fill="#FFB347" transform="rotate(240)"/><ellipse cx="0" cy="-28" rx="10" ry="18" fill="#FFB347" transform="rotate(270)"/><ellipse cx="0" cy="-28" rx="10" ry="18" fill="#FFB347" transform="rotate(300)"/><ellipse cx="0" cy="-28" rx="10" ry="18" fill="#FFB347" transform="rotate(330)"/><circle cx="0" cy="0" r="16" fill="#6B4423"/><circle cx="0" cy="0" r="12" fill="#8B5A2B"/></g></svg>`,
  lavender: `<svg viewBox="0 0 100 100"><g transform="translate(50 50)"><rect x="-2" y="-10" width="4" height="40" fill="#4ECDC4"/><circle cx="-6" cy="-15" r="5" fill="#9B7EDE"/><circle cx="6" cy="-15" r="5" fill="#9B7EDE"/><circle cx="-6" cy="-5" r="5" fill="#B197E8"/><circle cx="6" cy="-5" r="5" fill="#B197E8"/><circle cx="-6" cy="5" r="5" fill="#C4A8EE"/><circle cx="6" cy="5" r="5" fill="#C4A8EE"/><circle cx="0" cy="-22" r="5" fill="#8A6DD6"/></g></svg>`
};

const ICON_PLUS = `<svg viewBox="0 0 24 24"><path d="M12 5 L12 19 M5 12 L19 12" stroke="#fff" stroke-width="3" stroke-linecap="round"/></svg>`;
const ICON_MINUS = `<svg viewBox="0 0 24 24"><path d="M5 12 L19 12" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`;
const ICON_DELETE = `<svg viewBox="0 0 24 24"><path d="M6 6 L18 18 M6 18 L18 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>`;
const ICON_EDIT = `<svg viewBox="0 0 24 24"><path d="M12 20 L20 12 L16 8 L8 16 Z M16 8 L18 6 C19 5, 20 5, 21 6 L22 7 C23 8, 23 9, 22 10 L20 12 Z" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

function formatPrice(price) { return price.toLocaleString('uk-UA') + ' ₴'; }

// ============ ADMIN VISIBILITY ============
const ADMIN_IDS = [1246079025, 6088315974];
function isAdmin() {
  const userId = tg?.initDataUnsafe?.user?.id;
  return userId && ADMIN_IDS.includes(Number(userId));
}
function updateAdminVisibility() {
  const adminBtn = document.getElementById('adminBtn');
  if (adminBtn) adminBtn.style.display = isAdmin() ? 'flex' : 'none';
}

// ============ FAVORITES ============
function isFavorite(productId) { return favorites.includes(productId); }
function toggleFavorite(productId) {
  const index = favorites.indexOf(productId);
  if (index > -1) { favorites.splice(index, 1); haptic('light'); } 
  else { favorites.push(productId); haptic('medium'); }
  localStorage.setItem('fl_favorites', JSON.stringify(favorites));
  updateFavoriteButtons();
}
function updateFavoriteButtons() {
  document.querySelectorAll('.favorite-btn').forEach(btn => {
    btn.classList.toggle('active', isFavorite(parseInt(btn.dataset.id)));
  });
}
function renderFavorites() {
  const list = document.getElementById('favoritesList');
  const empty = document.getElementById('favoritesEmpty');
  if (favorites.length === 0) { empty.style.display = 'block'; list.innerHTML = ''; return; }
  empty.style.display = 'none';
  list.innerHTML = favorites.map((id, i) => {
    const product = products.find(p => p.id === id);
    if (!product) return '';
    return `
      <div class="favorite-item" style="animation-delay: ${i * 0.05}s" data-id="${product.id}">
        <div class="favorite-item__img">${getProductImage(product)}</div>
        <div class="favorite-item__info">
          <div class="favorite-item__name">${escapeHtml(getLocalizedName(product))}</div>
          <div class="favorite-item__price">${formatPrice(product.price)}</div>
        </div>
        <div class="favorite-item__actions">
          <button class="favorite-remove-btn" data-id="${product.id}"><svg viewBox="0 0 24 24"><path d="M6 6 L18 18 M6 18 L18 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg></button>
        </div>
      </div>`;
  }).join('');
  list.querySelectorAll('.favorite-item').forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.closest('.favorite-remove-btn')) return;
      currentProductId = parseInt(item.dataset.id);
      renderProductDetail(currentProductId);
      showScreen('product');
    });
  });
  list.querySelectorAll('.favorite-remove-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      btn.closest('.favorite-item').classList.add('removing');
      haptic('light');
      setTimeout(() => { toggleFavorite(id); renderFavorites(); }, 300);
    });
  });
}

// ============ ORDERS ============
function renderOrders() {
  const list = document.getElementById('ordersList');
  const empty = document.getElementById('ordersEmpty');
  if (orders.length === 0) { empty.style.display = 'block'; list.innerHTML = ''; return; }
  empty.style.display = 'none';
  const sortedOrders = [...orders].sort((a, b) => new Date(b.date) - new Date(a.date));
  list.innerHTML = sortedOrders.map((order, i) => {
    const date = new Date(order.date);
    const dateStr = date.toLocaleDateString(currentLang === 'ua' ? 'uk-UA' : 'ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
    const itemsHtml = order.items && order.items.length > 0 
      ? order.items.map(item => `<div class="order-item-row"><span>${escapeHtml(item.name || 'Товар')} × ${item.qty || 1}</span><span>${formatPrice((item.price || 0) * (item.qty || 1))}</span></div>`).join('')
      : '<div class="order-item-row"><span>Нет товаров</span><span>0 ₴</span></div>';
    return `
      <div class="order-item" style="animation-delay: ${i * 0.05}s">
        <div class="order-header">
          <div class="order-number">${t('orderNumber')} ${order.id.toString().slice(-6)}</div>
          <div class="order-status">${t('orderStatus')} <span class="status-badge">В обробці</span></div>
        </div>
        <div class="order-date">${t('orderDate')} ${dateStr}</div>
        <div class="order-items">${itemsHtml}</div>
        <div class="order-total">${t('orderTotal')} <strong>${formatPrice(order.total || 0)}</strong></div>
      </div>`;
  }).join('');
}

// ============ LANGUAGE & NAVIGATION ============
const langSwitch = document.getElementById('langSwitch');
const langLabel = document.getElementById('langLabel');
langLabel.textContent = currentLang.toUpperCase();

langSwitch.addEventListener('click', () => {
  haptic('light');
  langSwitch.classList.add('switching');
  setTimeout(() => {
    currentLang = currentLang === 'ua' ? 'ru' : 'ua';
    localStorage.setItem('fl_lang', currentLang);
    langLabel.textContent = currentLang.toUpperCase();
    applyTranslations();
    updateAdminVisibility();
    const activeScreen = document.querySelector('.screen--active')?.dataset.screen;
    if (activeScreen === 'catalog') renderCatalog();
    if (activeScreen === 'cart') renderCart();
    if (activeScreen === 'admin') renderAdmin();
    if (activeScreen === 'product' && currentProductId) renderProductDetail(currentProductId);
    if (activeScreen === 'favorites') renderFavorites();
    if (activeScreen === 'orders') renderOrders();
    updateProfileName();
  }, 200);
  setTimeout(() => { langSwitch.classList.remove('switching'); }, 600);
});

const screens = document.querySelectorAll('.screen');
const navBtns = document.querySelectorAll('.nav-btn');
let previousScreen = 'home';

function showScreen(name, addToHistory = true) {
  const current = document.querySelector('.screen--active')?.dataset.screen;
  if (addToHistory && current) previousScreen = current;
  screens.forEach(s => s.classList.toggle('screen--active', s.dataset.screen === name));
  navBtns.forEach(b => b.classList.toggle('nav-btn--active', b.dataset.target === name));
  window.scrollTo({ top: 0, behavior: 'smooth' });
  haptic('light');
  if (tg?.BackButton) {
    if (['product', 'order', 'admin', 'favorites', 'orders'].includes(name)) tg.BackButton.show();
    else tg.BackButton.hide();
  }
  if (name === 'catalog') renderCatalog();
  if (name === 'cart') renderCart();
  if (name === 'admin') renderAdmin();
  if (name === 'favorites') renderFavorites();
  if (name === 'orders') renderOrders();
}

navBtns.forEach(btn => btn.addEventListener('click', () => showScreen(btn.dataset.target)));
if (tg?.BackButton) {
  tg.BackButton.onClick(() => {
    const current = document.querySelector('.screen--active')?.dataset.screen;
    if (current === 'product') showScreen('catalog', false);
    else if (current === 'order') showScreen('cart', false);
    else if (['admin', 'favorites', 'orders'].includes(current)) showScreen('profile', false);
    else showScreen('home', false);
  });
}
document.getElementById('heroCtaBtn')?.addEventListener('click', () => showScreen('catalog'));
document.getElementById('backToCatalog').addEventListener('click', () => showScreen('catalog', false));
document.getElementById('backToFavorites')?.addEventListener('click', () => showScreen('profile', false));
document.getElementById('backToOrders')?.addEventListener('click', () => showScreen('profile', false));

// ============ CATALOG & PRODUCT DETAIL ============
function renderCatalog() {
  const catalog = document.getElementById('catalog');
  if (products.length === 0) {
    catalog.innerHTML = `<div class="catalog-empty"><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="55" fill="#FFE5EC"/><path d="M40 50 L80 50 L75 85 L45 85 Z" stroke="#FF6B9D" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M50 50 L50 40 C50 35, 55 32, 60 32 C65 32, 70 35, 70 40 L70 50" stroke="#FF6B9D" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="60" cy="70" r="3" fill="#FF6B9D"/></svg><p>${t('catalogEmptyTitle')}</p><span>${t('catalogEmptyText')}</span></div>`;
    return;
  }
  catalog.innerHTML = products.map((p, i) => `
    <div class="product-card" data-id="${p.id}" style="animation-delay: ${i * 0.05}s">
      <div class="product-image">${getProductImage(p)}
        <button class="favorite-btn ${isFavorite(p.id) ? 'active' : ''}" data-id="${p.id}">
          <svg viewBox="0 0 24 24"><path class="heart-outline" d="M12 20 L10.5 18.5 C5 13.5, 3 11, 3 8 C3 5, 5 3, 8 3 C10 3, 11.5 4, 12 5.5 C12.5 4, 14 3, 16 3 C19 3, 21 5, 21 8 C21 11, 19 13.5, 13.5 18.5 Z"/><path class="heart-filled" d="M12 20 L10.5 18.5 C5 13.5, 3 11, 3 8 C3 5, 5 3, 8 3 C10 3, 11.5 4, 12 5.5 C12.5 4, 14 3, 16 3 C19 3, 21 5, 21 8 C21 11, 19 13.5, 13.5 18.5 Z"/></svg>
        </button>
      </div>
      <div class="product-info">
        <div class="product-name">${escapeHtml(getLocalizedName(p))}</div>
        <div class="product-desc">${escapeHtml(getLocalizedDesc(p))}</div>
      </div>
      <div class="product-bottom">
        <div class="product-price">${formatPrice(p.price)}</div>
        <button class="add-btn" data-id="${p.id}">${ICON_PLUS}</button>
      </div>
    </div>`).join('');

  catalog.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.add-btn') || e.target.closest('.favorite-btn')) return;
      currentProductId = parseInt(card.dataset.id);
      renderProductDetail(currentProductId);
      showScreen('product');
    });
  });
  catalog.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', (e) => { e.stopPropagation(); addToCart(parseInt(btn.dataset.id)); haptic('medium'); });
  });
  catalog.querySelectorAll('.favorite-btn').forEach(btn => {
    btn.addEventListener('click', (e) => { e.stopPropagation(); toggleFavorite(parseInt(btn.dataset.id)); });
  });
}

function getProductImage(product) {
  if (product.images && product.images.length > 0 && product.images[0]) {
    return `<img src="${product.images[0]}" alt="${escapeHtml(getLocalizedName(product))}" loading="lazy" />`;
  }
  return FLOWER_SVGS[product.icon] || FLOWER_SVGS.rose;
}

function renderProductDetail(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  document.getElementById('pdName').textContent = getLocalizedName(product);
  document.getElementById('pdPrice').textContent = formatPrice(product.price);
  document.getElementById('pdDesc').textContent = getLocalizedDesc(product);

  const track = document.getElementById('galleryTrack');
  const dots = document.getElementById('galleryDots');
  const counter = document.getElementById('galleryCounter');
  const images = (product.images && product.images.length > 0) ? product.images : [FLOWER_SVGS[product.icon] || FLOWER_SVGS.rose];
  const isPhoto = product.images && product.images.length > 0;

  track.innerHTML = images.map((img, i) => `<div class="gallery__slide" data-index="${i}">${isPhoto ? `<img src="${img}" alt="Фото ${i+1}" />` : img}</div>`).join('');

  if (images.length > 1) {
    dots.innerHTML = images.map((_, i) => `<span class="gallery__dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`).join('');
    dots.style.display = 'flex';
    counter.textContent = `1 / ${images.length}`;
    counter.style.display = 'block';
  } else {
    dots.style.display = 'none';
    counter.style.display = 'none';
  }

  let scrollTimeout;
  track.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const index = Math.round(track.scrollLeft / track.offsetWidth);
      dots.querySelectorAll('.gallery__dot').forEach((dot, i) => dot.classList.toggle('active', i === index));
      if (images.length > 1) counter.textContent = `${index + 1} / ${images.length}`;
    }, 50);
  }, { passive: true });

  dots.querySelectorAll('.gallery__dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const slide = track.children[parseInt(dot.dataset.index)];
      if (slide) { track.scrollTo({ left: slide.offsetLeft, behavior: 'smooth' }); haptic('light'); }
    });
  });

  const addBtn = document.getElementById('pdAddToCart');
  addBtn.onclick = () => { addToCart(product.id); haptic('medium'); addBtn.style.transform = 'scale(0.95)'; setTimeout(() => { addBtn.style.transform = ''; }, 200); };

  const favoriteBtn = document.getElementById('pdFavoriteBtn');
  if (favoriteBtn) {
    favoriteBtn.dataset.id = product.id;
    favoriteBtn.classList.toggle('active', isFavorite(product.id));
    favoriteBtn.onclick = () => toggleFavorite(product.id);
  }
}

// ============ CART ============
function addToCart(id) {
  const item = cart.find(i => i.id === id);
  if (item) item.qty++; else cart.push({ id, qty: 1 });
  saveCart(); updateCartBadge(true);
}
function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  saveCart(); renderCart(); updateCartBadge(true);
}
function saveCart() { localStorage.setItem('fl_cart', JSON.stringify(cart)); }
function updateCartBadge(bump = false) {
  const badge = document.getElementById('cartBadge');
  const total = cart.reduce((s, i) => s + i.qty, 0);
  if (total > 0) {
    badge.textContent = total; badge.classList.remove('hidden');
    if (bump) { badge.classList.remove('bump'); void badge.offsetWidth; badge.classList.add('bump'); }
  } else { badge.classList.add('hidden'); }
}
function renderCart() {
  const list = document.getElementById('cartList');
  const empty = document.getElementById('cartEmpty');
  const footer = document.getElementById('cartFooter');
  if (cart.length === 0) { empty.style.display = 'block'; footer.style.display = 'none'; list.innerHTML = ''; return; }
  empty.style.display = 'none'; footer.style.display = 'block';
  let total = 0;
  list.innerHTML = cart.map((item, i) => {
    const p = products.find(pr => pr.id === item.id);
    if (!p) return `<div class="cart-item" style="animation-delay: ${i * 0.05}s; opacity: 0.6;"><div class="cart-item__img"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="35" fill="#ddd"/></svg></div><div class="cart-item__info"><div class="cart-item__name">Товар видалено</div><div class="cart-item__price" style="color: var(--danger);">Недоступен</div></div><button class="qty-btn" data-action="remove" data-id="${item.id}" style="background: var(--danger); color: #fff;"><svg viewBox="0 0 24 24"><path d="M6 6 L18 18 M6 18 L18 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg></button></div>`;
    const sum = p.price * item.qty; total += sum;
    return `<div class="cart-item" style="animation-delay: ${i * 0.05}s">
      <div class="cart-item__img">${getProductImage(p)}</div>
      <div class="cart-item__info"><div class="cart-item__name">${escapeHtml(getLocalizedName(p))}</div><div class="cart-item__price">${formatPrice(sum)}</div></div>
      <div class="qty-controls">
        <button class="qty-btn" data-action="minus" data-id="${p.id}">${ICON_MINUS}</button>
        <span class="qty-value">${item.qty}</span>
        <button class="qty-btn" data-action="plus" data-id="${p.id}"><svg viewBox="0 0 24 24"><path d="M12 5 L12 19 M5 12 L19 12" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg></button>
      </div></div>`;
  }).join('');
  const totalEl = document.getElementById('cartTotal');
  totalEl.textContent = formatPrice(total); totalEl.classList.remove('bump'); void totalEl.offsetWidth; totalEl.classList.add('bump');
  list.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      if (btn.dataset.action === 'remove') { cart = cart.filter(i => i.id !== id); renderCart(); updateCartBadge(true); } 
      else { changeQty(id, btn.dataset.action === 'plus' ? 1 : -1); }
      haptic('light');
    });
  });
}
document.getElementById('checkoutBtn').addEventListener('click', () => { if (cart.length > 0) showScreen('order'); });

// ============ ORDER FORM ============
const orderForm = document.getElementById('orderForm');
const phoneInput = document.getElementById('customerPhone');
const phoneError = document.getElementById('phoneError');

phoneInput.addEventListener('input', (e) => {
  let v = e.target.value.replace(/\D/g, '');
  if (v.startsWith('0')) v = '380' + v.slice(1);
  if (v.startsWith('8') && v.length > 1) v = '3' + v.slice(1);
  if (!v.startsWith('380') && v.length > 0) v = v.startsWith('3') ? '380' + v.slice(1) : '380' + v;
  v = v.slice(0, 12);
  let formatted = '+380';
  if (v.length > 3) formatted += ' (' + v.slice(3, 5);
  if (v.length >= 6) formatted += ') ' + v.slice(5, 8);
  if (v.length >= 9) formatted += '-' + v.slice(8, 10);
  if (v.length >= 11) formatted += '-' + v.slice(10, 12);
  e.target.value = formatted;
});
phoneInput.addEventListener('focus', (e) => { if (!e.target.value) e.target.value = '+380 '; });

orderForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('customerName').value.trim();
  const phone = phoneInput.value.replace(/\D/g, '');
  if (name.length < 2) { phoneError.textContent = t('nameError'); haptic('heavy'); return; }
  if (phone.length !== 12) { phoneError.textContent = t('phoneError'); haptic('heavy'); return; }
  phoneError.textContent = '';

  const orderTotal = cart.reduce((s, i) => { const p = products.find(pr => pr.id === i.id); return s + (p?.price || 0) * i.qty; }, 0);
  const newOrder = {
    id: Date.now(), name, phone: phoneInput.value,
    items: cart.map(i => { const p = products.find(pr => pr.id === i.id); return { name: p ? getLocalizedName(p) : 'Товар видалено', qty: i.qty, price: p?.price || 0 }; }),
    total: orderTotal, currency: 'UAH', date: new Date().toISOString(), status: 'pending'
  };
  orders.push(newOrder);
  localStorage.setItem('fl_orders', JSON.stringify(orders));
  if (tg) { try { tg.sendData(JSON.stringify(newOrder)); } catch(err){} }
  cart = []; saveCart(); updateCartBadge(); orderForm.reset();
  document.getElementById('successModal').classList.add('modal--active');
  haptic('success');
});

document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('successModal').classList.remove('modal--active');
  setTimeout(() => showScreen('home', false), 300);
});
document.querySelector('.modal__backdrop').addEventListener('click', () => {
  document.getElementById('successModal').classList.remove('modal--active');
  setTimeout(() => showScreen('home', false), 300);
});

// ============ PROFILE ============
function updateProfileName() {
  if (tg?.initDataUnsafe?.user) {
    const u = tg.initDataUnsafe.user;
    document.getElementById('profileName').textContent = [u.first_name, u.last_name].filter(Boolean).join(' ') || t('user');
    if (u.photo_url) document.getElementById('profileAvatar').innerHTML = `<img src="${u.photo_url}" alt="Avatar" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" />`;
  } else {
    document.getElementById('profileName').textContent = t('guest');
  }
}
document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', () => {
    const action = item.dataset.action;
    if (action === 'favorites') { renderFavorites(); showScreen('favorites'); } 
    else if (action === 'orders') { renderOrders(); showScreen('orders'); } 
    else if (action === 'admin') { showScreen('admin'); }
  });
});

// ============ IMAGE COMPRESSION (Оптимизировано для Google Sheets) ============
function compressImage(file, maxSize = 400, quality = 0.5) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let { width, height } = img;
        if (width > height && width > maxSize) { height = Math.round(height * (maxSize / width)); width = maxSize; } 
        else if (height > maxSize) { width = Math.round(width * (maxSize / height)); height = maxSize; }
        canvas.width = width; canvas.height = height;
        canvas.getContext('2d').drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.onerror = reject; img.src = e.target.result;
    };
    reader.onerror = reject; reader.readAsDataURL(file);
  });
}

// ============ ADMIN PHOTO UPLOAD ============
const photoInput = document.getElementById('prodPhotos');
const photoPreview = document.getElementById('photoPreview');

photoInput.addEventListener('change', async (e) => {
  const files = Array.from(e.target.files);
  if (!files.length) return;
  const remaining = 5 - pendingPhotos.length;
  const filesToAdd = files.slice(0, remaining);
  for (const file of filesToAdd) {
    if (!file.type.startsWith('image/')) continue;
    if (file.size > 5 * 1024 * 1024) { alert(t('photoHint')); continue; }
    try {
      const compressed = await compressImage(file);
      pendingPhotos.push(compressed);
      haptic('light');
    } catch (err) { console.error('Image compress error:', err); }
  }
  renderPhotoPreview();
  photoInput.value = '';
});

function renderPhotoPreview() {
  photoPreview.innerHTML = pendingPhotos.map((src, i) => `
    <div class="photo-preview__item">
      <img src="${src}" alt="Фото ${i+1}" />
      <button class="photo-preview__remove" data-index="${i}" type="button">×</button>
    </div>`).join('');
  photoPreview.querySelectorAll('.photo-preview__remove').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.index);
      const item = btn.closest('.photo-preview__item');
      item.style.transform = 'scale(0)'; item.style.opacity = '0';
      setTimeout(() => { pendingPhotos.splice(idx, 1); renderPhotoPreview(); haptic('light'); }, 200);
    });
  });
}

// ============ ADMIN (ADD / EDIT / DELETE) ============
const adminForm = document.getElementById('adminForm');

function editProduct(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  editingProductId = id;
  document.getElementById('prodName').value = getLocalizedName(product);
  document.getElementById('prodPrice').value = product.price;
  document.getElementById('prodDesc').value = getLocalizedDesc(product);
  document.getElementById('prodIcon').value = product.icon;
  pendingPhotos = product.images ? [...product.images] : [];
  renderPhotoPreview();
  const addBtn = document.querySelector('[data-i18n="adminAddBtn"]');
  if (addBtn) addBtn.textContent = t('adminEditBtn');
  document.getElementById('adminForm').scrollIntoView({ behavior: 'smooth', block: 'start' });
  haptic('medium');
}

adminForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('prodName').value.trim();
  const price = parseInt(document.getElementById('prodPrice').value);
  const desc = document.getElementById('prodDesc').value.trim();
  const icon = document.getElementById('prodIcon').value;
  if (!name || !price) return;

  const isNewProduct = !editingProductId;
  const productId = isNewProduct ? Date.now() : editingProductId;

  const productPayload = {
    id: productId, name_ua: name, name_ru: name, price: price, desc_ua: desc, desc_ru: desc, icon: icon,
    images: pendingPhotos.join(',')
  };

  const addBtn = document.querySelector('[data-i18n="adminAddBtn"]');
  const originalBtnText = addBtn ? addBtn.textContent : 'Додати';
  if (addBtn) addBtn.textContent = '⏳ Збереження...';

  try {
    // Проверяем, существует ли товар
    const checkResponse = await fetch(`${SUPABASE_URL}/rest/v1/products?id=eq.${productId}`, {
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`
      }
    });
    const existing = await checkResponse.json();

    let response;
    if (existing.length > 0) {
      // Обновляем существующий
      response = await fetch(`${SUPABASE_URL}/rest/v1/products?id=eq.${productId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Prefer': 'return=representation'
        },
        body: JSON.stringify(productPayload)
      });
    } else {
      // Создаём новый
      response = await fetch(`${SUPABASE_URL}/rest/v1/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Prefer': 'return=representation'
        },
        body: JSON.stringify(productPayload)
      });
    }

    if (response.ok) {
      await loadProductsFromServer();
      adminForm.reset(); pendingPhotos = []; renderPhotoPreview(); editingProductId = null;
      if (addBtn) addBtn.textContent = originalBtnText;
      haptic('success');
    } else { throw new Error('Server error'); }
  } catch (err) {
    console.error('Помилка:', err);
    alert('Немає зв\'язку з сервером.');
    if (addBtn) addBtn.textContent = originalBtnText;
  }
});

function renderAdmin() {
  document.getElementById('adminCount').textContent = products.length;
  const list = document.getElementById('adminProducts');
  if (products.length === 0) {
    list.innerHTML = `<div class="catalog-empty" style="padding: 30px 20px;"><p style="font-size: 15px;">${currentLang === 'ua' ? 'Товарів ще немає' : 'Товаров ещё нет'}</p></div>`;
    return;
  }
  list.innerHTML = products.map((p, i) => {
    const thumbs = (p.images && p.images.length > 0)
      ? `<div class="admin-product__photos">${p.images.slice(0, 4).map(src => `<img class="admin-product__thumb" src="${src}" alt="" />`).join('')}${p.images.length > 4 ? `<span class="admin-product__thumb" style="display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:var(--primary-dark);">+${p.images.length - 4}</span>` : ''}</div>`
      : '';
    return `
      <div class="admin-product" style="animation-delay: ${i * 0.04}s">
        <div class="admin-product__img">${getProductImage(p)}</div>
        <div class="admin-product__info">
          <div class="admin-product__name">${escapeHtml(getLocalizedName(p))}</div>
          <div class="admin-product__price">${formatPrice(p.price)}</div>
          ${thumbs}
        </div>
        <div style="display:flex;gap:6px;">
          <button class="edit-btn" data-id="${p.id}">${ICON_EDIT}</button>
          <button class="delete-btn" data-id="${p.id}">${ICON_DELETE}</button>
        </div>
      </div>`;
  }).join('');

  list.querySelectorAll('.edit-btn').forEach(btn => btn.addEventListener('click', () => editProduct(parseInt(btn.dataset.id))));
  list.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      const card = btn.closest('.admin-product');
      card.classList.add('removing'); haptic('light');
      setTimeout(() => {
        products = products.filter(p => p.id !== id);
        localStorage.setItem('fl_products', JSON.stringify(products));
        if (editingProductId === id) {
          editingProductId = null; adminForm.reset(); pendingPhotos = []; renderPhotoPreview();
          const addBtn = document.querySelector('[data-i18n="adminAddBtn"]');
          if (addBtn) addBtn.textContent = t('adminAddBtn');
        }
        renderAdmin();
      }, 300);
    });
  });
}

// ============ UTILS ============
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}

// ============ INIT ============
applyTranslations();
updateProfileName();
updateAdminVisibility();
updateCartBadge();
updateFavoriteButtons();
loadProductsFromServer(); // Загружаем товары с твоего n8n при старте