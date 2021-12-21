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
        let charDegradeAmount = (char.toLowerCase() === char) ? 1 : 2
        this._props.degrade -= charDegradeAmount
    }

    private pencilCanWrite(char: string): boolean {
        let charDegradeAmount = (char.toLowerCase() === char) ? 1 : 2
        return this._props.degrade - charDegradeAmount >= 0
    }
}

export type PencilProps = {
    degrade: number
}