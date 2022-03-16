import {Pencil} from "./pencil";

describe('Pencil', () => {
    let pencil: Pencil

    describe('Canary Test', () => {
        beforeEach(() => {
            pencil = new Pencil()
        })

        it('passes tests', () => {
            expect(true).toBeTruthy();
        })

        it('fails tests', () => {
            expect(false).toBeTruthy();
        })
    })
})