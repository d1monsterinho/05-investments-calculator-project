function UserInput({ inputIdentifier, inputLabel, value, handleInputChange }) {
    return (
        <p>
            <label>{inputLabel}</label>
            <input
                type="number"
                required
                value={value}
                onChange={(event) => handleInputChange(inputIdentifier, event.target.value)}
            />
        </p>
    );
}

export default UserInput;