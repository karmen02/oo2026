import { isPositive } from "../PositiveNo";

test('Positivity', ()=>{
    expect(isPositive(-2)).toBe(false)
    expect(isPositive(2)).toBe(true)

})