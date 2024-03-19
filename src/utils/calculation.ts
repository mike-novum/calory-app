type ActivityType = 1.2 | 1.375 | 1.55 | 1.725 | 1.9;

type InputProps = {
  activity: ActivityType;
  weight: number;
  height: number;
  age: number;
  sex: "male" | "female";
};

type MifflinFunction = (params: InputProps) => number;

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

type HarrisFuntion = (params: InputProps) => number;

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

export const calculateCalories = (
  params: { mode: "harris" | "mifflin" } & InputProps,
): number => {
  return params.mode === "mifflin"
    ? calculateMifflin(params)
    : calculateHarris(params);
};
