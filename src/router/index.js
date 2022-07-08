import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../pages/MainPage';
import UsersListPage from '../pages/UsersListPage';
import UsersListPageVuex from '../pages/UsersListPageVuex';
import SettingsPage from '../pages/SettingsPage';
import UserPage from '../pages/UserPage';

const routes = [
    {
        path: '/',
        component: MainPage,
    },
    {
        path: '/users',
        component: UsersListPage,
    },
    {
        path: '/users/vuex',
        component: UsersListPageVuex,
    },
    {
        path: '/settings',
        component: SettingsPage,
    },
    {
        path: '/users/:id',
        component: UserPage,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
