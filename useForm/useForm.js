import { useState } from "react";


export const useForm = (initialFormValue = {}) => {

    const [formState, setFormState] = useState(initialFormValue);

    const {username, email, password} = formState;
    
    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        });
    } 

    const onResetForm = () => {
        setFormState(initialFormValue);
    }


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}