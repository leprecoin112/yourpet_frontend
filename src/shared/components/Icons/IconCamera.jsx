//change *stroke* to change color

const IconCamera = ({className}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width='24' height='24' fill="none"  className={className}>
            <path d="M12 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" strokeWidth="1.5" strokeLinejoin="round"/>
            <path d="M3 9a2 2 0 0 1 2-2h2.5a1 1 0 0 0 1-1 1 1 0 0 1 1-1h5a1 1 0 0 1 1 1 1 1 0 0 0 1 1H19a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
    )
};

export default IconCamera;