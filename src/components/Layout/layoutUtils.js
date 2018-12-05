export const formField = [{
  name: 'fullName',
  type: 'input',
  required: true,
  label: 'Name',
  value:''      
},
{
  name: 'dob',
  type: 'date',
  required: false,
  label: 'Date of birth',
  value:''      
},
{
  name: 'mobileNumber',
  type: 'input',
  required: true,
  label: 'Mobile Number',
  value:'',
},
{
  name: 'homeNumber',
  type: 'input',
  required: true,
  label: 'Home Number',
  value:'',
},
{
  name: 'gender',
  type: 'select',
  required: true,
  label: 'Select Gender',
  value:'Select',
  options:['Select','Male', 'Female']
},
{
  name: 'guardianName',
  type: 'input',
  required: true,
  label: 'Guardian Name',
  value:'',
},
{
  name: 'guardianContact',
  type: 'input',
  required: true,
  label: 'Guardian Contact Number',
  value:'',
}
]