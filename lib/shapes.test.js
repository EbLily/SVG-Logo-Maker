// Import the shapes
const { Circle, Square, Triangle } = require('./shapes'); // Adjust the path as necessary

describe('Shape Classes', () => {
    describe('Circle', () => {
        let circle;

        beforeEach(() => {
            circle = new Circle();
        });

        it('should have default color empty string', () => {
            expect(circle.render()).toContain('fill=""');
        });

        it('should change color when set', () => {
            circle.setColor('green');
            expect(circle.render()).toContain('fill="green"');
        });

        it('should have default text empty string', () => {
            expect(circle.render()).not.toContain('SVG'); // Assuming no default text
        });

        it('should have default textColor empty string', () => {
            expect(circle.render()).not.toContain('green'); // Assuming no default textColor
        });

        it('should change text when set', () => {
            circle.setText('SVG');
            expect(circle.render()).toContain('SVG');
        });

        it('should change textColor when set', () => {
            circle.setTextColor('white');
            expect(circle.render()).toContain('fill="white"');
        });
    });

    describe('Square', () => {
        let square;

        beforeEach(() => {
            square = new Square();
        });

        it('should have default color empty string', () => {
            expect(square.render()).toContain('fill=""');
        });

        it('should change color when set', () => {
            square.setColor('green');
            expect(square.render()).toContain('fill="green"');
        });

        it('should have default text empty string', () => {
            expect(square.render()).not.toContain('SVG'); // Assuming no default text
        });

        it('should have default textColor empty string', () => {
            expect(square.render()).not.toContain('green'); // Assuming no default textColor
        });

        it('should change text when set', () => {
            square.setText('SVG');
            expect(square.render()).toContain('SVG');
        });

        it('should change textColor when set', () => {
            square.setTextColor('white');
            expect(square.render()).toContain('fill="white"');
        });
    });

    describe('Triangle', () => {
        let triangle;

        beforeEach(() => {
            triangle = new Triangle();
        });

        it('should have default color empty string', () => {
            expect(triangle.render()).toContain('fill=""');
        });

        it('should change color when set', () => {
            triangle.setColor('green');
            expect(triangle.render()).toContain('fill="green"');
        });

        it('should have default text empty string', () => {
            expect(triangle.render()).not.toContain('SVG'); // Assuming no default text
        });

        it('should have default textColor empty string', () => {
            expect(triangle.render()).not.toContain('white'); // Assuming no default textColor
        });

        it('should change text when set', () => {
            triangle.setText('SVG');
            expect(triangle.render()).toContain('SVG');
        });

        it('should change textColor when set', () => {
            triangle.setTextColor('green');
            expect(triangle.render()).toContain('fill="green"');
        });
    });
});

