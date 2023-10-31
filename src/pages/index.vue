<script setup lang="ts">
</script>

<template>
  <div>
    <div class="flex px-4 justify-center">
      <t-button size="large" theme="primary">
        填充按钮
      </t-button>
      <t-button size="large" theme="light">
        填充按钮
      </t-button>
      <t-button size="large">
        填充按钮
      </t-button>
    </div>
  </div>
</template>

<style scoped lang="css">
.row {
  display: flex;
  padding: 0 16px;
}

.row + .row {
  margin-top: 16px;
}

.t-button + .t-button {
  margin-left: 16px;
}
</style>
