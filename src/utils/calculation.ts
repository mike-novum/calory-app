import { ActivityType, Mode, SexType } from "./types";

type InputProps = {
  activity: ActivityType;
  weight: number;
  height: number;
  age: number;
  sex: SexType;
};

type CalcFunction = (params: InputProps) => number;

type MifflinFunction = CalcFunction;

type HarrisFuntion = CalcFunction;

type CalculateCaloriesFunction = (
  params: { mode: Mode } & InputProps,
) => number;

export const calculateMifflin: MifflinFunction = ({
  weight,
  height,
  activity,
  age,
  sex,
}) => {
  const sexDiff = sex === "female" ? -161 : 5;
  const calories = (10 * weight + 6.25 * height - 5 * age + sexDiff) * activity;
  return calories;
};

export const calculateHarris: HarrisFuntion = ({
  weight,
  height,
  activity,
  age,
  sex,
}) => {
  const ratio = sex === "female" ? 447.593 : 88.362;
  const weightRatio = sex === "female" ? 9.247 : 13.397;
  const heightRatio = sex === "female" ? 3.098 : 4.799;
  const ageRatio = sex === "female" ? 4.33 : 5.677;

  const bmr =
    ratio + weightRatio * weight + heightRatio * height - ageRatio * age;
  const amr = activity;

  const calories = bmr * amr;
  return calories;
};

export const calculateCalories: CalculateCaloriesFunction = (params) => {
  return params.mode === "mifflin"
    ? calculateMifflin(params)
    : calculateHarris(params);
};
