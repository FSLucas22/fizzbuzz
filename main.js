import { RULES } from './constants.js'


export default function resultList(rules=RULES, evaluationMethod=evaluateOutput) {
    const results = [];
    for (const counter = rules.start; counter <= rules.rules.end; counter++) {
        results.push(evaluationMethod(rules, counter));
    }
    return results;
}


function evaluateOutput(rules, index) {
    const output = '';
    for (const keyObject of rules.keys) {
        const condition = rules.conditions[keyObject.name];
        if (condition(index)) {
            output += ' ' + keyObject.value;
        }
    }
    return output === '' ? rules.defaultBehavior(index) : output;
}
