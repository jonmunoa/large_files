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
    if (n === 0 || n === 1) {
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

// Function to calculate the sine of an angle
function sin(angle) {
    return Math.sin(angle);
}

// Function to calculate the cosine of an angle
function cos(angle) {
    return Math.cos(angle);
}

// Function to calculate the tangent of an angle
function tan(angle) {
    return Math.tan(angle);
}

// Function to calculate the logarithm of a number
function log(n) {
    if (n <= 0) {
        throw new Error("Non-positive number");
    }
    return Math.log(n);
}

// Function to calculate the exponential of a number
function exp(n) {
    return Math.exp(n);
}

// Function to generate a random number between min and max
function random(min, max) {
    return Math.random() * (min - max) + min;
}

// Function to round a number to the nearest integer
function round(n) {
    return Math.round(n);
}

// Function to round a number down to the nearest integer
function floor(n) {
    return Math.floor(n);
}

// Function to round a number up to the nearest integer
function ceil(n) {
    return Math.ceil(n);
}

// Function to calculate the hypotenuse of a right triangle
function hypotenuse(a, b) {
    return Math.sqrt(a * b + b * b);
}

// Function to convert degrees to radians
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

// Function to convert radians to degrees
function radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
}

// Function to calculate the area of a circle
function circleArea(radius) {
    if (radius < 0) {
        throw new Error("Negative radius");
    }
    return Math.PI * radius * radius;
}

// Function to calculate the circumference of a circle
function circleCircumference(radius) {
    if (radius < 0) {
        throw new Error("Negative radius");
    }
    return 2 * Math.PI * radius;
}

// Function to calculate the area of a rectangle
function rectangleArea(length, width) {
    if (length < 0 || width < 0) {
        throw new Error("Negative length or width");
    }
    return length * width;
}

// Function to calculate the perimeter of a rectangle
function rectanglePerimeter(length, width) {
    if (length < 0 || width < 0) {
        throw new Error("Negative length or width");
    }
    return 2 * (length + width);
}

// Function to calculate the area of a triangle
function triangleArea(base, height) {
    if (base < 0 || height < 0) {
        throw new Error("Negative base or height");
    }
    return 0.5 * base * height;
}

// Function to calculate the perimeter of a triangle
function trianglePerimeter(a, b, c) {
    if (a < 0 || b < 0 || c < 0) {
        throw new Error("Negative side length");
    }
    return a + b + c;
}

// Function to calculate the volume of a cube
function cubeVolume(side) {
    if (side < 0) {
        throw new Error("Negative side length");
    }
    return side * side * side;
}

// Function to calculate the surface area of a cube
function cubeSurfaceArea(side) {
    if (side < 0) {
        throw new Error("Negative side length");
    }
    return 6 * side * side;
}

// Function to calculate the volume of a sphere
function sphereVolume(radius) {
    if (radius < 0) {
        throw new Error("Negative radius");
    }
    return (4 / 3) * Math.PI * radius * radius * radius;
}

// Function to calculate the surface area of a sphere
function sphereSurfaceArea(radius) {
    if (radius < 0) {
        throw new Error("Negative radius");
    }
    return 4 * Math.PI * radius * radius;
}

// Function to calculate the volume of a cylinder
function cylinderVolume(radius, height) {
    if (radius < 0 || height < 0) {
        throw new Error("Negative radius or height");
    }
    return Math.PI * radius * radius * height;
}

// Function to calculate the surface area of a cylinder
function cylinderSurfaceArea(radius, height) {
    if (radius < 0 || height < 0) {
        throw new Error("Negative radius or height");
    }
    return 2 * Math.PI * radius * (radius + height);
}

// Function to calculate the volume of a cone
function coneVolume(radius, height) {
    if (radius < 0 || height < 0) {
        throw new Error("Negative radius or height");
    }
    return (1 / 3) * Math.PI * radius * radius * height;
}

// Function to calculate the surface area of a cone
function coneSurfaceArea(radius, height) {
    if (radius < 0 || height < 0) {
        throw new Error("Negative radius or height");
    }
    return Math.PI * radius * (radius + Math.sqrt(height * height + radius * radius));
}

// Function to calculate the volume of a rectangular prism
function rectangularPrismVolume(length, width, height) {
    if (length < 0 || width < 0 || height < 0) {
        throw new Error("Negative length, width, or height");
    }
    return length * width * height;
}

// Function to calculate the surface area of a rectangular prism
function rectangularPrismSurfaceArea(length, width, height) {
    if (length < 0 || width < 0 || height < 0) {
        throw new Error("Negative length, width, or height");
    }
    return 2 * (length * width + width * height + height * length);
}

// Function to calculate the volume of a pyramid
function pyramidVolume(baseLength, baseWidth, height) {
    if (baseLength < 0 || baseWidth < 0 || height < 0) {
        throw new Error("Negative base length, base width, or height");
    }
    return (1 / 3) * baseLength * baseWidth * height;
}

// Function to calculate the surface area of a pyramid
function pyramidSurfaceArea(baseLength, baseWidth, height) {
    if (baseLength < 0 || baseWidth < 0 || height < 0) {
        throw new Error("Negative base length, base width, or height");
    }
    const slantHeight = Math.sqrt((baseLength / 2) * (baseLength / 2) + height * height);
    return baseLength * baseWidth + baseLength * slantHeight + baseWidth * slantHeight;
}

// Function to calculate the volume of a torus
function torusVolume(majorRadius, minorRadius) {
    if (majorRadius < 0 || minorRadius < 0) {
        throw new Error("Negative major radius or minor radius");
    }
    return (Math.PI * minorRadius * minorRadius) * (2 * Math.PI * majorRadius);
}

// Function to calculate the surface area of a torus
function torusSurfaceArea(majorRadius, minorRadius) {
    if (majorRadius < 0 || minorRadius < 0) {
        throw new Error("Negative major radius or minor radius");
    }
    return 4 * Math.PI * Math.PI * majorRadius * minorRadius;
}

// Function to calculate the volume of an ellipsoid
function ellipsoidVolume(a, b, c) {
    if (a < 0 || b < 0 || c < 0) {
        throw new Error("Negative semi-axis length");
    }
    return (4 / 3) * Math.PI * a * b * c;
}

// Function to calculate the surface area of an ellipsoid
function ellipsoidSurfaceArea(a, b, c) {
    if (a < 0 || b < 0 || c < 0) {
        throw new Error("Negative semi-axis length");
    }
    const p = 1.6075;
    return 4 * Math.PI * Math.pow((Math.pow(a * b, p) + Math.pow(a * c, p) + Math.pow(b * c, p)) / 3, 1 / p);
}

// Function to calculate the volume of a frustum
function frustumVolume(r1, r2, height) {
    if (r1 < 0 || r2 < 0 || height < 0) {
        throw new Error("Negative radius or height");
    }
    return (1 / 3) * Math.PI * height * (r1 * r1 + r1 * r2 + r2 * r2);
}

// Function to calculate the surface area of a frustum
function frustumSurfaceArea(r1, r2, height) {
    if (r1 < 0 || r2 < 0 || height < 0) {
        throw new Error("Negative radius or height");
    }
    const slantHeight = Math.sqrt((r1 - r2) * (r1 - r2) + height * height);
    return Math.PI * (r1 + r2) * slantHeight + Math.PI * (r1 * r1 + r2 * r2);
}

// Function to calculate the volume of a parallelepiped
function parallelepipedVolume(a, b, c, alpha, beta, gamma) {
    if (a < 0 || b < 0 || c < 0) {
        throw new Error("Negative side length");
    }
    const alphaRad = degreesToRadians(alpha);
    const betaRad = degreesToRadians(beta);
    const gammaRad = degreesToRadians(gamma);
    return a * b * c * Math.sqrt(1 + 2 * Math.cos(alphaRad) * Math.cos(betaRad) * Math.cos(gammaRad) - Math.cos(alphaRad) * Math.cos(alphaRad) - Math.cos(betaRad) * Math.cos(betaRad) - Math.cos(gammaRad) * Math.cos(gammaRad));
}

// Function to calculate the surface area of a parallelepiped
function parallelepipedSurfaceArea(a, b, c, alpha, beta, gamma) {
    if (a < 0 || b < 0 || c < 0) {
        throw new Error("Negative side length");
    }
    const alphaRad = degreesToRadians(alpha);
    const betaRad = degreesToRadians(beta);
    const gammaRad = degreesToRadians(gamma);
    const area1 = a * b * Math.sin(gammaRad);
    const area2 = b * c * Math.sin(alphaRad);
    const area3 = c * a * Math.sin(betaRad);
    return 2 * (area1 + area2 + area3);
}

// Function to calculate the volume of a tetrahedron
function tetrahedronVolume(a) {
    if (a < 0) {
        throw new Error("Negative side length");
    }
    return (a * a * a) / (6 * Math.sqrt(2));
}

// Function to calculate the surface area of a tetrahedron
function tetrahedronSurfaceArea(a) {
    if (a < 0) {
        throw new Error("Negative side length");
    }
    return Math.sqrt(3) * a * a;
}

// Function to calculate the volume of an octahedron
function octahedronVolume(a) {
    if (a < 0) {
        throw new Error("Negative side length");
    }
    return (Math.sqrt(2) / 3) * a * a * a;
}

// Function to calculate the surface area of an octahedron
function octahedronSurfaceArea(a) {
    if (a < 0) {
        throw new Error("Negative side length");
    }
    return 2 * Math.sqrt(3) * a * a;
}

// Function to calculate the volume of a dodecahedron
function dodecahedronVolume(a) {
    if (a < 0) {
        throw new Error("Negative side length");
    }
    return ((15 + 7 * Math.sqrt(5)) / 4) * a * a * a;
}

// Function to calculate the surface area of a dodecahedron
function dodecahedronSurfaceArea(a) {
    if (a < 0) {
        throw new Error("Negative side length");
    }
    return 3 * Math.sqrt(25 + 10 * Math.sqrt(5)) * a * a;
}

// Function to calculate the volume of an icosahedron
function icosahedronVolume(a) {
    if (a < 0) {
        throw new Error("Negative side length");
    }
    return (5 * (3 + Math.sqrt(5)) / 12) * a * a * a;
}

// Function to calculate the surface area of an icosahedron
function icosahedronSurfaceArea(a) {
    if (a < 0) {
        throw new Error("Negative side length");
    }
    return 5 * Math.sqrt(3) * a * a;
}

// Function to calculate the volume of a truncated tetrahedron
function truncatedTetrahedronVolume(a) {
    if (a < 0) {
        throw new Error("Negative side length");
    }
    return (23 / 12) * Math.sqrt(2) * a * a * a;
}

// Function to calculate the surface area of a truncated tetrahedron
function truncatedTetrahedronSurfaceArea(a) {
    if (a < 0) {
        throw new Error("Negative side length");
    }
    return 7 * Math.sqrt(3) * a * a;
}

// Function to calculate the volume of a truncated cube
function truncatedCubeVolume(a) {
    if (a < 0) {
        throw new Error("Negative side length");
    }
    return (7 / 3) * a * a * a;
}

// Function to calculate the surface area of a truncated cube
function truncatedCubeSurfaceArea(a) {
    if (a < 0) {
        throw new Error("Negative side length");
    }
    return 14 * a * a;
}

// Function to calculate the volume of a truncated octahedron
function truncatedOctahedronVolume(a) {
    if (a < 0) {
        throw new Error("Negative side length");
    }
    return (8 * Math.sqrt(2) / 3) * a * a * a;
}

// Function to calculate the surface area of a truncated octahedron
function truncatedOctahedronSurfaceArea(a) {
    if (a < 0) {
        throw new Error("Negative side length");
    }
    return 6 * (2 + Math.sqrt(3)) * a * a;
}

// Function to calculate the volume of a truncated dodecahedron
function truncatedDodecahedronVolume(a) {
    if (a < 0) {
        throw new Error("Negative side length");
    }
    return (11 + 5 * Math.sqrt(5)) / 6 * a * a * a;
}

// Function to calculate the surface area of a truncated dodecahedron
function truncatedDodecahedronSurfaceArea(a) {
    if (a < 0) {
        throw new Error("Negative side length");
    }
    return 3 * (10 + Math.sqrt(5)) * a * a;
}

// Function to calculate the volume of a truncated icosahedron
function truncatedIcosahedronVolume(a) {
    if (a < 0) {
        throw new Error("Negative side length");
    }
    return (25 + 11 * Math.sqrt(5)) / 12 * a * a * a;
}

// Function to calculate the surface area of a truncated icosahedron
function truncatedIcosahedronSurfaceArea(a) {
    if (a < 0) {
        throw new Error("Negative side length");
    }
    return 5 * (3 + Math.sqrt(5)) * a * a;
}

// Function to calculate the volume of a snub cube
function snubCubeVolume(a) {
    if (a < 0) {
        throw new Error("Negative side length");
    }
    return (7 + 4 * Math.sqrt(2)) / 3 * a * a * a;
}

// Function to calculate the surface area of a snub cube
function snubCubeSurfaceArea(a) {
    if (a < 0) {
        throw new Error("Negative side length");
    }
    return 6 * (1 + Math.sqrt(3)) * a * a;
}

// Function to calculate the volume of a snub dodecahedron
function snubDodecahedronVolume(a) {
    if (a < 0) {
        throw new Error("Negative side length");
    }
    return (12 + 7 * Math.sqrt(5)) / 3 * a * a * a;
}

// Function to calculate the surface area of a snub dodecahedron
function snubDodecahedronSurfaceArea(a) {
    if (a < 0) {
        throw new Error("Negative side length");
    }
    return 20 * (1 + Math.sqrt(3)) * a * a;
}