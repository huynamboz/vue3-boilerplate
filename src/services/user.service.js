import axiosApiInstance from '@/plugins/api'
export const getUsersApi = async () => {
  return await axiosApiInstance.get('/users?limit=100')
}
export const updateUserApi = async (id, data) => {
  delete data.id
  delete data.isEmailVerified
  delete data.balance
  return await axiosApiInstance.patch(`/users/${id}`, data)
}
export const changeBalance = async (userID, balance, type) => {
  return await axiosApiInstance.patch(`/users/${userID}/change-balance`, { balance, type })
}

export const getListInformationsApi = async () => {
  return await axiosApiInstance.get('/informations?limit=100')
}

export const sendInformationApi = async (data) => {
  return await axiosApiInstance.post('/informations', data)
}

export const deleteUserApi = async (id) => {
  return await axiosApiInstance.delete(`/users/${id}`)
}
