import { IDCode } from "../IDNUmber";

test("M", ()=>{
    expect(new IDCode("3800114785").gender()).toBe("M")
})

test("F", ()=>{
    expect(new IDCode("60602130235").gender()).toBe("F")
})