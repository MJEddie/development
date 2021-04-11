const lowerBtn = document.getElementById('lowercase');
const upperBtn = document.getElementById('uppercase');
const lastChar = document.getElementById('lastchar');
const lastThreeChar = document.getElementById('lastthreechar');
const triangle1 = document.getElementById('triangle1');
const triangle2 = document.getElementById('triangle2');
const diamond = document.getElementById('diamond');
const q = document.getElementById('q');
let str;
let wordLength;

function getStr() {
    str = q.value.trim();
    wordLength = str.length;
}

function wordLowerCase(word) {
    return word.toLowerCase();
}

function wordUpperCase(word) {
    return word.toUpperCase();
}

function getLastChar(word) {
    return word.slice(-1);
}

function getLastThreeChar(word) {
    return word.slice(-3);
}

function triangle1() {
    for (i = 1, i < 6, i++) {
        for (j = 1, j <= i, j++) {
            document.write('*');
        }
        document.write('<br>');
    }
}

lowerBtn.addEventListener('click', () => {
    getStr();
    const strTransform = wordLowerCase(str);
    document.getElementById('output-content').innerHTML = `
    <h4>輸入的字串長度為 ${wordLength}<br>
    轉換後: ${strTransform}</h4>
    `
});

upperBtn.addEventListener('click', () => {
    getStr();
    const strTransform = wordUpperCase(str);
    document.getElementById('output-content').innerHTML = `
    <h4>輸入的字串長度為 ${wordLength}<br>
    轉換後: ${strTransform}</h4>
    `
});

lastChar.addEventListener('click', () => {
    getStr();
    const strTransform = getLastChar(str);
    document.getElementById('output-content').innerHTML = `
    <h4>輸入的字串長度為 ${wordLength}<br>
    轉換後: ${strTransform}</h4>
    `
});

lastThreeChar.addEventListener('click', () => {
    getStr();
    const strTransform = getLastThreeChar(str);
    document.getElementById('output-content').innerHTML = `
    <h4>輸入的字串長度為 ${wordLength}<br>
    轉換後: ${strTransform}</h4>
    `
});

triangle1.addEventListener('click', () => {
    const output = triangle1();
    document.getElementById('output-content').innerHTML = `
    <h4>${output}</h4>
    `
});