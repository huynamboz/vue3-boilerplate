<template>
  <div class="px-5 py-5">
    <div class="bg-white rounded-[10px] p-2">
      <table>
        <tr>
          <th>ID</th>
          <th>TÊN</th>
          <th>EMAIL</th>
          <th>ROLE</th>
          <th>SỐ DƯ</th>
        </tr>
        <tr v-for="user in users" :key="user.id" @click="userChoosed = user">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.role }}</td>
          <td>{{ user.balance }}</td>
        </tr>
      </table>
    </div>
  </div>
  <PopupDetailUser v-if="userChoosed" :user="userChoosed" @close="closePopupDetailUser" @updateUser="updateUser" />
</template>
<script setup>
import { ref, onBeforeMount } from 'vue'
import PopupDetailUser from '@/components/Users/PopupDetailUser.vue'
import { getUsersApi, updateUserApi } from '@/services/user.service'
import { useNotification } from '@kyvg/vue3-notification'

const notification = useNotification()

const users = ref([])
onBeforeMount(() => {
  fetchUsers()
})
const fetchUsers = async () => {
  try {
    await getUsersApi().then((res) => {
      users.value = res['data']['data']
    })
  } catch (error) {
    console.log(error)
  }
}
const userChoosed = ref(null)
const closePopupDetailUser = () => {
  userChoosed.value = null
}
const updateUser = async (user) => {
  const index = users.value.findIndex((item) => item.id === user.id)
  await updateUserApi(user.id, {
    name: user.name,
    email: user.email,
    role: user.role,
  })
    .then((res) => {
      users.value[index] = res['data']
    })
    .catch((error) => {
      if (error.code == 'ERR_BAD_REQUEST') {
        notification.notify({
          type: 'error',
          title: 'Cập nhật thông tin lỗi',
          text: error.response.data.message,
        })
      }
    })
  userChoosed.value = null
}
</script>
<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}
td {
  text-align: left;

  padding: 8px;
}
th {
  text-align: left;
  padding: 10px 8px;
  font-weight: 500;
}
td:nth-child(1),
th:nth-child(1) {
  padding-left: 20px;
  max-width: 240px;
}
tr:nth-child(1) {
  border-bottom: 1px solid #f2f3f4;

  color: var(--c-blue-dark);
}

tr:hover {
  background: #ececec;
  transition: 0.1s ease-in-out;
  cursor: pointer;
}
</style>
