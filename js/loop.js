// const arr = ['John', 'Jane', 'James', ' Joe', 'June']

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// for (let index in arr) {
//     console.log(arr[index])
// }

// arr.forEach((item, index)) => {console.log(item,index)}

// arr.map((item, index)) => { console.log(item,index)}

for (let i = 1; i <=20 ; i +=1) {
    // console.log(i)
}

let temp = ['Apple','Banana','Kiwi']
    // temp.forEach((element, idx) => {
    //     console.log(idx,element)
    // })

let newValue = temp.map((element, idx) =>{
    return `${idx+1}.${element}`
})

let filterMoreThanZero = [-1,2,3,56,6,-93,0,4].filter(el => el >=0)
console.log(filterMoreThanZero)

console.log(newValue)