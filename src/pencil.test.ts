import {Pencil} from "./pencil";

describe('Pencil', () => {

    it('writes nothing when no text was given', () => {
        const pencil = new Pencil()
        pencil.write('')

        expect(pencil.text).toEqual('')
    })
})