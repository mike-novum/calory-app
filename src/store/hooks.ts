import { useUnit } from "effector-react";
import { $caloryStore } from "./store";
import {
  $calories,
  changedActivity,
  changedGoal,
  changedHeight,
  changedWeight,
  changedAge,
  changedMode,
  changedSex,
} from ".";

export const useMode = () =>
  useUnit([$caloryStore.map((store) => store.mode), changedMode]);

export const useSex = () =>
  useUnit([$caloryStore.map((store) => store.sex), changedSex]);

export const useGoal = () =>
  useUnit([$caloryStore.map((store) => store.goal), changedGoal]);

export const useActivity = () =>
  useUnit([$caloryStore.map((store) => store.activity), changedActivity]);

export const useBodyParams = () =>
  useUnit(
    $caloryStore.map(({ weight, height, age }) => ({
      weight,
      height,
      age,
      changedHeight,
      changedWeight,
      changedAge,
    })),
  );

export const useCalories = () => useUnit($calories);
