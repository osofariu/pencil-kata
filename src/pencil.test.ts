import {Pencil} from "./pencil";

describe('Pencil', () => {
    let pencil: Pencil

    describe('writes text', () => {
        beforeEach(() => {
            pencil = new Pencil({degrade: 15, sharpen: 0, erase: 0})
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
            pencil = new Pencil({degrade: 5, sharpen: 0, erase: 0})
        })

        it('degrades by one point for lowercase letters and stops writing', () => {
            pencil.write('profit')

            expect(pencil.text).toEqual('profi ')
        })

        it('degrades by two points for UPPERCASE letters', () => {
            pencil.write('Profit')

            expect(pencil.text).toEqual('Prof  ')
        })

        it('does not degrade pencil when writing spaces', () => {
            pencil.write('a plan')

            expect(pencil.text).toEqual('a plan')
        })

        it('does not degrade pencil when writing newline characters', () => {
            pencil.write('a\nplan')

            expect(pencil.text).toEqual('a\nplan')
        })
    })

    describe('Sharpen', () => {
        beforeEach(() => {
            pencil = new Pencil({degrade: 5, sharpen: 1, erase: 0})
        })

        it('able to write new text after sharpening', () => {
            pencil.write('table')
            pencil.sharpen()
            pencil.write(' wines')

            expect(pencil.text).toEqual('table wines')
        })

        it('cannot sharpen after the pencil gets too short', () => {
            pencil.write('table')
            pencil.sharpen()
            pencil.write(' wine')
            pencil.sharpen()
            pencil.write(' ok')

            expect(pencil.text).toEqual('table wine o ')
        })
    })

    describe('Erase', () => {
        beforeEach(() => {
            pencil = new Pencil({degrade: 25, sharpen: 0, erase: 5})
        })

        it('erases text previously written', () => {
            pencil.write('This apple is mine')
            pencil.erase('apple')

            expect(pencil.text).toEqual('This       is mine')
        })

        it('erases last instance of text previously written', () => {
            pencil.write('This apple is my apple')
            pencil.erase('apple')

            expect(pencil.text).toEqual('This apple is my      ')
        })

        describe('until eraser runs out', () => {
            beforeEach(() => {
                pencil = new Pencil({degrade: 25, sharpen: 0, erase: 5})
            })

            it('stops erasing after eraser runs out', () => {
                pencil.write('This accordion is mine')
                pencil.erase('accordion')

                expect(pencil.text).toEqual('This acco      is mine')
            })

            it('keeps track of eraser wear', () => {
                pencil.write("oh oh oh")
                pencil.erase("oh")
                pencil.erase("oh")
                pencil.erase("oh")

                expect(pencil.text).toEqual("o       ")
            })
        })
    })
})