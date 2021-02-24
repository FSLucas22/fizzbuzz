export function printList(list, indexStart) {
    for (let index = 0; index < list.length; index++) {
        console.log(`${indexStart + index}. ${list[index]}`);
    }
}