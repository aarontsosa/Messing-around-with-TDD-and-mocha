const expect = require('chai').expect;
const Calculator = require('../calculator');

let calc = new Calculator();

describe('Can do Arithmetic', ()=> {
    describe('Can add two positive integers', () => {
        it('Can add two positive numbes', () =>{
            expect(calc.add(1,1)).to.equal(2);
        })
        it('Can add to zero', () => {
            expect(calc.add(1, 0)).to.equal(1)
        })
        it('can add negative numbers', () => {
            expect(calc.add(-2, -5)).to.equal(-7)
        })
    })
    describe('Can Subtract two numbers', () => {
        it('Can add two positive numbers', () =>{
            expect(calc.sub(1,1)).to.equal(0)
        })
        it('Can subtract from zero', () =>{
            expect(calc.sub(0, 3)).to.equal(-3)
        })
        it('Can subtrat two negative numbers', () => {
            expect(calc.sub(-4, -5)).to.equal(1)
        })
    })
    describe('Can divide two numbers', () => {
        it('can divide two positive numbers', () => {
            expect(calc.divide(1, 1)).to.equal(1)
        })
        it('can divide 0 into itself', () =>{
            expect(calc.divide(1, 0)).to.equal(Infinity)
        })
        it('can divide two negative numbers', () =>{
            expect(calc.divide(-4, -2)).to.equal(2)
        })
    })
    describe('Can mutliply two numbers', () =>{
        it('can multi two positive numbers', () =>{
            expect(calc.multiply(2, 2)).to.equal(4)
        })
    })
    describe('can add numbers asynchronously', () =>{
        it('can add two integers asynchronusly', (done) => {
            calc.addAsync(3, 2, (val) => {
                if (val === 5){
                    done();
                } else {
                    done(new Error('nope That is not right'))
                }
            })
            // expect(calc.addAsync(1, 1, (val) =>{

            // }).to.equal(5))
        })
    })
})
// describe('Matching numbers', () => {
//     it('does 1 === 1', () => {
//         expect(1).to.equal(1);
//         expect(2).to.equal(1);
//     })
// })