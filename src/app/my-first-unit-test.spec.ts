describe('my first test', () => {
    let obj: any;

    beforeEach(() => {
        obj = {};
    });

    it('should be true if true', () => {
        obj.a = false;

        obj.a = true;

        expect(obj.a).toBe(true);
    });

    it('should be true if true 2', () => {
        obj.a = false;

        obj.a = true;

        expect(obj.a).toBe(true);
    });
});
