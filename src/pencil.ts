export type PencilProps = {
    degrade: number
    sharpen: number
}

export class Pencil {
    private _text = ''
    private readonly _origDegrade

    public constructor(private _props: PencilProps) {
        this._origDegrade = _props.degrade
    }

    public write(input: string) {
        input.split('').map(char => {
            if (this.pencilCanWrite(char)) {
                this.writeChar(char)
            } else {
                this.writeSpace()
            }
            this.updateDegradation(char)
        })
    }

    public get text() {
        return this._text
    }

    public sharpen() {
        if (this._props.sharpen > 0) {
            this.restoreDegradation()
            this._props.sharpen -= 1
        }
    }

    public erase(input: string) {
        let stringOfSpaces = (n: number) => ' '.repeat(n)
        let reverse = (str: string) => str.split('').reverse().join('')

        let textReversed = reverse(this._text)
        let inputReversed = reverse(input)
        let updatedTextReversed = textReversed.replace(inputReversed, stringOfSpaces(inputReversed.length))

        this._text = reverse(updatedTextReversed)
    }

    private writeChar(char: string) {
        this._text += char
    }

    private writeSpace() {
        this._text += ' '
    }

    private updateDegradation(char: string) {
        this._props.degrade -= Pencil.charDegrade(char)
    }

    private restoreDegradation() {
        this._props.degrade = this._origDegrade
    }

    private pencilCanWrite(char: string): boolean {
        return this._props.degrade - Pencil.charDegrade(char) >= 0
    }

    private static charDegrade(char: string): number {
        if (char === ' ' || char === '\n') {
            return 0
        } else {
            return (char.toLowerCase() === char) ? 1 : 2
        }
    }
}

