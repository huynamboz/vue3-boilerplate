<script>
export default {
  props: {
    meta: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toPage(val) {
      this.$emit('changePage', val)
    },
  },
}
</script>
<template>
  <div v-if="meta" class="pagination-container">
    <p style="margin-right: 15px">Page {{ meta.current_page }}/{{ meta.total_pages }}</p>
    <div v-if="meta.current_page - 1 > 0 && meta.current_page != 1" class="page" @click="toPage(meta.current_page - 1)">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="m10.8 12l3.9 3.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.212-.325T8.425 12q0-.2.063-.375T8.7 11.3l4.6-4.6q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L10.8 12Z"
        />
      </svg>
    </div>
    <div v-if="meta.prev_page - 1 > 0" class="page" @click="toPage(meta.prev_page - 1)">
      {{ meta.prev_page - 1 }}
    </div>
    <div v-if="meta.prev_page != meta.current_page" class="page" @click="toPage(meta.prev_page)">
      {{ meta.prev_page }}
    </div>
    <div class="page active">
      {{ meta.current_page }}
    </div>
    <div v-if="meta.next_page != meta.current_page" class="page" @click="toPage(meta.next_page)">
      {{ meta.next_page }}
    </div>
    <div v-if="meta.next_page + 1 <= meta.total_pages" class="page" @click="toPage(meta.next_page + 1)">
      {{ meta.next_page + 1 }}
    </div>
    <div v-if="meta.current_page + 1 <= meta.total_pages" class="page" @click="toPage(meta.current_page + 1)">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12.6 12L8.7 8.1q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.6 4.6q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l3.9-3.9Z"
        />
      </svg>
    </div>
  </div>
</template>
<style scoped>
.pagination-container {
  display: flex;
  gap: 5px;
  align-items: center;
}
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.page:hover {
  background: #f5f6f7;
  transition: 0.2s;
  cursor: pointer;
}
.active {
  background: var(--primary-blue) !important;
  border-radius: 50%;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  color: #fff;
}
</style>
