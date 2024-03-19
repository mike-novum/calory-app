export type ActivityType = 1.2 | 1.375 | 1.55 | 1.725 | 1.9;

export type SexType = "male" | "female";

export type Mode = "harris" | "mifflin";

export type GoalType = "save" | "up" | "down";

export type GoalItem = {
  title: string;
  value: GoalType;
};

export type ActivityItem = { title: string; activity: ActivityType };
