import React , {useState} from 'react'

// custom hook : giúp làm việc với form 
// const {} = useFrom(username: "", email: "")
// initialValues : giá trị mặc định 
export default function useForm(initialValues) {
    const [values, setValue] = useState(initialValues)

    const [errors, setError] = useState({})
    const handleChange = (evt) => {
        const {value , name} = evt.target;

        setValue((values) => ({
            ...values,
            [name]: value,
        }));
    };

    const handleBlur = (evt) => {
        const {value, name } = evt.target;

        if (!value) {
            setError((errors) => ({
                [name]: "This field is required",
            }))
        }
    }

    return {values,errors,handleBlur, handleChange};
}
