export const COUNTER_START = 1;
export const COUNTER_END = 100;

export const CONDITIONS = {
    modFive(integer) { return integer % 5 },
    modThree(integer) { return integer % 3 }
};

export const KEYS = [
    {'name': 'modThree', 'value': 'fizz'},
    {'name': 'modFive', 'value': 'buzz'},
];

export const DEFAULT_BEHAVIOR_FUNCTION = integer => integer.toString()

export const RULES = {
    start: COUNTER_START,
    end: COUNTER_END,
    conditions: CONDITIONS,
    keys: KEYS,
    defaultBehavior: DEFAULT_BEHAVIOR_FUNCTION
}