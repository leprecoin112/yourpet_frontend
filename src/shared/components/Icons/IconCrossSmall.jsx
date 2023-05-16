//change *stroke* to change color

const IconCrossSmall = ({className}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width='24' height='24' fill='none' className={className}>
            <path d="m16 8-8 8m0-8 8 8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default IconCrossSmall;