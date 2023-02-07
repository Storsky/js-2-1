function simpleNumbers(n) {
    listOfNmbrs = [2,]
    i = 2

    do{
        let aliquot = false // переменная для проверки
        for(let value = 0; value < listOfNmbrs.length; value++){ //цикл по массиву простых чисел
            if (i % listOfNmbrs[value] == 0){ // проверка кратности на каждый элемент массива
            aliquot = true
            break // выход из цикла, в случае, если хоть один элемент кратен
            }

        }
        if (aliquot){
            i++
            continue
    } else {

        listOfNmbrs.push(i)
        i++
        }
    } while(listOfNmbrs.length < n)
    return listOfNmbrs
}


console.log(simpleNumbers(process.argv[2]))