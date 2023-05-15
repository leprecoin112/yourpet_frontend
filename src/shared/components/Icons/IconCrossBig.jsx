//change *stroke* to change color

const IconCrossBig = ({color}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width='24' height='24' fill='none'>
            <path d="M19 5 5 19M5 5l14 14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke={color} />
        </svg>
    );
};

export default IconCrossBig;