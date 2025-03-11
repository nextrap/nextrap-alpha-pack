import {describe, it} from 'node:test';
import assert from 'node:assert';
import {JSDOM} from 'jsdom';
import {calculateScaleFactor, cropImage, cssToJson} from './nxa-image.utils.js';

describe('cssToJson', async (t) => {
    it('should convert CSS string to JSON object', async (t) => {
        const input = 'top: 10%; bottom: 20%';
        const expected = {top: '10%', bottom: '20%'};
        assert.deepStrictEqual(cssToJson(input), expected);
    });

    it('should handle empty string', async (t) => {
        assert.deepStrictEqual(cssToJson(''), {});
    });

    it('should handle undefined', async (t) => {
        assert.deepStrictEqual(cssToJson(undefined), {});
    });

    it('should handle string with semicolons', async (t) => {
        const input = 'top: 10%; bottom: 20%; left: 30%';
        const expected = {top: '10%', bottom: '20%', left: '30%'};
        assert.deepStrictEqual(cssToJson(input), expected);
    });

    it('should handle various CSS style strings', async (t) => {
        const testCases = [
            // Basic positioning
            'left: 50px; top: 20px',

            // Mixed units
            'margin: 10%; padding: 20px; width: 15rem',

            // Transform and opacity
            'transform: translate(10px, 20px); opacity: 0.5',

            // Colors and gradients
            'background-color: #ff0000; color: rgba(0,0,0,0.5)',

            // Multiple properties with spacing
            'border: 1px solid black;   margin-top: 10px;    padding-left: 20px',

            // Font related
            'font-size: 16px; font-weight: bold; line-height: 1.5',

            // Flexbox
            'display: flex; justify-content: center; align-items: center',

            // Grid
            'grid-template-columns: 1fr 2fr; gap: 10px; grid-auto-rows: minmax(100px, auto)',

            // Animation
            'animation: fadeIn 2s ease-in; transition: all 0.3s',

            // Complex values
            'box-shadow: 0 2px 4px rgba(0,0,0,0.1); filter: blur(5px) brightness(120%)'
        ];

        const expected = [
            {'left': '50px', 'top': '20px'},
            {'margin': '10%', 'padding': '20px', 'width': '15rem'},
            {'transform': 'translate(10px, 20px)', 'opacity': '0.5'},
            {'background-color': '#ff0000', 'color': 'rgba(0,0,0,0.5)'},
            {'border': '1px solid black', 'margin-top': '10px', 'padding-left': '20px'},
            {'font-size': '16px', 'font-weight': 'bold', 'line-height': '1.5'},
            {'display': 'flex', 'justify-content': 'center', 'align-items': 'center'},
            {'grid-template-columns': '1fr 2fr', 'gap': '10px', 'grid-auto-rows': 'minmax(100px, auto)'},
            {'animation': 'fadeIn 2s ease-in', 'transition': 'all 0.3s'},
            {'box-shadow': '0 2px 4px rgba(0,0,0,0.1)', 'filter': 'blur(5px) brightness(120%)'}
        ];

        testCases.forEach((input, index) => {
            assert.deepStrictEqual(cssToJson(input), expected[index]);
        });
    });

    // Add these test cases to your existing test file
    it('should handle malformed input', async (t) => {
        const testCases = [
            // Missing values
            'top:; bottom: 20%',
            'top; bottom: 20%',

            // Missing keys
            ': 10%; bottom: 20%',

            // Extra colons
            'top: 10%: 20%; bottom: 30%',
            // Extra semicolons
            'top: 10%;; bottom: 20%;;;',

            // Only whitespace
            '   ',

            // Mixed valid and invalid
            'top: 10%; invalid; bottom: 20%',

            // Single property without semicolon
            'top: 10%',

            // Values with colons (like urls)
            'background-image: url(http://example.com/image.jpg)',

            // Values with semicolons in parentheses
            'font-family: "Helvetica;Arial", sans-serif'
        ];

        const expected = [
            {'top': '', 'bottom': '20%'},
            {'top': '', 'bottom': '20%'},
            {'bottom': '20%'},
            {'top': '10%: 20%', 'bottom': '30%'},
            {'top': '10%', 'bottom': '20%'},
            {},
            {'top': '10%', 'invalid': '', 'bottom': '20%'},
            {'top': '10%'},
            {'background-image': 'url(http://example.com/image.jpg)'},
            {'font-family': '"Helvetica;Arial", sans-serif'}
        ];

        testCases.forEach((input, index) => {
            assert.deepStrictEqual(cssToJson(input), expected[index]);
        });
    });
});

describe.skip('cropImage', async (t) => {
    let window: Window;
    let document: Document;

    it('should apply basic crop styling', async (t) => {
        // Setup JSDOM
        const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
        const image = dom.window.document.createElement('img');

        const cropData = {
            top: '10%',
            right: '20%',
            bottom: '30%',
            left: '40%'
        };

        cropImage(image, cropData);

        assert.equal(image.style.objectFit, 'cover');
        assert.equal(image.style.marginLeft, '-40%');
        assert.equal(image.style.marginTop, '-10%');
        assert.equal(image.style.marginRight, '-80%');
        assert.equal(image.style.marginBottom, '-70%');
        assert.equal(
            image.style.clipPath.replace(/\s+/g, ' ').trim(),
            'polygon( 40% 10%, 80% 10%, 80% 70%, 40% 70% )'
        );
    });

    it('should handle missing crop values', async (t) => {
        const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
        const image = dom.window.document.createElement('img');

        cropImage(image, {});

        assert.equal(image.style.objectFit, 'cover');
        assert.equal(image.style.marginLeft, '0%');
        assert.equal(image.style.marginTop, '0%');
        assert.equal(image.style.marginRight, '-100%');
        assert.equal(image.style.marginBottom, '-100%');
    });

    it('should apply position and transform', async (t) => {
        const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
        const image = dom.window.document.createElement('img');

        const cropData = {
            position: 'center',
            transform: 'rotate(90deg)'
        };

        cropImage(image, cropData);

        assert.equal(image.style.objectPosition, 'center');
        assert.equal(image.style.transform, 'rotate(90deg)');
    });
});

describe('calculateScaleFactor', async (t) => {
    it('should correctly calculate scale for percentage values', async (t) => {
        const testCases = [
            {
                cropData: {top: '10%', right: '10%', bottom: '10%', left: '10%'},
                expected: 1.25 // 100 / (100 - 10 - 10) = 1.25
            },
            {
                cropData: {top: '20%', right: '20%', bottom: '20%', left: '20%'},
                expected: 1.67 // 100 / (100 - 20 - 20) = 1.67 (rounded)
            },
            {
                cropData: {top: '0%', right: '0%', bottom: '0%', left: '0%'},
                expected: 1 // No cropping
            },
            {
                cropData: {top: '25%', right: '25%', bottom: '25%', left: '25%'},
                expected: 2 // 100 / 50 = 2
            }
        ];

        testCases.forEach(({cropData, expected}) => {
            const scale = calculateScaleFactor(cropData);
            // Compare with tolerance instead of using approximately
            const tolerance = 0.01;
            assert.ok(
                Math.abs(scale - expected) <= tolerance,
                `Scale for ${JSON.stringify(cropData)} should be ${expected} but got ${scale}`
            );
        });
    });

    it('should handle missing crop values', async (t) => {
        const scale = calculateScaleFactor({});
        assert.strictEqual(scale, 1, 'Scale with no crop data should be 1');
    });

    it('should correctly calculate scale for pixel values', async (t) => {
        const testCases = [
            {
                cropData: {top: '50px', right: '50px', bottom: '50px', left: '50px'},
                expected: 1.25 // 500 / (500 - 50 - 50) = 1.25
            },
            {
                cropData: {top: '100px', right: '100px', bottom: '100px', left: '100px'},
                expected: 1.67 // 500 / (500 - 100 - 100) = 1.67 (rounded)
            }
        ];

        testCases.forEach(({cropData, expected}) => {
            const scale = calculateScaleFactor(cropData);
            const tolerance = 0.01;
            assert.ok(
                Math.abs(scale - expected) <= tolerance,
                `Scale for ${JSON.stringify(cropData)} should be ${expected} but got ${scale}`
            );
        });
    });

    it('should correctly calculate scale for mixed unit values', async (t) => {
        const testCases = [
            {
                cropData: {top: '10%', right: '50px', bottom: '10%', left: '50px'},
                expected: 1.25 // Based on reference size of 500px
            },
            {
                cropData: {top: '20%', right: '20%', bottom: '100px', left: '100px'},
                expected: 1.67 // Should use the larger scale factor between width and height
            }
        ];

        testCases.forEach(({cropData, expected}) => {
            const scale = calculateScaleFactor(cropData);
            const tolerance = 0.01;
            assert.ok(
                Math.abs(scale - expected) <= tolerance,
                `Scale for ${JSON.stringify(cropData)} should be ${expected} but got ${scale}`
            );
        });
    });

    it('should handle edge cases', async (t) => {
        const testCases = [
            {
                cropData: {top: '100%', right: '0%', bottom: '0%', left: '0%'},
                expected: 1 // When one dimension is completely cropped, default to scale 1
            },
            {
                cropData: {top: '50%', right: '50%', bottom: '50%', left: '50%'},
                expected: 1 // When crop would exceed image dimensions
            },
            {
                cropData: {top: '-10%', right: '-10%', bottom: '-10%', left: '-10%'},
                expected: 0.83 // Negative crops expand the image (100 / 120 = 0.83)
            },
            {
                cropData: {top: '1000px', right: '1000px', bottom: '1000px', left: '1000px'},
                expected: 1 // When crop would exceed image dimensions, default to scale 1
            }
        ];

        testCases.forEach(({cropData, expected}) => {
            const scale = calculateScaleFactor(cropData);
            const tolerance = 0.01;
            assert.ok(
                Math.abs(scale - expected) <= tolerance,
                `Scale for ${JSON.stringify(cropData)} should be ${expected} but got ${scale}`
            );
        });
    });
});

// Helper function to compare floating-point numbers with tolerance
function assertApproximately(actual: number, expected: number, tolerance: number, message?: string) {
    assert.ok(
        Math.abs(actual - expected) <= tolerance,
        message || `Expected ${actual} to be approximately ${expected} (tolerance: ±${tolerance})`
    );
}
