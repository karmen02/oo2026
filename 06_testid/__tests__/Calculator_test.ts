import { Calculator } from "../Calculator";

let calcobj:Calculator;

//runs b4 every test
//one test might change the calculator, if we dont have this next test would start with mofidified data
beforeEach(()=>{
    calcobj=new Calculator();
})

test('empty init', ()=> {
    expect(calcobj.getPanelContent()).toBe("")
})

test('simple input', ()=> {
    calcobj.pressButton('7');
    expect(calcobj.getPanelContent()).toBe("7")
})

test('Multiple', ()=> {
    calcobj.pressButton('7');
    calcobj.pressButton('8');

    expect(calcobj.getPanelContent()).toBe("78")
})

test('Clear panel', ()=> {
    calcobj.pressButton('7');
    calcobj.pressButton('8');
    calcobj.pressButton('C');

    expect(calcobj.getPanelContent()).toBe("")
})


