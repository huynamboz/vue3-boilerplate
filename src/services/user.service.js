import axiosApiInstance from '@/plugins/api'
export const getUsersApi = async () => {
  return await axiosApiInstance.get('/users?limit=20')
}
export const updateUserApi = async (id, data) => {
  delete data.id
  delete data.isEmailVerified
  delete data.balance
  return await axiosApiInstance.patch(`/users/${id}`, data)
}
export const changeBalance = async (userID, balance) => {
  return await axiosApiInstance.patch(`/users/${userID}/change-balance`, { balance: balance })
}

export const getListInformationsApi = async () => {
  return await axiosApiInstance.get('/informations')
}

export const sendInformationApi = async (data) => {
  return await axiosApiInstance.post('/informations', data)
}