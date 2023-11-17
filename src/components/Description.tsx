type descriptiontype = {
    description: string;
};
const Description = ({ description }: descriptiontype) => {
    return (
        <div className='flex flex-col'>
            <p className='font-semibold'>Details:</p>
            <p>{description}</p>
        </div>
    );
};

export default Description;
