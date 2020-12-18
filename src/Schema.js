import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters'),

    size: yup.string()
        .oneOf(['small','medium','large','xl'], 'Size Required'),
  
    fetta: yup.boolean(),
    peppers: yup.boolean(),
    tomato: yup.boolean(),
    spinach: yup.boolean(),
    special: yup.string()
})