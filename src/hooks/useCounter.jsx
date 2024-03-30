import { useCallback, useState } from "react";

export const useCounter = ({defaultValue = 0, step = 1} = {}) => {
    const [value, setValue] = useState(defaultValue);

    const increment = useCallback(() => setValue((currentValue) => (currentValue + step)), [step]);
    const decrement = useCallback(() => setValue((currentValue) => (currentValue - step)), [step]);

    return {value, increment, decrement};
};