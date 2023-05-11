import petFirstDesk from '../../shared/images/mainPage/1pet-desk-min.png';
import petFirstXDesk from '../../shared/images/mainPage/1pet-desk-2х-min.png';
import petFirstTab from '../../shared/images/mainPage/1pet-tab-min.png';
import petFirstXTab from '../../shared/images/mainPage/1pet-tab-2x-min.png';
import petFirstMob from '../../shared/images/mainPage/1pet-mob-min.png';
import petFirstXMob from '../../shared/images/mainPage/1pet-mob-2x-min.png';
import petSecondDesk from '../../shared/images/mainPage/2pet-desk-min.png';
import petSecondXDesk from '../../shared/images/mainPage/2pet-desk-2х-min.png';
import petSecondTab from '../../shared/images/mainPage/2pet-tab-min.png';
import petSecondXTab from '../../shared/images/mainPage/2pet-tab-2x-min.png';
import petSecondMob from '../../shared/images/mainPage/2pet-mob-min.png';
import petSecondXMob from '../../shared/images/mainPage/2pet-mob-2x-min.png';
import petThirdDesk from '../../shared/images/mainPage/3pet-desk-min.png';
import petThirdXDesk from '../../shared/images/mainPage/3pet-desk-2х-min.png';
import petThirdTab from '../../shared/images/mainPage/3pet-tab-min.png';
import petThirdXTab from '../../shared/images/mainPage/3pet-tab-2x-min.png';
import petThirdMob from '../../shared/images/mainPage/3pet-mob-min.png';
import petThirdXMob from '../../shared/images/mainPage/3pet-mob-2x-min.png';
import { PetFirst, PetSecond, PetThird } from './ResponsiveImages.styled';
export const ResponsiveImageFirst = () => {
  return (
    <PetFirst>
      <source
        srcSet={`${petFirstDesk} 1x, ${petFirstXDesk} 2x`}
        media="(min-width:1280px)"
      />
      <source
        srcSet={`${petFirstTab} 1x, ${petFirstXTab} 2x`}
        media="(min-width: 768px)"
      />
      <source
        srcSet={`${petFirstMob} 1x, ${petFirstXMob} 2x`}
        media="(min-width: 321px)"
      />
      <source
        srcSet={`${petFirstMob} 1x, ${petFirstXMob} 2x`}
        media="(max-width: 320px)"
      />
      <img src={petFirstDesk} alt="pet" />
    </PetFirst>
  );
};
export const ResponsiveImageSecond = () => {
  return (
    <PetSecond>
      <source
        srcSet={`${petSecondDesk} 1x, ${petSecondXDesk} 2x`}
        media="(min-width:1280px)"
      />
      <source
        srcSet={`${petSecondTab} 1x, ${petSecondXTab} 2x`}
        media="(min-width: 768px)"
      />
      <source
        srcSet={`${petSecondMob} 1x, ${petSecondXMob} 2x`}
        media="(min-width: 321px)"
      />
      <source
        srcSet={`${petSecondMob} 1x, ${petSecondXMob} 2x`}
        media="(max-width: 320px)"
      />
      <img src={petSecondDesk} alt="pet" />
    </PetSecond>
  );
};
export const ResponsiveImageThird = () => {
  return (
    <PetThird>
      <source
        srcSet={`${petThirdDesk} 1x, ${petThirdXDesk} 2x`}
        media="(min-width:1280px)"
      />
      <source
        srcSet={`${petThirdTab} 1x, ${petThirdXTab} 2x`}
        media="(min-width: 768px)"
      />
      <source
        srcSet={`${petThirdMob} 1x, ${petThirdXMob} 2x`}
        media="(min-width: 321px)"
      />
      <source
        srcSet={`${petThirdMob} 1x, ${petThirdXMob} 2x`}
        media="(max-width: 320px)"
      />
      <img src={petThirdDesk} alt="pet" />
    </PetThird>
  );
};
