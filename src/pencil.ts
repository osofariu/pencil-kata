export class Pencil {
    private _text = ''

    public constructor(private _props: PencilProps) {}

    public write(input: string) {
        input.split('').map(char => {
            if (this._props.degrade > 0) {
                this._text += char
            } else {
                this._text += ' '
            }
            this._props.degrade -= 1
        })
    }

    public get text() {
        return this._text
    }
}

export type PencilProps = {
    degrade: number
}