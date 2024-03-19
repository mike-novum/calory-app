import { createEvent, createStore } from 'effector';
import { calculateHarris, calculateMifflin } from './lib/calculation';
import { ActivityType, GoalType, Mode, SexType } from './types';



export type CaloryStore = {
    activity: ActivityType;
    weight: number;
    height: number;
    age: number;
    sex: SexType;
    mode:Mode;
    goal:GoalType;
};

export const changedAge = createEvent<number>();
export const changedHeight = createEvent<number>();
export const changedWeight = createEvent<number>();
export const changedSex = createEvent<SexType>();
export const changedActivity = createEvent<ActivityType>();
export const changedMode = createEvent<Mode>();
export const changedGoal = createEvent<GoalType>();

export const $caloryStore = createStore<CaloryStore>({
    activity: 1.2,
    weight: 60,
    height: 180,
    age: 20,
    sex: 'female',
    mode:'mifflin',
    goal:'save'
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
}))
.on(changedGoal, (store, goal) => ({
    ...store,
    goal,
}));

export const $calories = $caloryStore.map((store) =>{
    const result = store.mode==='mifflin'?calculateMifflin(store): calculateHarris(store);

    if(store.goal==='down'){
        return result*0.8;
    }

    if(store.goal==='up'){
        return result*1.16;
    }


    return result;
});