import {Example} from './example';

describe('', () => {
    let example: Example;

    beforeEach(() => {
        example = new Example();
    });

    it('passes', () => {
        let actual: boolean = example.truthy();

        expect(actual).toBeTruthy();
    });

    it('fails', () => {
        let actual: boolean = example.truthy();

        expect(actual).toBeFalsy();
    });
});
