import {
  AddPetNavContainer,
  NavItem,
  NavItemText,
  NavUnderline,
} from './AddPetPage.styled';

export const AddPetNav1 = () => {
  return (
    <AddPetNavContainer>
      <NavItem>
        <NavItemText className={'current'}>Choose option</NavItemText>
        <NavUnderline className={'current'}></NavUnderline>
      </NavItem>
      <NavItem>
        <NavItemText>Personal details</NavItemText>
        <NavUnderline></NavUnderline>
      </NavItem>
      <NavItem>
        <NavItemText>More info</NavItemText>
        <NavUnderline></NavUnderline>
      </NavItem>
    </AddPetNavContainer>
  );
};

export const AddPetNav2 = () => {
  return (
    <AddPetNavContainer>
      <NavItem>
        <NavItemText className={'done'}>Choose option</NavItemText>
        <NavUnderline className={'done'}></NavUnderline>
      </NavItem>
      <NavItem>
        <NavItemText className={'current'}>Personal details</NavItemText>
        <NavUnderline className={'current'}></NavUnderline>
      </NavItem>
      <NavItem>
        <NavItemText>More info</NavItemText>
        <NavUnderline></NavUnderline>
      </NavItem>
    </AddPetNavContainer>
  );
};

export const AddPetNav3 = () => {
  return (
    <AddPetNavContainer className="to-sell">
      <NavItem>
        <NavItemText className={'done'}>Choose option</NavItemText>
        <NavUnderline className={'done'}></NavUnderline>
      </NavItem>
      <NavItem>
        <NavItemText className={'done'}>Personal details</NavItemText>
        <NavUnderline className={'done'}></NavUnderline>
      </NavItem>
      <NavItem>
        <NavItemText className={'current'}>More info</NavItemText>
        <NavUnderline className={'current'}></NavUnderline>
      </NavItem>
    </AddPetNavContainer>
  );
};
