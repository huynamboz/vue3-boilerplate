<template>
  <div class="px-5 py-5">
    <p class="font-bold text-xl">Tài khoản</p>
    <div class="box-shadow-custom bg-white rounded-[20px] p-4 mt-5">
      <h1 class="text-lg font-semibold ml-5">Người dùng hệ thống</h1>
      <table class="mt-5">
        <tr>
          <th>TÊN</th>
          <th>ĐĂNG KÝ</th>
          <th>NGÀY ĐĂNG KÝ</th>
          <th>ROLE</th>
          <th>SỐ DƯ</th>
          <th class="max-w-[100px] w-[100px]">HÀNH ĐỘNG</th>
        </tr>
        <tr v-for="user in users" :key="user.id" @click="openDetailUser(user)">
          <td>
            <div class="flex gap-2">
              <img v-if="user.avatar" class="w-10 h-10 rounded-xl object-cover" :src="user.avatar" alt="avatar" />
              <img
                v-else
                class="w-10 h-10 rounded-xl object-cover"
                src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/team-2.jpg"
                alt=""
              />
              <div class="flex flex-col">
                <p>{{ user.name }}</p>
                <p>{{ user.email }}</p>
              </div>
            </div>
          </td>
          <td>{{ user.provider }}</td>
          <td>{{ user.createdAt }}</td>
          <td>
            <div
              :class="{
                'bg-[#14c661] text-white text-center rounded-md': user.role == 'ADMIN',
                'bg-[#47bafd] text-white text-center rounded-md': user.role == 'USER',
              }"
            >
              {{ user.role }}
            </div>
          </td>
          <td>
            <div class="flex gap-2">
              <p>{{ formatPrice(user.balance) }}</p>
              <p class="text-[#fc5144]" @click.stop="openChangeBalance(user)">Nạp tiền</p>
            </div>
          </td>
          <td>
            <div class="flex gap-2 font-semibold">
              <p class="text-[#00b14d]" @click.stop="">Xóa</p>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
  <PopupDetailUser
    v-if="modal.PopupDetail"
    :user="userChoosed"
    @close="closePopupDetailUser"
    @updateUser="updateUser"
  />
  <PopupNapTien
    v-if="modal.PopupChangeBalance"
    :user="userChoosed"
    @update="updateUserBalance"
    @close="closeChangeBalance"
  />
</template>
<script setup>
import { ref, onBeforeMount } from 'vue'
import PopupDetailUser from '@/components/Users/PopupDetailUser.vue'
import { getUsersApi, updateUserApi } from '@/services/user.service'
import { useNotification } from '@kyvg/vue3-notification'
import PopupNapTien from '@/components/UI/Card/PopupNapTien.vue'
import { formatPrice } from '@/utils/formatPrice'
const notification = useNotification()

const users = ref([])
const meta = ref(null)
onBeforeMount(() => {
  fetchUsers()
})

const modal = ref({
  PopupDetail: false,
  PopupChangeBalance: false,
})

const updateUserBalance = (user) => {
  const index = users.value.findIndex((i) => i.id == user.id)
  console.log(index, user)
  if (index != -1) {
    users.value[index].balance = user.balance
  }
  userChoosed.value = null
  modal.value.PopupChangeBalance = false
}
const closeChangeBalance = () => {
  modal.value.PopupChangeBalance = false
  userChoosed.value = null
}
const openChangeBalance = (user) => {
  modal.value.PopupChangeBalance = true
  userChoosed.value = user
}
const fetchUsers = async () => {
  try {
    console.log('fetching users')
    await getUsersApi().then((res) => {
      users.value = res['data']['data']
      meta.value = res['data']['meta']
    })
  } catch (error) {
    console.log(error)
  }
}

const openDetailUser = (user) => {
  userChoosed.value = user
  modal.value.PopupDetail = true
}
const userChoosed = ref(null)
const closePopupDetailUser = () => {
  userChoosed.value = null
  modal.value.PopupDetail = false
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
      notification.notify({
        type: 'success',
        title: 'Cập nhật thông tin thành công',
        text: 'Cập nhật thông tin thành công',
      })
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
  font-weight: 600;
  color: rgb(131 146 171);
}
td {
  border-bottom: 0.5px solid #f2f3f4;
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
