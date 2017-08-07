const expect = require('chai').expect;
const Calculator = require('../calculator');

let calc = new Calculator();

describe('Can do Arithmetic', ()=> {
    describe('Can add two positive integers', () => {
        it('Can add two positive numbes', () =>{
            expect(calc.add(1,1)).to.equal(2);
        })
    })
})
// describe('Matching numbers', () => {
//     it('does 1 === 1', () => {
//         expect(1).to.equal(1);
//         expect(2).to.equal(1);
//     })
// })