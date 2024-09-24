import { useState } from "react";
import { Input } from "../input/Input";


export const ProductCreateForm = ({closeHandler}) => {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        githubLink: ''
    })

    const handleChange = (event) => {

        const { name, value } = event.target;

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
        <form className=" max-w-xl p-2 flex flex-col gap-6" onSubmit={handleSubmit}>
            <Input
                placeholder='Title'
                name="title"
                value={formData.title}
                onChange={handleChange}

            />
            <textarea
                rows={10}
                className=" p-2 focus:outline-none"
                placeholder="Breif Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
            >
            </textarea>
            <Input
                placeholder='GitHub Link'
                name="githubLink"
                value={formData.githubLink}
                onChange={handleChange}
            />

            <div className=" w-full flex justify-end gap-4">
                <button
                    type="button"
                    onClick={closeHandler}
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
    );
}