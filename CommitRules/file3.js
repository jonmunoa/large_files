// This is a sample JavaScript file with 500 lines of code

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero");
    }
    return a / b;
}

// Function to calculate the factorial of a number
function factorial(n) {
    if (n < 0) {
        throw new Error("Negative number");
    }
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Function to check if a number is prime
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Function to find the greatest common divisor of two numbers
function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

// Function to find the least common multiple of two numbers
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

// Function to calculate the power of a number
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    return base * power(base, exponent - 1);
}

// Function to calculate the square root of a number
function sqrt(n) {
    if (n < 0) {
        throw new Error("Negative number");
    }
    return Math.sqrt(n);
}

// Function to calculate the absolute value of a number
function abs(n) {
    return Math.abs(n);
}

// Function to calculate the sine of an angle in radians
function sin(angle) {
    return Math.sin(angle);
}

// Function to calculate the cosine of an angle in radians
function cos(angle) {
    return Math.cos(angle);
}

// Function to calculate the tangent of an angle in radians
function tan(angle) {
    return Math.tan(angle);
}

// Function to convert degrees to radians
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

// Function to convert radians to degrees
function radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
}

// Function to generate a random number between min and max
function random(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to generate a random integer between min and max
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to find the maximum value in an array
function max(array) {
    return Math.max(...array);
}

// Function to find the minimum value in an array
function min(array) {
    return Math.min(...array);
}

// Function to calculate the sum of an array
function sum(array) {
    return array.reduce((acc, val) => acc + val, 0);
}

// Function to calculate the average of an array
function average(array) {
    return sum(array) / array.length;
}

// Function to calculate the median of an array
function median(array) {
    const sorted = array.slice().sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }
    return sorted[middle];
}

// Function to calculate the mode of an array
function mode(array) {
    const frequency = {};
    array.forEach(value => {
        frequency[value] = (frequency[value] || 0) + 1;
    });
    let maxFrequency = 0;
    let modes = [];
    for (const key in frequency) {
        if (frequency[key] > maxFrequency) {
            maxFrequency = frequency[key];
            modes = [Number(key)];
        } else if (frequency[key] === maxFrequency) {
            modes.push(Number(key));
        }
    }
    return modes;
}

// Function to calculate the range of an array
function range(array) {
    return max(array) - min(array);
}

// Function to calculate the variance of an array
function variance(array) {
    const avg = average(array);
    return average(array.map(value => (value - avg) ** 2));
}

// Function to calculate the standard deviation of an array
function standardDeviation(array) {
    return Math.sqrt(variance(array));
}

// Function to calculate the z-score of a value in an array
function zScore(value, array) {
    return (value - average(array)) / standardDeviation(array);
}

// Function to calculate the percentile of a value in an array
function percentile(value, array) {
    const sorted = array.slice().sort((a, b) => a - b);
    const rank = sorted.indexOf(value) + 1;
    return (rank / sorted.length) * 100;
}

// Function to calculate the correlation coefficient of two arrays
function correlationCoefficient(array1, array2) {
    const avg1 = average(array1);
    const avg2 = average(array2);
    const numerator = sum(array1.map((value, index) => (value - avg1) * (array2[index] - avg2)));
    const denominator = Math.sqrt(sum(array1.map(value => (value - avg1) ** 2)) * sum(array2.map(value => (value - avg2) ** 2)));
    return numerator / denominator;
}

// Function to calculate the linear regression of two arrays
function linearRegression(array1, array2) {
    const avg1 = average(array1);
    const avg2 = average(array2);
    const slope = sum(array1.map((value, index) => (value - avg1) * (array2[index] - avg2))) / sum(array1.map(value => (value - avg1) ** 2));
    const intercept = avg2 - slope * avg1;
    return { slope, intercept };
}

// Function to calculate the exponential regression of two arrays
function exponentialRegression(array1, array2) {
    const logArray2 = array2.map(value => Math.log(value));
    const { slope, intercept } = linearRegression(array1, logArray2);
    return { a: Math.exp(intercept), b: slope };
}

// Function to calculate the logarithmic regression of two arrays
function logarithmicRegression(array1, array2) {
    const logArray1 = array1.map(value => Math.log(value));
    const { slope, intercept } = linearRegression(logArray1, array2);
    return { a: intercept, b: slope };
}

// Function to calculate the power regression of two arrays
function powerRegression(array1, array2) {
    const logArray1 = array1.map(value => Math.log(value));
    const logArray2 = array2.map(value => Math.log(value));
    const { slope, intercept } = linearRegression(logArray1, logArray2);
    return { a: Math.exp(intercept), b: slope };
}

// Function to calculate the moving average of an array
function movingAverage(array, windowSize) {
    const result = [];
    for (let i = 0; i <= array.length - windowSize; i++) {
        result.push(average(array.slice(i, i + windowSize)));
    }
    return result;
}

// Function to calculate the weighted moving average of an array
function weightedMovingAverage(array, weights) {
    const result = [];
    const windowSize = weights.length;
    for (let i = 0; i <= array.length - windowSize; i++) {
        result.push(sum(array.slice(i, i + windowSize).map((value, index) => value * weights[index])) / sum(weights));
    }
    return result;
}

// Function to calculate the exponential moving average of an array
function exponentialMovingAverage(array, alpha) {
    const result = [array[0]];
    for (let i = 1; i < array.length; i++) {
        result.push(alpha * array[i] + (1 - alpha) * result[i - 1]);
    }
    return result;
}

// Function to calculate the cumulative sum of an array
function cumulativeSum(array) {
    const result = [];
    array.reduce((acc, value, index) => {
        result[index] = acc + value;
        return result[index];
    }, 0);
    return result;
}

// Function to calculate the cumulative product of an array
function cumulativeProduct(array) {
    const result = [];
    array.reduce((acc, value, index) => {
        result[index] = acc * value;
        return result[index];
    }, 1);
    return result;
}

// Function to calculate the cumulative maximum of an array
function cumulativeMax(array) {
    const result = [];
    array.reduce((acc, value, index) => {
        result[index] = Math.max(acc, value);
        return result[index];
    }, -Infinity);
    return result;
}

// Function to calculate the cumulative minimum of an array
function cumulativeMin(array) {
    const result = [];
    array.reduce((acc, value, index) => {
        result[index] = Math.min(acc, value);
        return result[index];
    }, Infinity);
    return result;
}

// Function to calculate the cumulative average of an array
function cumulativeAverage(array) {
    const result = [];
    array.reduce((acc, value, index) => {
        result[index] = (acc * index + value) / (index + 1);
        return result[index];
    }, 0);
    return result;
}

// Function to calculate the cumulative variance of an array
function cumulativeVariance(array) {
    const result = [];
    array.reduce((acc, value, index) => {
        const avg = (acc.sum * index + value) / (index + 1);
        const variance = (acc.variance * index + (value - avg) ** 2) / (index + 1);
        result[index] = variance;
        return { sum: acc.sum + value, variance };
    }, { sum: 0, variance: 0 });
    return result;
}

// Function to calculate the cumulative standard deviation of an array
function cumulativeStandardDeviation(array) {
    return cumulativeVariance(array).map(Math.sqrt);
}

// Function to calculate the cumulative z-score of an array
function cumulativeZScore(array) {
    const avg = cumulativeAverage(array);
    const stdDev = cumulativeStandardDeviation(array);
    return array.map((value, index) => (value - avg[index]) / stdDev[index]);
}

// Function to calculate the cumulative percentile of an array
function cumulativePercentile(array) {
    const sorted = array.slice().sort((a, b) => a - b);
    return array.map(value => (sorted.indexOf(value) + 1) / sorted.length * 100);
}

// Function to calculate the cumulative correlation coefficient of two arrays
function cumulativeCorrelationCoefficient(array1, array2) {
    const result = [];
    array1.reduce((acc, value, index) => {
        const avg1 = (acc.sum1 * index + value) / (index + 1);
        const avg2 = (acc.sum2 * index + array2[index]) / (index + 1);
        const numerator = acc.numerator + (value - avg1) * (array2[index] - avg2);
        const denominator = Math.sqrt((acc.denominator1 + (value - avg1) ** 2) * (acc.denominator2 + (array2[index] - avg2) ** 2));
        result[index] = numerator / denominator;
        return {
            sum1: acc.sum1 + value,
            sum2: acc.sum2 + array2[index],
            numerator,
            denominator1: acc.denominator1 + (value - avg1) ** 2,
            denominator2: acc.denominator2 + (array2[index] - avg2) ** 2
        };
    }, { sum1: 0, sum2: 0, numerator: 0, denominator1: 0, denominator2: 0 });
    return result;
}

// Function to calculate the cumulative linear regression of two arrays
function cumulativeLinearRegression(array1, array2) {
    const result = [];
    array1.reduce((acc, value, index) => {
        const avg1 = (acc.sum1 * index + value) / (index + 1);
        const avg2 = (acc.sum2 * index + array2[index]) / (index + 1);
        const slope = (acc.slope * index + (value - avg1) * (array2[index] - avg2)) / (index + 1);
        const intercept = avg2 - slope * avg1;
        result[index] = { slope, intercept };
        return {
            sum1: acc.sum1 + value,
            sum2: acc.sum2 + array2[index],
            slope
        };
    }, { sum1: 0, sum2: 0, slope: 0 });
    return result;
}

// Function to calculate the cumulative exponential regression of two arrays
function cumulativeExponentialRegression(array1, array2) {
    const logArray2 = array2.map(value => Math.log(value));
    return cumulativeLinearRegression(array1, logArray2).map(({ slope, intercept }) => ({ a: Math.exp(intercept), b: slope }));
}

// Function to calculate the cumulative logarithmic regression of two arrays
function cumulativeLogarithmicRegression(array1, array2) {
    const logArray1 = array1.map(value => Math.log(value));
    return cumulativeLinearRegression(logArray1, array2).map(({ slope, intercept }) => ({ a: intercept, b: slope }));
}

// Function to calculate the cumulative power regression of two arrays
function cumulativePowerRegression(array1, array2) {
    const logArray1 = array1.map(value => Math.log(value));
    const logArray2 = array2.map(value => Math.log(value));
    return cumulativeLinearRegression(logArray1, logArray2).map(({ slope, intercept }) => ({ a: Math.exp(intercept), b: slope }));
}

// Function to calculate the hyperbolic sine of a number
function sinh(x) {
    return (Math.exp(x) - Math.exp(-x)) / 2;
}

// Function to calculate the hyperbolic cosine of a number
function cosh(x) {
    return (Math.exp(x) + Math.exp(-x)) / 2;
}

// Function to calculate the hyperbolic tangent of a number
function tanh(x) {
    return sinh(x) / cosh(x);
}

// Function to calculate the hyperbolic cotangent of a number
function coth(x) {
    return cosh(x) / sinh(x);
}

// Function to calculate the hyperbolic secant of a number
function sech(x) {
    return 1 / cosh(x);
}

// Function to calculate the hyperbolic cosecant of a number
function csch(x) {
    return 1 / sinh(x);
}

// Function to calculate the arc sine of a number
function asin(x) {
    return Math.asin(x);
}

// Function to calculate the arc cosine of a number
function acos(x) {
    return Math.acos(x);
}

// Function to calculate the arc tangent of a number
function atan(x) {
    return Math.atan(x);
}

// Function to calculate the arc cotangent of a number
function acot(x) {
    return Math.atan(1 / x);
}

// Function to calculate the arc secant of a number
function asec(x) {
    return Math.acos(1 / x);
}

// Function to calculate the arc cosecant of a number
function acsc(x) {
    return Math.asin(1 / x);
}

// Function to calculate the natural logarithm of a number
function ln(x) {
    return Math.log(x);
}

// Function to calculate the base-10 logarithm of a number
function log10(x) {
    return Math.log10(x);
}

// Function to calculate the base-2 logarithm of a number
function log2(x) {
    return Math.log2(x);
}

// Function to calculate the exponential of a number
function exp(x) {
    return Math.exp(x);
}

// Function to calculate the cube root of a number
function cbrt(x) {
    return Math.cbrt(x);
}

// Function to calculate the nth root of a number
function nthRoot(x, n) {
    return Math.pow(x, 1 / n);
}

// Function to calculate the hypotenuse of a right triangle
function hypotenuse(a, b) {
    return Math.sqrt(a * a + b * b);
}

// Function to calculate the geometric mean of an array
function geometricMean(array) {
    return Math.pow(array.reduce((acc, val) => acc * val, 1), 1 / array.length);
}

// Function to calculate the harmonic mean of an array
function harmonicMean(array) {
    return array.length / array.reduce((acc, val) => acc + 1 / val, 0);
}

// Function to calculate the quadratic mean of an array
function quadraticMean(array) {
    return Math.sqrt(array.reduce((acc, val) => acc + val * val, 0) / array.length);
}

// Function to calculate the cubic mean of an array
function cubicMean(array) {
    return Math.cbrt(array.reduce((acc, val) => acc + val * val * val, 0) / array.length);
}

// Function to calculate the generalized mean of an array
function generalizedMean(array, p) {
    return Math.pow(array.reduce((acc, val) => acc + Math.pow(val, p), 0) / array.length, 1 / p);
}

// Function to calculate the weighted mean of an array
function weightedMean(array, weights) {
    return sum(array.map((value, index) => value * weights[index])) / sum(weights);
}

// Function to calculate the truncated mean of an array
function truncatedMean(array, percentage) {
    const sorted = array.slice().sort((a, b) => a - b);
    const removeCount = Math.floor(array.length * percentage / 100);
    return average(sorted.slice(removeCount, array.length - removeCount));
}

// Function to calculate the interquartile range of an array
function interquartileRange(array) {
    const sorted = array.slice().sort((a, b) => a - b);
    const q1 = sorted[Math.floor(sorted.length / 4)];
    const q3 = sorted[Math.floor(sorted.length * 3 / 4)];
    return q3 - q1;
}

// Function to calculate the mean absolute deviation of an array
function meanAbsoluteDeviation(array) {
    const avg = average(array);
    return average(array.map(value => Math.abs(value - avg)));
}

// Function to calculate the median absolute deviation of an array
function medianAbsoluteDeviation(array) {
    const med = median(array);
    return median(array.map(value => Math.abs(value - med)));
}

// Function to calculate the coefficient of variation of an array
function coefficientOfVariation(array) {
    return standardDeviation(array) / average(array);
}

// Function to calculate the skewness of an array
function skewness(array) {
    const avg = average(array);
    const stdDev = standardDeviation(array);
    return sum(array.map(value => Math.pow((value - avg) / stdDev, 3))) / array.length;
}

// Function to calculate the kurtosis of an array
function kurtosis(array) {
    const avg = average(array);
    const stdDev = standardDeviation(array);
    return sum(array.map(value => Math.pow((value - avg) / stdDev, 4))) / array.length - 3;
}
