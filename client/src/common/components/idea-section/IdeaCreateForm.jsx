import { useState } from "react"
import { Input } from "../input/Input"


export const IdeaCreateForm = ({ closehandler}) => {

    const [formData, setFormData] = useState({
        title: '',
        description: ''
    });

    const handleChange = (event) => {

        const { name, value} = event.target;

        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))

    }

    const handleSubmit = (event) => {

        event.preventDefault();

        console.log(formData);
    }
    
    return (
        <form className=" p-2 max-w-xl flex flex-col gap-4" onSubmit={handleSubmit}>
            <Input name='title' value={formData.title} onChange={handleChange} placeholder='Title' />
            <textarea
                rows={10}
                className=" p-2 "
                placeholder="Breif Description"
            >
            </textarea>
            <div className=" w-full flex justify-end gap-4">
                <button
                    onClick={closehandler}
                    className=" px-4 py-2 w-fit text-lg hover:bg-gray-200 duration-300 font-semibold rounded "
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className=" px-4 py-2 w-fit text-lg bg-blue-400 font-semibold rounded "
                >
                    Submit
                </button>
            </div>
        </form>
    )
}