export class Pencil {
    private _text = ''

    public constructor(private _props: PencilProps) {}

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

    private writeChar(char: string) {
        this._text += char
    }

    private writeSpace() {
        this._text += ' '
    }

    private updateDegradation(char: string) {
        this._props.degrade -= Pencil.charDegrade(char)
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

export type PencilProps = {
    degrade: number
}