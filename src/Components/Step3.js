import React, { useContext } from 'react';
import { TextField } from '@mui/material';
import { StepContext } from '../StepContext';
//Third components contains old designation,previous company and package,expected package 
function Step3() {
  const { formData, setFormData, errors } = useContext(StepContext);

  return (
    <div>
      <div>
        <TextField
          label="Designation"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={formData.companyDetails.designation}
          onChange={(e) => setFormData({ ...formData, companyDetails: { ...formData.companyDetails, designation: e.target.value } })}
          error={!!errors.designation}
          helperText={errors.designation}
        />
      </div>
      <div>
        <TextField
          label="Previous Company"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={formData.companyDetails.previousCompany}
          onChange={(e) => setFormData({ ...formData, companyDetails: { ...formData.companyDetails, previousCompany: e.target.value } })}
          error={!!errors.previousCompany}
          helperText={errors.previousCompany}
        />
      </div>
      <div>
        <TextField
          label="Previous Package"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={formData.companyDetails.previousPackage}
          onChange={(e) => setFormData({ ...formData, companyDetails: { ...formData.companyDetails, previousPackage: e.target.value } })}
          error={!!errors.previousPackage}
          helperText={errors.previousPackage}
        />
      </div>
      <div>
        <TextField
          label="Expected Package"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={formData.companyDetails.expectedPackage}
          onChange={(e) => setFormData({ ...formData, companyDetails: { ...formData.companyDetails, expectedPackage: e.target.value } })}
          error={!!errors.expectedPackage}
          helperText={errors.expectedPackage}
        />
      </div>
    </div>
  );
}

export default Step3;
