import React, { useContext } from 'react';
import { TextField } from '@mui/material';
import { StepContext } from '../StepContext';
// First Component contains Name ,email and phone number
function Step1() {
  const { formData, setFormData, errors } = useContext(StepContext);

  return (
    <div>
      <div>
        <TextField
          label="First Name"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={formData.basicDetails.firstName}
          onChange={(e) => setFormData({ ...formData, basicDetails: { ...formData.basicDetails, firstName: e.target.value } })}
          error={!!errors.firstName}
          helperText={errors.firstName}
        />
      </div>
      <div>
        <TextField
          label="Last Name"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={formData.basicDetails.lastName}
          onChange={(e) => setFormData({ ...formData, basicDetails: { ...formData.basicDetails, lastName: e.target.value } })}
          error={!!errors.lastName}
          helperText={errors.lastName}
        />
      </div>
      <div>
        <TextField
          label="Email"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={formData.basicDetails.email}
          onChange={(e) => setFormData({ ...formData, basicDetails: { ...formData.basicDetails, email: e.target.value } })}
          error={!!errors.email}
          helperText={errors.email}
        />
      </div>
      <div>
        <TextField
          label="Phone Number"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={formData.basicDetails.phoneNumber}
          onChange={(e) => setFormData({ ...formData, basicDetails: { ...formData.basicDetails, phoneNumber: e.target.value } })}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber}
        />
      </div>
    </div>
  );
}

export default Step1;
