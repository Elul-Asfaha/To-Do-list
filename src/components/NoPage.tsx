import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
const NoPage = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };
    return (
        <div className='flex flex-col items-center gap-14 py-10 p-5 md:p-32'>
            <div className='w-full flex flex-col gap-5 max-w-[1700px]'>
                <p className='text-5xl font-bold'>
                    Sorry, we can’t find that page
                </p>
                <button
                    onClick={handleGoBack}
                    className='flex text-blue-500 gap-1 items-center text-2xl'
                >
                    <div>
                        <IoArrowBack />
                    </div>
                    <p className='text-xl'>Go Back</p>
                </button>
            </div>
        </div>
    );
};

export default NoPage;
