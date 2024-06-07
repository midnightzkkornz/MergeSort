export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    let result: number[] = []

    sumCollection(result, collection_1)
    sumCollection(result, collection_2)
    sumCollection(result, collection_3)
    
    return mergeSort(result)
}

function mergeSort(result: number[]): number[] {

    // Check value
    if(result.length <= 1) {
        return result
    }

    const middle: number = Math.floor(result.length/2)
    const left: number[] = (result.slice(0, middle))
    const right: number[] = (result.slice(middle))
    
    return mergesResult(mergeSort(left), mergeSort(right))
}

function mergesResult(left: number[], right: number[]): number[] {
    let resultIndex: number[] = []
    let leftCount = 0
    let rightCount = 0
    
    while(leftCount < left.length && rightCount < right.length) {
        if(left[leftCount] < right[rightCount]) {
            resultIndex.push(left[leftCount])
            leftCount++
        }else{
            resultIndex.push(right[rightCount])
            rightCount++
        }
    }

    return resultIndex.concat((left.slice(leftCount)).concat(right.slice(rightCount)))

}

function sumCollection(result: number[], collection_loop: number[]): number[] {
    for(var i in collection_loop) {
        result.push(collection_loop[i])
    }
    return result
}
