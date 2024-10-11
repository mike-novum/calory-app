import { createEvent } from "effector";
import { ActivityType, GoalType, Mode, SexType } from "../utils/types";

export const changedAge = createEvent<string>();
export const changedHeight = createEvent<string>();
export const changedWeight = createEvent<string>();
export const changedSex = createEvent<SexType>();
export const changedActivity = createEvent<ActivityType>();
export const changedMode = createEvent<Mode>();
export const changedGoal = createEvent<GoalType>();
