const arr1 = [1, 2, 3, 4, 5]
const arr2 = [6, 7, 8, 9, 0]
const arr3 = [1, 2, 3, 4, 5]
const arr4 = [6, 7, 8, 9, 0]

for (let i = 0; i < arr1.length; i++) {
    let element = arr1[i];
    let index = i;
    console.log(element)
    for (let i = 0; i < arr2.length; i++) {
        let element = arr2[i];
        console.log(arr1[index])
        for (let i = 0; i < arr3.length; i++) {
            let element = arr3[i];
            console.log(element)
            for (let i = 0; i < arr4.length; i++) {
                let element = arr4[i];
                console.log(element)
            }
        }
    }
}