import { createStore } from "effector";
import { ActivityType, GoalType, Mode, SexType } from "../utils/types";
import {
  changedActivity,
  changedAge,
  changedGoal,
  changedHeight,
  changedMode,
  changedSex,
  changedWeight,
} from "./events";

export type CaloryStore = {
  activity: ActivityType;
  weight: number;
  height: number;
  age: number;
  sex: SexType;
  mode: Mode;
  goal: GoalType;
};

export const $caloryStore = createStore<CaloryStore>({
  activity: 1.2,
  weight: 60,
  height: 180,
  age: 20,
  sex: "female",
  mode: "mifflin",
  goal: "save",
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
