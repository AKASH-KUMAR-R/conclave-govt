import { useState } from 'react';
import { CircularProgressBar } from '../common/components/CircularProgressBar';
import { Input } from '../common/components/input/Input';
import { HeadSection } from '../components/sub-components/dashboard/HeroSection';
import ProfileImage from '/user1-image.jpeg';

export const Profile = () => {

    const [formData, setFormData] = useState({
        name: '',
        image: ''
    });


    return (
        <section className=" px-2 sm:px-6 py-4 bg-primary h-[calc(100vh-74px)] overflow-y-auto">
            <HeadSection />
            <form className=' pt-8 w-full  flex flex-col xl:flex-row gap-4'>
                <div className=" flex-grow left space-y-10 place-self-center min-w-96">
                    <div className=" max-w-xl top flex flex-col  gap-4 items-center">
                        <div className=" flex flex-col items-center gap-4">
                            <div className=' max-w-28'>
                                <img
                                    src={ProfileImage}
                                    className=" object-cover rounded-full"
                                >
                                </img>
                            </div>
                            <button
                                type='button'
                                className=' px-2 w-40 h-12 flex justify-center items-center border-2 border-black border-opacity-20 bg-[#F0EFFA] text-lg font-bold rounded-full'
                            >
                                Update Photo
                            </button>
                        </div>

                        <div className=' w-full flex flex-col gap-4'>
                            <Input
                                type='text'
                                placeholder='Name'
                                value={formData.name}
                                onChange={ (event) => setFormData(prev => ({...prev, name: event.target.value}))}
                            />
                            <div>
                            {/* <select
                                className=' w-full max-w-xl px-3 h-12 focus:outline-none bg-white rounded'
                            >
                                <option>Educational Status</option>
                                <option>Undergraduated</option>
                                <option>Postgraduated</option>
                            </select> */}
                            </div>
                            
                        </div>
                    </div>

                    {/* <div className=' w-full flex flex-col gap-6'>

                        <select
                            className=' w-full max-w-xl px-3 h-12 focus:outline-none bg-white rounded'
                        >
                            <option>College Name</option>
                            <option>Government Engineering College Thrissur</option>
                            <option>Government Engineering College Trivandum</option>
                            <option>NSS College Of Engineering Palakkad</option>
                        </select>
                        <div className=' flex flex-col gap-4'>
                            <span className=' text-lg font-semibold  '>Links</span>
                            <Input
                                type='text'
                                placeholder='Email'
                                value='student121314@gmail.com'
                                disable
                            />
                            <Input
                                type='text'
                                placeholder='Github'
                                value='https://www.github.com'
                                disable
                            />
                            <Input
                                type='text'
                                placeholder='Linkedin'
                                value="https://www.linkedin.com"
                                disable
                            />
                        </div>

                    </div> */}
                </div>
                {/* <div className=" flex-grow right">
                    <div className=' flex items-center gap-4'>
                        <div className=' profile-progress'>
                            <CircularProgressBar progressValue={20} />
                        </div>
                        <div className=' space-y-2 font-medium'>
                            <h2>Profile completion status</h2>
                            <div>78%</div>
                        </div>
                    </div>
                    <textarea
                        placeholder='About you(Skills, interests etc)'
                        rows={10}
                        className=' mt-4 p-2 w-full max-w-xl h-[calc(100%-72px)] focus:outline-none  rounded-md'
                    >

                    </textarea>

                </div> */}
            </form>

        </section>
    );
}