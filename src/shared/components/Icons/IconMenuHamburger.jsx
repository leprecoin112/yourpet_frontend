//change *stroke* to change color

const IconMenuHamburger = ({className}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width='24' height='24' fill='none' className={className}>
            <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default IconMenuHamburger;