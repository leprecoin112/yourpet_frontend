import {
  AddPetWrapper,
  AddPetWrapperShort,
  PageTitle,
} from './AddPetPage.styled';

import React, { useState } from 'react';
import { ChooseOption } from '../../shared/components/AddPetForm/Step1/AddPetForm1';
import { PersonalDetails } from '../../shared/components/AddPetForm/step2/AddPetForm2';
import MoreInfo from '../../shared/components/AddPet/MoreInfo/MoreInfo';
import { AddPetNav2, AddPetNav1, AddPetNav3 } from './AddPetNav';
import { PersonalDetailsToAdd } from '../../shared/components/AddPetForm/step2/AddPetFormToAdd';
import MoreInfoToAdd from '../../shared/components/AddPet/MoreInfo/MoreInfoToAdd';
import MoreInfoToLost from '../../shared/components/AddPet/MoreInfo/MoreInfoToLost';

const AddPetPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    category: '',
  });

  const nextStep = () => {
    setStep(prevStep => prevStep + 1);

    console.log('data', formData);
  };
  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  const handleFormSubmit = values => {
    setFormData(values);

    console.log('Form data:', values);
  };

  // Значення полів з усіх форм записувати у state formData.
  //   formData, setFormData передається пропсами у кожну форму
  // Валідація не працює та in good hands
  function renderStep() {
    switch (step) {
      case 1:
        return (
          <AddPetWrapperShort>
            <PageTitle>Add pet</PageTitle>
            <AddPetNav1 />
            <ChooseOption
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          </AddPetWrapperShort>
        );
      case 2:
        return (
          <>
            {formData.category === 'my-pet' ? (
              <AddPetWrapperShort>
                <PageTitle>Add my pet</PageTitle>
                <AddPetNav2 />
                <PersonalDetailsToAdd
                  formData={formData}
                  setFormData={setFormData}
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              </AddPetWrapperShort>
            ) : null}
            {formData.category === 'sell' ? (
              <AddPetWrapper className="to-sell">
                <PageTitle>Add pet for sale</PageTitle>
                <AddPetNav2 />
                <PersonalDetails nextStep={nextStep} prevStep={prevStep} />
              </AddPetWrapper>
            ) : null}
            {formData.category === 'lost-found' ? (
              <AddPetWrapper className="to-sell">
                <PageTitle>Add lost pet</PageTitle>
                <AddPetNav2 />
                <PersonalDetails
                  formData={formData}
                  setFormData={setFormData}
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              </AddPetWrapper>
            ) : null}
          </>
        );
      case 3:
        return (
          <>
            {formData.category === 'my-pet' ? (
              <AddPetWrapperShort>
                <PageTitle>Add my pet</PageTitle>
                <AddPetNav3 />
                <MoreInfoToAdd
                  formData={formData}
                  setFormData={setFormData}
                  nextStep={nextStep}
                  prevStep={() => setStep(2)}
                  onSubmit={handleFormSubmit}
                />
              </AddPetWrapperShort>
            ) : null}
            {formData.category === 'sell' ? (
              <AddPetWrapper>
                <PageTitle className="to-sell">Add pet for sale</PageTitle>
                <AddPetNav3 />
                <MoreInfo
                  formData={formData}
                  setFormData={setFormData}
                  nextStep={nextStep}
                  prevStep={() => setStep(2)}
                  onSubmit={handleFormSubmit}
                />
              </AddPetWrapper>
            ) : null}
            {formData.category === 'lost-found' ? (
              <AddPetWrapper className="to-lost">
                <PageTitle className="to-sell">Add lost pet</PageTitle>
                <AddPetNav3 />
                <MoreInfoToLost
                  formData={formData}
                  setFormData={setFormData}
                  nextStep={nextStep}
                  prevStep={() => setStep(2)}
                  onSubmit={handleFormSubmit}
                />
              </AddPetWrapper>
            ) : null}
          </>
        );
      default:
        return null;
    }
  }

  return <> {renderStep()}</>;
};

export default AddPetPage;
