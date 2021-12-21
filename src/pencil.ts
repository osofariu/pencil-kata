export class Pencil {
    private _text = ''

    public write(input: string) {
        this._text += input
    }

    public get text() {
        return this._text
    }
}