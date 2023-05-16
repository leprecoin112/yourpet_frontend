//change *stroke* to change color

const IconPlusSmall = ({className}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width='24' height='24' fill='none' className={className}>
            <path d="M12 7v10m-5-5h10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default IconPlusSmall;