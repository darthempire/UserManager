import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Панель',  icon: 'dashboard', class: '' },
    { path: 'user', title: 'Профиль',  icon:'person', class: '' },
    { path: 'table', title: 'Таблицы',  icon:'content_paste', class: '' },
    // { path: 'typography', title: 'Типография',  icon:'library_books', class: '' },
    // { path: 'icons', title: 'Картинки',  icon:'bubble_chart', class: '' },
    { path: 'maps', title: 'Карты',  icon:'location_on', class: '' },
    { path: 'notifications', title: 'Оповещения',  icon:'notifications', class: '' },
    { path: 'auth', title: 'Регистрация',  icon:'notifications', class: '' },
    { path: 'login', title: 'Авторизация',  icon:'notifications', class: '' },
    // { path: 'upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];
