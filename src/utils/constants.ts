import { ActivityItem, GoalItem } from "./types";

export const MaleActivityList: ActivityItem[] = [
  {
    activity: 1.2,
    title: "Я и диван - монолит",
  },
  {
    activity: 1.375,
    title: "Иногда хожу в магаз и погулять с корешами",
  },
  {
    activity: 1.55,
    title: "Чучуть хожу в качалку",
  },
  {
    activity: 1.725,
    title: "Активно хожу в качалку, часто нахожусь в движении",
  },
  {
    activity: 1.9,
    title: "Гигаспорстмен",
  },
];

export const FemaleActivityList: ActivityItem[] = [
  {
    activity: 1.2,
    title: "Разлагаюсь под сериалы",
  },
  {
    activity: 1.375,
    title: "Иногда хожу в магаз и погулять с собакой/кошкой/подругой",
  },
  {
    activity: 1.55,
    title: "Чучуть фитоняшка, фитнес и все такое ",
  },
  {
    activity: 1.725,
    title: "Регулярно хожу в зал, чтобы было что фоткать в инстик",
  },
  {
    activity: 1.9,
    title: "Тягаю железо 24/7, как мужланы",
  },
];

export const MaleGoals: GoalItem[] = [
  {
    title: "Остаться прежним",
    value: "save",
  },
  {
    title: "Стать дрыщем",
    value: "down",
  },
  {
    title: "Стать бигсмоуком",
    value: "up",
  },
];

export const FemaleGoals: GoalItem[] = [
  {
    title: "Оставаться такой же красивой",
    value: "save",
  },
  {
    title: "Стать стройняшкой к лету",
    value: "down",
  },
  {
    title: "Стать сочнее",
    value: "up",
  },
];
