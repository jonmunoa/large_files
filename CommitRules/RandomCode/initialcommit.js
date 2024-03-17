// Function to generate a random number between min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random string of given length
function getRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(getRandomNumber(0, characters.length - 1));
    }
    return result;
}

// Function to generate a random boolean value
function getRandomBoolean() {
    return Math.random() >= 0.5;
}

// Function to generate a random date between two dates
function getRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// Function to generate a random object with specified properties
function getRandomObject() {
    return {
        id: getRandomNumber(1, 1000),
        name: getRandomString(10),
        isActive: getRandomBoolean(),
        createdDate: getRandomDate(new Date(2020, 0, 1), new Date())
    };
}

// Function to generate an array of random objects
function getRandomObjectArray(size) {
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(getRandomObject());
    }
    return array;
}

// Function to print an array of objects
function printObjectArray(array) {
    array.forEach(obj => {
        console.log(`ID: ${obj.id}, Name: ${obj.name}, Active: ${obj.isActive}, Created Date: ${obj.createdDate}`);
    });
}

// Generate and print 10 random objects
const randomObjects = getRandomObjectArray(10);
printObjectArray(randomObjects);

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to generate a random hex code
function getRandomHexCode() {
    return Math.floor(Math.random() * 16777215).toString(16);
}

// Function to generate a random IP address
function getRandomIPAddress() {
    return `${getRandomNumber(0, 255)}.${getRandomNumber(0, 255)}.${getRandomNumber(0, 255)}.${getRandomNumber(0, 255)}`;
}

// Function to generate a random MAC address
function getRandomMACAddress() {
    const hexDigits = "0123456789ABCDEF";
    let macAddress = "";
    for (let i = 0; i < 6; i++) {
        macAddress += hexDigits.charAt(Math.floor(Math.random() * 16));
        macAddress += hexDigits.charAt(Math.floor(Math.random() * 16));
        if (i != 5) macAddress += ":";
    }
    return macAddress;
}

// Function to generate a random URL
function getRandomURL() {
    const protocols = ['http', 'https'];
    const domains = ['com', 'org', 'net', 'io'];
    return `${protocols[getRandomNumber(0, protocols.length - 1)]}://www.${getRandomString(5)}.${domains[getRandomNumber(0, domains.length - 1)]}`;
}

// Generate and print random values
console.log(`Random Color: ${getRandomColor()}`);
console.log(`Random Hex Code: ${getRandomHexCode()}`);
console.log(`Random IP Address: ${getRandomIPAddress()}`);
console.log(`Random MAC Address: ${getRandomMACAddress()}`);
console.log(`Random URL: ${getRandomURL()}`);
