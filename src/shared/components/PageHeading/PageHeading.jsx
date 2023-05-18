import { Heading } from "./PageHeading.styled";

const PageHeading = ({text, styled}) => {
    return (
        <Heading className={styled}>{text}</Heading>
    )
}

export default PageHeading;