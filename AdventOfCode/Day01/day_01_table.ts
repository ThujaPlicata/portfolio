import { DIST_TABLE} from "./table_distance";

const rows = DIST_TABLE.split('\n');

const listA = new Array();
const listB = new Array();

for(let i = 0; i < rows.length; i++) {

    const pair = rows[i].split(/\s+/);
    listA[i] = parseInt(pair[0], 10) ?? 0;
    listB[i] = parseInt(pair[1], 10) ?? 0;
};

listA.sort((x, y) => x - y);
listB.sort((x, y) => x - y);

let distance = 0;

for(let i = listA.length; i >= 1; i--) {
    const a = listA.pop() ?? 0;
    const b = listB.pop() ?? 0;

    distance += Math.abs (a - b);
};

console.log(`Total Distance = ${distance}`);
