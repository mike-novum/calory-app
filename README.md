# Calory App


![React](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite&logoColor=white)
![Effector](https://img.shields.io/badge/Effector-23-7f00ff?logo=effector&logoColor=white)
![styled-components](https://img.shields.io/badge/styled--components-6-db7093?logo=styled-components&logoColor=white)



Минималистичный калькулятор калорий на день по двум классическим формулам —
**Миффлина-Сан Жеора** и **Харриса-Бенедикта**. Вводишь пол, возраст, рост, вес,
уровень активности и цель — получаешь дневную норму калорий и распределение по
БЖУ.

![Desktop](./screenshots/desktop.png)

## Возможности

- Две формулы расчёта на выбор
- Учёт пола, возраста, роста, веса и уровня физической активности
- Цель: сохранить вес, похудеть или набрать массу
- Распределение калорий по белкам / жирам / углеводам
- Адаптивная вёрстка под десктоп и мобильные устройства

## Запуск

```bash
# установка зависимостей
npm install

# dev-сервер с HMR на http://localhost:5173
npm run dev

# прод-сборка в ./dist
npm run build

# локальный просмотр собранного бандла
npm run preview

# линтер
npm run lint
```