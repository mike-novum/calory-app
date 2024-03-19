import { createEvent } from "effector";
import { ActivityType, GoalType, Mode, SexType } from "../utils/types";

export const changedAge = createEvent<number>();
export const changedHeight = createEvent<number>();
export const changedWeight = createEvent<number>();
export const changedSex = createEvent<SexType>();
export const changedActivity = createEvent<ActivityType>();
export const changedMode = createEvent<Mode>();
export const changedGoal = createEvent<GoalType>();
