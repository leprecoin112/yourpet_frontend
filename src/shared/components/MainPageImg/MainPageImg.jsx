import bgMob from '../../images/mainPage/pets-mob-min.png';
import bgMob2x from '../../images/mainPage/pets-mob-2x-min.png';
import bgTab from '../../images/mainPage/pets-tab-min.png';
import bgTab2x from '../../images/mainPage/pets-tab-2x-min.png';
import bgDesk from '../../images/mainPage/pets-desk-min.png';
import bgDesk2x from '../../images/mainPage/pets-desk-2x-min.png';

export const ResponsiveImage = () => {
  return (
    <picture>
      <source
        srcSet={`${bgDesk} 1x, ${bgDesk2x} 2x`}
        media="(min-width:1280px)"
      />
      <source
        srcSet={`${bgTab} 1x, ${bgTab2x} 2x`}
        media="(min-width: 768px)"
      />
      <source
        srcSet={`${bgTab} 1x, ${bgTab2x} 2x`}
        media="(min-width: 321px)"
      />
      <source
        srcSet={`${bgMob} 1x, ${bgMob2x} 2x`}
        media="(max-width: 320px)"
      />
      <img src={bgDesk} alt="pet" />
    </picture>
  );
};
