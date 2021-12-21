export class Pencil {
    private _text = ''

    public constructor(private _props: PencilProps) {}

    public write(input: string) {
        input.split('').map(char => {
            if (this.pencilCanWrite()) {
                this.writeChar(char)
            } else {
                this.writeSpace()
            }
            this.updateDegradation()
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

    private updateDegradation() {
        this._props.degrade -= 1
    }

    private pencilCanWrite(): boolean {
        return this._props.degrade > 0
    }
}

export type PencilProps = {
    degrade: number
}