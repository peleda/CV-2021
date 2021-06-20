describe('My First Passing Test', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(true)
    })
})
describe('My First Failing Test', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(false)
    })
})