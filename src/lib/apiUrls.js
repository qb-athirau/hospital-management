const mockApi = process.env.REACT_APP_MOCK_API_URL;
const mockApiUrl = process.env.REACT_APP_MOCK_API;
const Api = {
  patientRegistrationApi: `${mockApi}api/v1/register`,
  loginApi: `${mockApi}api/v1/login`,
  newsfeedApi: `${mockApi}api/v1/newsfeed`,
  authtokenApi: `${mockApi}api/v1/auth_token`,
  // departmentsApi: `${process.env.REACT_APP_MOCK_API}my/api/departments`,
  departmentsApi: `${mockApiUrl}departments`,
  doctorsApi: `${mockApiUrl}doctors`,
  appoinntmentsApi: `${mockApiUrl}appointments`,
};
export default Api;
