import UserInput from "./UserInput";

const userInputJson = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
};

function UserInputGroup({ setUserInputs, userInputs }) {

    function handleInputChange(inputIdentifier, value) {
        setUserInputs((prev) => ({
            ...prev,
            [inputIdentifier]: +value
        }));
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <UserInput
                    inputIdentifier="initialInvestment"
                    inputLabel="Initial Investment"
                    value={userInputs.initialInvestment}
                    handleInputChange={handleInputChange}
                />
                <UserInput
                    inputIdentifier="annualInvestment"
                    inputLabel="Annual Investment"
                    value={userInputs.annualInvestment}
                    handleInputChange={handleInputChange}
                />
            </div>
            <div className="input-group">
                <UserInput
                    inputIdentifier="expectedReturn"
                    inputLabel="Expected Return"
                    value={userInputs.expectedReturn}
                    handleInputChange={handleInputChange}
                />
                <UserInput
                    inputIdentifier="duration"
                    inputLabel="Duration"
                    value={userInputs.duration}
                    handleInputChange={handleInputChange}
                />
            </div>
        </section>

    );
}

export default UserInputGroup;