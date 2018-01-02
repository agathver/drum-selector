export function findItem(arr, i) {
    if (arr.length < 1) {
        return -1;
    } else if (arr[0].id) {
        return arr.map(x => x.id).indexOf(i);
    } else {
        return arr.indexOf(i);
    }
}