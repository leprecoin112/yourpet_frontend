import { AddPetWrapper } from './AddPetPage.styled';

import React, { useState } from 'react';
import {ChooseOption} from '../../shared/components/AddPetForm/Step1/AddPetForm1';
import{ PersonalDetails} from '../../shared/components/AddPetForm/step2/AddPetForm2';
import MoreInfo from '../../shared/components/AddPet/MoreInfo/MoreInfo';

const AddPetPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  const handleFormSubmit = (values) => {
    setFormData(values);
    
    console.log('Form data:', values);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <ChooseOption nextStep={nextStep} prevStep={prevStep} />;
      case 2:
        return <PersonalDetails nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return (
          <MoreInfo
            nextStep={nextStep}
            prevStep={() => setStep(2)}
            onSubmit={handleFormSubmit}
          />
        );
      default:
        return null;
    }
  };




  return <> {renderStep()}</>;
};

export default AddPetPage;


