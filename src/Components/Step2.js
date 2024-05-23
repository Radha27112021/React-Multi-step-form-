import React, { useContext } from 'react';
import { TextField } from '@mui/material';
import { StepContext } from '../StepContext';
//Second component contains only address and pincode city and country
function Step2() {
  const { formData, setFormData, errors } = useContext(StepContext);

  return (
    <div>
      <div>
        <TextField
          label="Permanent Address"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={formData.addressDetails.address}
          onChange={(e) => setFormData({ ...formData, addressDetails: { ...formData.addressDetails, address: e.target.value } })}
          error={!!errors.address}
          helperText={errors.address}
        />
      </div>
      <div>
        <TextField
          label="Pin Code"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={formData.addressDetails.pinCode}
          onChange={(e) => setFormData({ ...formData, addressDetails: { ...formData.addressDetails, pinCode: e.target.value } })}
          error={!!errors.pinCode}
          helperText={errors.pinCode}
        />
      </div>
      <div>
        <TextField
          label="City"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={formData.addressDetails.city}
          onChange={(e) => setFormData({ ...formData, addressDetails: { ...formData.addressDetails, city: e.target.value } })}
          error={!!errors.city}
          helperText={errors.city}
        />
      </div>
      <div>
        <TextField
          label="Country"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={formData.addressDetails.country}
          onChange={(e) => setFormData({ ...formData, addressDetails: { ...formData.addressDetails, country: e.target.value } })}
          error={!!errors.country}
          helperText={errors.country}
        />
      </div>
    </div>
  );
}

export default Step2;
