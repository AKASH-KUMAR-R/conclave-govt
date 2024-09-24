import { useState, useSyncExternalStore } from "react";
import { Input } from "../input/Input";
import { IconButton } from "../buttons/IconButton";
import { PiPlus } from "react-icons/pi";


export const RequirementForm = ({closeForm}) => {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        requirementType: '',
        budget: 0,
        deadLine: '',
        name: '',
        email: '',
        phoneNo: '',
        status: ''
    })

    const [skills, setSkills] = useState([]);
    const [skill, setSkill] = useState({
        name: '',
        level: ''
    });


    const addSkill = () => {

        if (!skill.level || !skill.name) {
            return;
        }
        
        setSkills(prev => {
            const newList = [...prev, {
                name: skill.name,
                level: skill.level
            }]

            return newList;
        })

        setSkill({
            name: '',
            level: ''
        })

    }

    const handleChange = (event) => {

        const { name, value} = event.target;

        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // closeForm();
        // console.log({
        //     ...formData,
        //     skills: skills
        // })
    }

    return (
        <form className=" max-w-xl p-2 flex flex-col gap-4" onSubmit={handleSubmit}>
            <Input 
                placeholder='Title'
                name='title'
                value={formData.title}
                onChange={handleChange}
            />
            <select
                className=" p-3 focus:outline-none"
                name='requirementType'
                value={formData.requirementType}
                onChange={handleChange}
            >
                <option>Requirement Type</option>
                <option>Job Vacancy</option>
                <option>Project</option>
                <option>Skill Requirement</option>
                <option>Service</option>
            </select>

            <textarea
                rows={10}
                className=" w-full p-2 max-w-xl bg-white focus:outline-none rounded"
                placeholder="Breif Description"
                name='description'
                value={formData.description}
                onChange={handleChange}
            >
            </textarea>

            <div className=" flex gap-4">
                <Input 
                    placeholder='Add Skill' 
                    value={skill.name} 
                    onChange={(event) => setSkill(prev => ({...prev, name: event.target.value}))} />
                <select
                    placeholder='Skill Level'
                    className=" px-2 rounded"
                    value={skill.level}
                    onChange={(event) => setSkill(prev => ({...prev, level: event.target.value}))}
                >
                    <option value=''>Select level</option>
                    <option value='begineer'>Beginner</option>
                    <option value='intermediate'>Intermediate</option>
                    <option value='expert'>Expert</option>
                </select>

                <IconButton
                    type="button"
                    className=" min-w-14 rounded-lg"
                    onClick={addSkill}
                >
                    <PiPlus size={24} />
                </IconButton>
            </div>

            {skills.length > 0 && <div className=" flex flex-wrap gap-2">
                {skills.map((eachSkill) => (
                    <div className="  px-4 py-2  flex flex-col border border-black rounded-md">
                        <span className=" font-semibold">{eachSkill.name}</span>
                        <span className=" text-xs opacity-60">{eachSkill.level}</span>
                    </div>
                ))}
            </div>}
            <Input 
                placeholder='Budget' 
                type='number'
                name='budget'
                value={formData.budget}
                onChange={handleChange} 
                min={1}
            />
            <Input 
                placeholder='Deadline' 
                type='date'
                name='deadLine'
                value={formData.deadLine}
                onChange={handleChange} 
            />
            <fieldset className=" flex flex-col gap-4">
                <legend className=" mt-2  text-lg font-semibold ">Contact Person</legend>
                <Input 
                    placeholder='Name' 
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange} 
                />
                <Input 
                    placeholder='Email' 
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange} 
                />
                <Input 
                    placeholder='Phone Number' 
                    type='text'
                    name='phoneNo'
                    value={formData.phoneNo}
                    onChange={handleChange} 
                />
            </fieldset>
            <select
                placeholder='Status'
                className=" px-2 py-4 rounded"
                name='status'
                value={formData.status}
                onChange={handleChange}
            >
                <option value=''>Select Status</option>
                <option value='Open'>Open</option>
                <option value='Closed'>Closed</option>
                <option value='In Progress'>In Progress</option>
            </select>

            <div className=" w-full flex justify-end gap-4">
                <button
                    onClick={closeForm}
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