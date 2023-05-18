import catMob1x from '../../images/not-found/catTongueMob@1x-min.png';
import catMob2x from '../../images/not-found/catTongueMob@2x-min.png';
import catTab1x from '../../images/not-found/catTongueTab@1x-min.png';
import catTab2x from '../../images/not-found/catTongueTab@2x-min.png';
import catDesk1x from '../../images/not-found/catTongueDesk@1x-min.png';
import catDesk2x from '../../images/not-found/catTongueDesk@2x-min.png';

import { NotFoundContainer, Four, CatBackground, CatImage } from "./NotFound.styled";

const NotFound = () => {
    return (
        <NotFoundContainer>
            <Four>4</Four>
            <CatBackground>
                <picture>
                    <source
                        srcSet={`${catDesk1x} 1x, ${catDesk2x} 2x`}
                        media="(min-width: 1280px)"
                    />
                    <source
                        srcSet={`${catTab1x} 1x, ${catTab2x} 2x`}
                        media="(min-width: 768px)"
                    />
                    <source
                        srcSet={`${catMob1x} 1x, ${catMob2x} 2x`}
                        media="(max-width: 767px)"
                    />
                    <CatImage src={catMob1x} alt="Cat with tongue" />
                </picture>
            </CatBackground>   
            <Four className='right'>4</Four>
        </NotFoundContainer>
    )
}

export default NotFound;