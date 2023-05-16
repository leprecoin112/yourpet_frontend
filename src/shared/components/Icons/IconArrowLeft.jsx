//change *stroke* to change color

const IconArrowLeft = ({className}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width='24' height='24' fill='none' className={className}>
            <path d="M4 12h16M4 12l6-6m-6 6 6 6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default IconArrowLeft;