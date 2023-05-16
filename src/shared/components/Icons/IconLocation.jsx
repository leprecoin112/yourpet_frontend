//change *stroke* to change color

const IconLocation = ({className}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width='24' height='24' fill='none' className={className}>
            <path d="M20.758 11c0 4.418-3.582 8-8 10-4.418-2-8-5.582-8-10a8 8 0 1 1 16 0Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.758 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default IconLocation;