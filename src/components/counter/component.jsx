export const Counter = ({value, onChange, step = 1, min = 0, max = 5}) => {
    
    return (
        <div>
            <button onClick={() => onChange(value-step)}
            disabled={value <= min}>
                -
            </button>
            {value}
            <button onClick={() => onChange(value+step)}
            disabled={value >= max}>
                +
            </button>
        </div>
    );
};
