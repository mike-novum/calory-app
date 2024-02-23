import { createEvent, createStore } from 'effector';
import { calculateHarris, calculateMifflin } from './lib/calculation';

export type ActivityType = 1.2 | 1.375 | 1.55 | 1.725 | 1.9;

type SexType = 'male' | 'female';

type Mode = 'harris' | 'mifflin';

export type CaloryStore = {
    activity: ActivityType;
    weight: number;
    height: number;
    age: number;
    sex: SexType;
    mode:'harris' | 'mifflin';
};

export const changedAge = createEvent<number>();
export const changedHeight = createEvent<number>();
export const changedWeight = createEvent<number>();
export const changedSex = createEvent<SexType>();
export const changedActivity = createEvent<ActivityType>();
export const changedMode = createEvent<Mode>();

export const $caloryStore = createStore<CaloryStore>({
    activity: 1.2,
    weight: 0,
    height: 0,
    age: 0,
    sex: 'female',
    mode:'mifflin'
})
.on(changedActivity, (store, activity) => ({
    ...store,
    activity,
}))
.on(changedAge, (store, age) => ({
    ...store,
    age,
}))
.on(changedWeight, (store, weight) => ({
    ...store,
    weight,
}))
.on(changedHeight, (store, height) => ({
    ...store,
    height,
}))
.on(changedSex, (store, sex) => ({
    ...store,
    sex,
}))
.on(changedMode, (store, mode) => ({
    ...store,
    mode,
}));


export const $calories = $caloryStore.map((store) =>store.mode==='mifflin'?calculateMifflin(store): calculateHarris(store));