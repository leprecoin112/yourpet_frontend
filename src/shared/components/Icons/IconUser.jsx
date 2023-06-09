//change *stroke* to change color

const IconUser = ({className}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width='28' height='28' fill='none' className={className}>
            <path d="M22 24v-2a4 4 0 0 0-4-4h-8a4 4 0 0 0-4 4v2m12-14a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x=".75" y=".75" width="26.5" height="26.5" rx="13.25" strokeWidth="1.5"/>
        </svg>
    );
};

export default IconUser;