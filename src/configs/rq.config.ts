const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
const YEAR = DAY * 365.25;

export const rq = {
  STALETIME_MOMENT: SECOND,
  STALETIME_AVOID_EFFECT_DUP_FETCH: 5 * SECOND,
  STALETIME_1_MIN: MINUTE,
  STALETIME_10_MIN: 10 * MINUTE,
  STALETIME_1_HOUR: HOUR,
  STALETIME_INFINITY: Infinity,
};
