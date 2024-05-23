//Validation 
import React, { createContext, useState } from 'react';
export const StepContext = createContext();
export const StepProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    basicDetails: { firstName: '', lastName: '', email: '', phoneNumber: '' },
    addressDetails: { address: '', pinCode: '', city: '', country: '' },
    companyDetails: { designation: '', previousCompany: '', previousPackage: '', expectedPackage: '' },
  });
  const [errors, setErrors] = useState({});
 const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);//Email validate variable
  const validateNumber = (value, length) => /^[0-9]+$/.test(value) && value.length === length;//Phone number validate variable
  const validateString = (value) => /^[a-zA-Z\s]+$/.test(value);//String validate variable
const validateStep = (step) => {
    let newErrors = {};
    //Switch case is used to validate one by one section
    // Case 0 validates step1
    //Case 1 validates step2
    //Case2 validates step 3
    switch (step) {
       // case 0 validates Step1.js
      case 0:  
        if (!formData.basicDetails.firstName) {
          newErrors.firstName = 'First Name is required';
        } else if (!validateString(formData.basicDetails.firstName)) {
          newErrors.firstName = 'First Name should be a valid string';
        }
        if (!formData.basicDetails.lastName) {
          newErrors.lastName = 'Last Name is required';
        } else if (!validateString(formData.basicDetails.lastName)) {
          newErrors.lastName = 'Last Name should be a valid string';
        }
        if (!formData.basicDetails.email) {
          newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.basicDetails.email)) {
          newErrors.email = 'Email should be in a valid format';
        }
        if (!formData.basicDetails.phoneNumber) {
          newErrors.phoneNumber = 'Phone Number is required';
        } else if (!validateNumber(formData.basicDetails.phoneNumber, 10)) {
          newErrors.phoneNumber = 'Phone Number should be 10 digits long';
        }
        break;
        //case 1 validates Step2.js
      case 1:
        if (!formData.addressDetails.address) {
          newErrors.address = 'Address is required';
        }
        if (!formData.addressDetails.pinCode) {
          newErrors.pinCode = 'Pin Code is required';
        } else if (!validateNumber(formData.addressDetails.pinCode, 6)) {
          newErrors.pinCode = 'Pin Code should be 6 digits long';
        }
        if (!formData.addressDetails.city) {
          newErrors.city = 'City is required';
        } else if (!validateString(formData.addressDetails.city)) {
          newErrors.city = 'City should be a valid string';
        }
        if (!formData.addressDetails.country) {
          newErrors.country = 'Country is required';
        } else if (!validateString(formData.addressDetails.country)) {
          newErrors.country = 'Country should be a valid string';
        }
        break;
        //case 2 validates Step3.js
      case 2:
        if (!formData.companyDetails.designation) {
          newErrors.designation = 'Designation is required';
        } else if (!validateString(formData.companyDetails.designation)) {
          newErrors.designation = 'Designation should be a valid string';
        }
        if (!formData.companyDetails.previousCompany) {
          newErrors.previousCompany = 'Previous Company is required';
        } else if (!validateString(formData.companyDetails.previousCompany)) {
          newErrors.previousCompany = 'Previous Company should be a valid string';
        }
        if (!formData.companyDetails.previousPackage) {
          newErrors.previousPackage = 'Previous Package is required';
        } else if (!validateNumber(formData.companyDetails.previousPackage)) {
          newErrors.previousPackage = 'Previous Package should be numeric';
        }
        if (!formData.companyDetails.expectedPackage) {
          newErrors.expectedPackage = 'Expected Package is required';
        } else if (!validateNumber(formData.companyDetails.expectedPackage)) {
          newErrors.expectedPackage = 'Expected Package should be numeric';
        }
        break;
      default:
        break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
 return (
    <StepContext.Provider value={{ currentStep, setCurrentStep, formData, setFormData, errors, validateStep }}>
      {children}
    </StepContext.Provider>
  );
};
