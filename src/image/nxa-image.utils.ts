/**
 * Converts a CSS-style string into a JSON object.
 *
 * @param cssString - A string containing CSS-style declarations (e.g., "top: 10%; bottom: 20%")
 * @returns A record object where keys are CSS property names and values are the corresponding values
 * @example
 * cssToJson("top: 10%; bottom: 20%") // returns {"top": "10%", "bottom": "20%"}
 * cssToJson("") // returns {}
 */
export const cssToJson = (cssString: string): Record<string, string> => {
    if (!cssString || cssString.trim() === '') {
        return {};
    }

    // Split by semicolons, but keep semicolons inside quotes and parentheses
    const splitByPropertyRegex = /(?![^(]*\))(?![^"]*"(?:[^"]*"[^"]*")*[^"]*$);/;
    const properties = cssString.split(splitByPropertyRegex);

    return properties
        .map(pair => pair.trim())
        .filter(pair => pair !== '')
        .reduce((acc, pair) => {
            const colonIndex = pair.indexOf(':');
            if (colonIndex === -1) {
                acc[pair.trim()] = '';
                return acc;
            }

            const key = pair.substring(0, colonIndex).trim();
            const value = pair.substring(colonIndex + 1).trim();

            if (key === '') {
                return acc;
            }

            acc[key] = value;
            return acc;
        }, {} as Record<string, string>);
};

/**
 * Crops an image element using CSS clip-path and adjusts its margins based on the provided crop data.
 *
 * @param {HTMLImageElement} child - The image element to be cropped
 * @param {Object} cropData - Object containing crop values
 * @param {string} [cropData.top] - Distance from top edge in percentage
 * @param {string} [cropData.right] - Distance from right edge in percentage
 * @param {string} [cropData.bottom] - Distance from bottom edge in percentage
 * @param {string} [cropData.left] - Distance from left edge in percentage
 * @param {string} [cropData.transform] - Additional CSS transform to be applied
 * @param {string} [cropData.position] - Object position value (e.g., 'center', '50% 50%', 'top left')
 *
 * @example
 * cropImage(imageElement, {
 *   top: '10%',
 *   right: '20%',
 *   bottom: '10%',
 *   left: '20%',
 *   position: 'center'
 * });
 */
export const cropImage = (child: HTMLImageElement, cropData: { [p: string]: string }) => {
    // Set container styles
    child.style.objectFit = 'cover';

    // Set object position if specified
    if (cropData.position) {
        child.style.objectPosition = cropData.position;
    }

    // Helper function to parse values and maintain units
    const parseValue = (value?: string) => {
        if (!value) return { value: 0, unit: '%' };

        const match = value.match(/^([\d.-]+)(%|px|em|rem|vh|vw)?$/);
        if (!match) return { value: 0, unit: '%' };

        return {
            value: parseFloat(match[1]),
            unit: match[2] || '%'
        };
    };

    // Parse crop values with their units
    const top = parseValue(cropData.top);
    const right = parseValue(cropData.right);
    const bottom = parseValue(cropData.bottom);
    const left = parseValue(cropData.left);

    // For percentage values, use the previous approach
    if (top.unit === '%' && right.unit === '%' && bottom.unit === '%' && left.unit === '%') {
        /*
        child.style.marginTop = `-${top.value}%`;
        child.style.marginLeft = `-${left.value}%`;
        child.style.marginRight = `-${100-right.value}%`;
        child.style.marginBottom = `-${100-bottom.value}%`;
        */
        child.style.width = '100%';
        child.style.height = '100%';

        child.style.clipPath = `polygon(
            ${left.value}% ${top.value}%,
            ${100-right.value}% ${top.value}%,
            ${100-right.value}% ${100-bottom.value}%,
            ${left.value}% ${100-bottom.value}%
        )`;
    } else {
        // For pixel values or mixed units, use absolute positioning
        //child.style.position = 'absolute';
        child.style.marginTop = `-${top.value}${top.unit}`;
        child.style.marginLeft = `-${left.value}${left.unit}`;
        child.style.marginRight = `-${right.value}${right.unit}`;
        child.style.marginBottom = `-${bottom.value}${bottom.unit}`;

        // Calculate the width and height to ensure full coverage
        child.style.width = `calc(100% + ${left.value}${left.unit} + ${right.value}${right.unit})`;
        child.style.height = `calc(100% + ${top.value}${top.unit} + ${bottom.value}${bottom.unit})`;

        // Create clip-path with the appropriate units
        child.style.clipPath = `polygon(
            ${left.value}${left.unit} ${top.value}${top.unit},
            calc(100% - ${right.value}${right.unit}) ${top.value}${top.unit},
            calc(100% - ${right.value}${right.unit}) calc(100% - ${bottom.value}${bottom.unit}),
            ${left.value}${left.unit} calc(100% - ${bottom.value}${bottom.unit})
        )`;
    }


    // Calculate the scale factor
    const scale = calculateScaleFactor(cropData);
    console.log("scale", scale);
    child.style.transform = `scale(${scale})`;

    // Apply any additional transform if specified
    if (cropData.transform) {
        const currentTransform = child.style.transform;
        child.style.transform = `${currentTransform} ${cropData.transform}`;
    }
}


/**
 * Calculates the scale factor needed to make cropped image fill the container
 *
 * @param cropData Object containing crop values (top, right, bottom, left)
 * @returns The calculated scale factor
 */
export const calculateScaleFactor = (cropData: { [p: string]: string }): number => {
    const parseValue = (value?: string) => {
        if (!value) return { value: 0, unit: '%' };

        const match = value.match(/^([\d.-]+)(%|px|em|rem|vh|vw)?$/);
        if (!match) return { value: 0, unit: '%' };

        return {
            value: parseFloat(match[1]),
            unit: match[2] || '%'
        };
    };

    // Parse crop values with their units
    const top = parseValue(cropData.top);
    const right = parseValue(cropData.right);
    const bottom = parseValue(cropData.bottom);
    const left = parseValue(cropData.left);

    // For percentage values, use direct calculation
    if (top.unit === '%' && right.unit === '%' && bottom.unit === '%' && left.unit === '%') {
        const visibleWidth = 100 - left.value - right.value;
        const visibleHeight = 100 - top.value - bottom.value;

        const scaleX = visibleWidth > 0 ? 100 / visibleWidth : 1;
        const scaleY = visibleHeight > 0 ? 100 / visibleHeight : 1;

        return Math.max(scaleX, scaleY);
    }
    // For pixel values or mixed units
    else {
        // For mixed units, we need to normalize everything to a common reference
        let referenceWidth = 500; // Reference size in pixels (assumed container width)
        let referenceHeight = 500; // Reference size in pixels (assumed container height)

        // Convert all values to pixels for calculation
        const topPx = top.unit === '%' ? (top.value * referenceHeight / 100) : top.value;
        const rightPx = right.unit === '%' ? (right.value * referenceWidth / 100) : right.value;
        const bottomPx = bottom.unit === '%' ? (bottom.value * referenceHeight / 100) : bottom.value;
        const leftPx = left.unit === '%' ? (left.value * referenceWidth / 100) : left.value;

        // Calculate visible dimensions in pixels
        const visibleWidth = referenceWidth - leftPx - rightPx;
        const visibleHeight = referenceHeight - topPx - bottomPx;

        // Calculate scale factors
        const scaleX = visibleWidth > 0 ? referenceWidth / visibleWidth : 1;
        const scaleY = visibleHeight > 0 ? referenceHeight / visibleHeight : 1;

        // Use the larger scale factor to ensure full coverage
        return Math.max(scaleX, scaleY);
    }
};
