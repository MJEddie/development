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
    let n = 5;
    let output = '';
    for (i = 0; i < n; i++) {
        let content = '';
        for (j = 0; j <= i; j++) {
            content += '*';
        }
        output += content + '<br>';
    }
    document.getElementById('output-content').innerHTML = `<h4>${output}</h4>`
});

triangle2.addEventListener('click', () => {
    let n = 5;
    let output = [];
    for (i = 0; i < n; i++) {
        let content = '';
        for (j = 0; j <= i; j++) {
            content += '*';
        }
        output.push(content);
    }
    for (i = n - 1; i > 0; i--) {
        let content = '';
        for (j = 0; j < i; j++) {
            content += '*';
        }
        output.push(content);
    }
    document.getElementById('output-content').innerHTML = `<h4>${output.join('<br>')}</h4>`
});

diamond.addEventListener('click', () => {
    let n = 5;
    let output = '';
    for (i = 0; i < n; i++) {
        let content = '';
        for (j = n - 1; j > i; j--) {
            content += '&ensp;';
        }
        for (k = 1; k <= 2 * i + 1; k++) {
            content += '*';
        }
        output += content + '<br>';
    }
    for (i = n - 1; i > 0; i--) {
        let content = '';
        for (j = n - 1; j >= i; j--) {
            content += '&ensp;';
        }
        for (k = 1; k <= 2 * i - 1; k++) {
            content += '*';
        }
        output += content + '<br>';
    }
    console.log(output)
    document.getElementById('output-content').innerHTML = `<h4>${output}</h4>`
})