
const {element} = require("protractor")
describe('Testing Run Protractor Plugin',() =>{
    it('first it',() => {
        console.log("test1")
        element.all()
        element().e
    })

    it('second it',() => {
        console.log("test2")
    })
})
