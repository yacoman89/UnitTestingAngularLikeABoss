import { StrengthPipe } from "./strength.pipe";

describe('StrengthPipe', () => {
    let pipe: StrengthPipe;

    beforeEach(() => {
        pipe = new StrengthPipe();
    });

    it('should display weak if strength is 5', () => {
        const value = 5;
        expect(pipe.transform(value)).toBe(`${value} (weak)`);
    });

    it('should display weak if strength is 9.9', () => {
        const value = 9.9;
        expect(pipe.transform(value)).toBe(`${value} (weak)`);
    });

    it('should display strong if strength is 10', () => {
        const value = 10;
        expect(pipe.transform(value)).toBe(`${value} (strong)`);
    });
});
