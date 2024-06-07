import { merge } from './Merge'

describe('C1 and C3 sort Min(0) to Max | C2 sort Max to Min(0)', () => {

    test('Pick the Same Numbers', () => {
        const collection_1: number[] = [0,1,2,3,4,5]
        const collection_2: number[] = [5,4,3,2,1,0]
        const collection_3: number[] = [0,1,2,3,4,5]

        const result = merge(collection_1, collection_2, collection_3)
        expect(result).toEqual([0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5])
    })

    test('Ramdom Unique Numbers', () => {
        const collection_1: number[] = [1,4,7]
        const collection_2: number[] = [8,5,2]
        const collection_3: number[] = [3,6,9]

        const result = merge(collection_1, collection_2, collection_3)
        expect(result).toEqual([1,2,3,4,5,6,7,8,9])
    })

    test('Pick duplicates and Array Unequal', () => {
        const collection_1: number[] = [1,1]
        const collection_2: number[] = [2,2,2]
        const collection_3: number[] = [0,1,2,3]

        const result = merge(collection_1, collection_2, collection_3)
        expect(result).toEqual([0,1,1,1,2,2,2,2,3])
    })

    test('Random All', () => {
        const collection_1: number[] = [0,1,1,7]
        const collection_2: number[] = [20,2,1,0,0]
        const collection_3: number[] = [3,3]

        const result = merge(collection_1, collection_2, collection_3)
        expect(result).toEqual([0,0,0,1,1,1,2,3,3,7,20])
    })
})

