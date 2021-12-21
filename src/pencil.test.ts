import {Pencil} from "./pencil";

describe('Pencil', () => {
    let pencil: Pencil

    describe('writes text', () => {

        beforeEach(() => {
            pencil = new Pencil({degrade: 15})
        })

        it('writes nothing when no text was given', () => {
            pencil.write('')

            expect(pencil.text).toEqual('')
        })

        it('writes text when given', () => {
            pencil.write('hello')

            expect(pencil.text).toEqual('hello')

        })

        it('writes text multiple times', () => {
            pencil.write('Hello')
            pencil.write(' there')

            expect(pencil.text).toEqual('Hello there')
        })
    })

    describe('Point degradation', () => {
        beforeEach(() => {
            pencil = new Pencil({degrade: 5})
        })

        it('degrades by one point for lowercase letters and stops writing', () => {
            pencil.write('profit')

            expect(pencil.text).toEqual('profi ')
        })

        it('degrades by two points for UPPERCASE letters', () => {
            pencil.write('Profit')

            expect(pencil.text).toEqual('Prof  ')
        })
    })
})