import { Calculator } from "../homework"; 

let calcobj: Calculator;

// before every test a new calculator is created
beforeEach(() => {
    calcobj = new Calculator();
})

test('empty init', () => {
    expect(calcobj.getPanelContent()).toBe("")
})

test('simple input', () => {
    calcobj.pressButton('7');
    expect(calcobj.getPanelContent()).toBe("7")
})

test('Multiple inputs', () => {
    calcobj.pressButton('7');
    calcobj.pressButton('8');
    expect(calcobj.getPanelContent()).toBe("78")
})

test('Clear panel', () => {
    calcobj.pressButton('7');
    calcobj.pressButton('8');
    calcobj.pressButton('C');
    expect(calcobj.getPanelContent()).toBe("")
})

test('Addition and Equals', () => {
    calcobj.pressButton('5');
    calcobj.pressButton('+');
    calcobj.pressButton('5');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContent()).toBe("10")
})

test('Square Root (√)', () => {
    calcobj.pressButton('9');
    calcobj.pressButton('√');
    expect(calcobj.getPanelContent()).toBe("3")
})

test('Squared (x²)', () => {
    calcobj.pressButton('4');
    calcobj.pressButton('x²');
    expect(calcobj.getPanelContent()).toBe("16")
})

test('Pi (π)', () => {
    calcobj.pressButton('π');
    expect(calcobj.getPanelContent()).toBe(Math.PI.toString())
})

// sin(0) is 0
test('Sine (sin)', () => {
    calcobj.pressButton('0');
    calcobj.pressButton('sin');
    expect(calcobj.getPanelContent()).toBe("0")
})
 // cos(0) is 1
test('Cosine (cos)', () => {
    calcobj.pressButton('0');
    calcobj.pressButton('cos');
    expect(calcobj.getPanelContent()).toBe("1")
})