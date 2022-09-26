import { useState } from "react";

function useAuthFormValidity(applyData) {

    const [inputFieldData, setInputField] = useState('');
    const [isInputFieldTouched, setInputFieldTouch] = useState(false);
    const inputFieldChangeHandler = (value) => {
        setInputFieldTouch(true);
        setInputField(value);
    }

    const isInputFieldValid = applyData(inputFieldData);



    return (
        {
            inputFieldData,
            isInputFieldTouched,
            setInputField,
            setInputFieldTouch,
            inputFieldChangeHandler,
            isInputFieldValid,
        }
    );

}

export default useAuthFormValidity;