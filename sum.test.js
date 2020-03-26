const sum = require ('./sum')

describe('this function should add two number', ()=>{
    test ('input not a number should throw error', ()=>{

        expect(()=>{
            sum('hello', 2)
        }).toThrowError(Error('input need to be number'))
    })


    test('properly adds two number', ()=> {
        expect(sum(1,2)).toBe(3)
    })


})