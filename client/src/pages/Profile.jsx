import { CircularProgressBar } from '../common/components/CircularProgressBar';
import { Input } from '../common/components/input/Input';
import ProfileImage from '/profile-image.jpg';

export const Profile = () => {

    return (
        <section className=" px-2 sm:px-6 py-4 bg-primary h-[calc(100vh-74px)] overflow-y-auto">

            <form className=' w-full  flex flex-col xl:flex-row gap-4'>
                <div className=" flex-grow left space-y-10">
                    <div className=" max-w-xl top flex flex-col sm:flex-row gap-4 items-center">
                        <div className=" flex flex-col items-center gap-4">
                            <div>
                                <img
                                    src={ProfileImage}
                                    className=" object-cover rounded-full"
                                >
                                </img>
                            </div>
                            <button
                                type='button'
                                className=' px-2 w-40 h-12 flex justify-center items-center bg-[#F0EFFA] text-lg font-bold rounded-full'
                            >
                                Update Photo
                            </button>
                        </div>

                        <div className=' w-full flex flex-col gap-4'>
                            <Input
                                type='text'
                                placeholder='Name'
                            />
                            <Input
                                type='text'
                                placeholder='Education Status'
                            />
                        </div>
                    </div>

                    <div className=' w-full flex flex-col gap-6'>

                        <Input
                            type='text'
                            placeholder='College name'
                            value="Government Engineering College Thrissur"
                            disable
                        />
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

                    </div>
                </div>
                <div className=" flex-grow right">
                    <div className=' flex items-center gap-4'>
                        <div className=' profile-progress'>
                            <CircularProgressBar progressValue={78} />
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

                </div>
            </form>

        </section>
    );
}