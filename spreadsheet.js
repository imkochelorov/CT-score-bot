function extractValue(values, targetValue, targetValueIndex) {
    for (let i = 0; i < values.length; i++) {
        if (values[i][targetValueIndex] === targetValue) {
            return values[i];
        }
    }
    return null;
}