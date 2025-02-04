class CommitRules {
    constructor() {
        this.rules = [];
    }

    addRule(rule) {
        if (typeof rule === 'function') {
            this.rules.push(rule);
        } else {
            throw new Error('Rule must be a function');
        }
    }

    validate(commitMessage) {
        for (let rule of this.rules) {
            const result = rule(commitMessage);
            if (!result.isValid) {
                return result;
            }
        }
        return { isValid: true, message: 'Commit message is valid' };
    }
}

// Example rules
const minLengthRule = (commitMessage) => {
    const isValid = commitMessage.length >= 10;
    return {
        isValid,
        message: isValid ? 'Valid' : 'Commit message must be at least 10 characters long'
    };
};

const noWipRule = (commitMessage) => {
    const isValid = !commitMessage.toLowerCase().includes('wip');
    return {
        isValid,
        message: isValid ? 'Valid' : 'Commit message must not contain "WIP"'
    };
};

// Additional rules
const noSpecialCharsRule = (commitMessage) => {
    const isValid = /^[a-zA-Z0-9 ]*$/.test(commitMessage);
    return {
        isValid,
        message: isValid ? 'Valid' : 'Commit message must not contain special characters'
    };
};

const noRepeatedWordsRule = (commitMessage) => {
    const words = commitMessage.split(' ');
    const wordSet = new Set(words);
    const isValid = words.length === wordSet.size;
    return {
        isValid,
        message: isValid ? 'Valid' : 'Commit message must not contain repeated words'
    };
};

const noTrailingSpacesRule = (commitMessage) => {
    const isValid = commitMessage === commitMessage.trim();
    return {
        isValid,
        message: isValid ? 'Valid' : 'Commit message must not have trailing spaces'
    };
};

const noUpperCaseRule = (commitMessage) => {
    const isValid = commitMessage === commitMessage.toLowerCase();
    return {
        isValid,
        message: isValid ? 'Valid' : 'Commit message must not contain uppercase letters'
    };
};

const noNumbersRule = (commitMessage) => {
    const isValid = !/\d/.test(commitMessage);
    return {
        isValid,
        message: isValid ? 'Valid' : 'Commit message must not contain numbers'
    };
};

// Usage
const commitRules = new CommitRules();
commitRules.addRule(minLengthRule);
commitRules.addRule(noWipRule);
commitRules.addRule(noSpecialCharsRule);
commitRules.addRule(noRepeatedWordsRule);
commitRules.addRule(noTrailingSpacesRule);
commitRules.addRule(noUpperCaseRule);
commitRules.addRule(noNumbersRule);

const commitMessage = 'Initial commit';
const validationResult = commitRules.validate(commitMessage);
console.log(validationResult);

// Additional usage examples
const commitMessage2 = 'Fix bug in the system';
const validationResult2 = commitRules.validate(commitMessage2);
console.log(validationResult2);

const commitMessage3 = 'WIP: Add new feature';
const validationResult3 = commitRules.validate(commitMessage3);
console.log(validationResult3);

const commitMessage4 = 'Initial commit!!!';
const validationResult4 = commitRules.validate(commitMessage4);
console.log(validationResult4);

const commitMessage5 = 'Initial commit initial commit';
const validationResult5 = commitRules.validate(commitMessage5);
console.log(validationResult5);

const commitMessage6 = 'Initial commit ';
const validationResult6 = commitRules.validate(commitMessage6);
console.log(validationResult6);

const commitMessage7 = 'INITIAL COMMIT';
const validationResult7 = commitRules.validate(commitMessage7);
console.log(validationResult7);

const commitMessage8 = 'Initial commit 123';
const validationResult8 = commitRules.validate(commitMessage8);
console.log(validationResult8);

const commitMessage9 = 'Initial commit with no issues';
const validationResult9 = commitRules.validate(commitMessage9);
console.log(validationResult9);

const commitMessage10 = 'Another valid commit message';
const validationResult10 = commitRules.validate(commitMessage10);
console.log(validationResult10);

const commitMessage11 = 'Short';
const validationResult11 = commitRules.validate(commitMessage11);
console.log(validationResult11);

const commitMessage12 = 'WIP: Short';
const validationResult12 = commitRules.validate(commitMessage12);
console.log(validationResult12);

const commitMessage13 = 'Valid message with no issues';
const validationResult13 = commitRules.validate(commitMessage13);
console.log(validationResult13);

const commitMessage14 = 'Another valid message';
const validationResult14 = commitRules.validate(commitMessage14);
console.log(validationResult14);

const commitMessage15 = 'Valid message with no issues at all';
const validationResult15 = commitRules.validate(commitMessage15);
console.log(validationResult15);

const commitMessage16 = 'Another valid message with no issues';
const validationResult16 = commitRules.validate(commitMessage16);
console.log(validationResult16);

const commitMessage17 = 'Valid message with no issues at all again';
const validationResult17 = commitRules.validate(commitMessage17);
console.log(validationResult17);

const commitMessage18 = 'Another valid message with no issues again';
const validationResult18 = commitRules.validate(commitMessage18);
console.log(validationResult18);

const commitMessage19 = 'Valid message with no issues at all once more';
const validationResult19 = commitRules.validate(commitMessage19);
console.log(validationResult19);

const commitMessage20 = 'Another valid message with no issues once more';
const validationResult20 = commitRules.validate(commitMessage20);
console.log(validationResult20);
