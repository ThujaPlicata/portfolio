import parse from '../../../../../../sophi/AppData/Roaming/npm/node_modules/html-dom-parser';


const doc = parse(data);

const rows = doc.querySelector('table')?.querySelectorAll(`td.${'line-content'}`);

if(rows === undefined || rows.length < 1) {

    const err = 'Invalid table';
    console.log(err);
    throw Promise.reject(new Error(err));
}

let listA = [-1];
let listB = [-1];

rows.forEach(row => {
    const arr = row.textContent?.trim().split(' ');
    
    if(arr === undefined || arr.length !== 2) {
        const err = 'List contain invalid number string.';
        console.log(err);
        throw Promise.reject(new Error(err));
    }
    
    const a = parseInt(arr[0], 10);
    const b = parseInt(arr[1], 10);

    listA.push(isNaN(a) ? -1 : a);
    listB.push(isNaN(b) ? -1 : b);
});

if(listA.length < 1 || listB.length < 1 || listA.length !== listB.length) {

    const err = 'List contains invalid array length.';
    console.log(err);
    throw Promise.reject(new Error(err));
}

listA.sort((x, y) => x - y);
listB.sort((x, y) => x - y);

let distance = 0;

listA.forEach(c => {
    const d = listB.pop() ?? -1;
    if (c < 0 || d < 0) {
        const err = 'List contain invalid number string.';
        console.log(err);
        throw Promise.reject(new Error(err));
    }
    distance += Math.abs (c - d);
});

console.log(`Total Distance = ${distance}`);




