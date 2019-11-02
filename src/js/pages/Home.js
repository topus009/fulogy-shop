import React from 'react';
import CustomTabs from '../components/common/CustomTabs';

const tabItems = [
  {
    label: 'Вариант кухни',
    component: '1',
  },
  {
    label: 'Размеры',
    component: '2',
  },
  {
    label: 'Сенсор',
    component: '3',
  },
  {
    label: 'Питающий кабель',
    component: '4',
  },
  {
    label: 'Блок питания',
    component: '5',
  },
  {
    label: 'Цвет свечения',
    component: '6',
  },
  {
    label: 'Монтаж',
    component: '7',
  },
  {
    label: 'Корзина',
    component: '8',
  },
];

const Home = () => {
  return <CustomTabs tabs={tabItems} defaultTab={5} />;
};

export default Home;
