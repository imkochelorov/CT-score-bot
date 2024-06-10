function extractValue(values, targetValue, targetValueIndex) {
    targetValue = targetValue.toString().toLowerCase();
    for (let i = 0; i < values.length; i++) {
        if (values[i][targetValueIndex].toString().toLowerCase() === targetValue) {
            return values[i];
        }
    }
    return null;
}