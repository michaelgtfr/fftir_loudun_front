<template>
  <div class="mt-3 dynamic-table">
    <h2 class="text-center mt-3 mb-2 p-5">{{ title }}</h2>
    <p class="dynamic-table__explanation">{{ explanation }}</p>
    <!-- Table part with a list of tag -->
    <table class="table table-striped mb-0">
      <thead>
        <tr>
          <td v-for="(header, index) in headers" :key="index" scope="col">{{ header.name }}</td>
          <td scope="col">COMMANDES</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="line in lines" :key="line.id">
          <td v-for="(header, index) in headers" :key="index">
            <div v-if="header?.slot">
              <slot :header="header" :line="line"></slot>
            </div>
            <div v-else>
              {{ getCell(header.attribute, line) }}
            </div>
          </td>

          <!-- Button for delete and update the tag -->
          <td class="text-center">
            <button
              type="button"
              class="btn btn-warning me-1"
              data-bs-toggle="modal"
              data-bs-target="#Modal"
              @click="updateLines(line.id)"
            >
              update
            </button>
            <button type="button" class="btn btn-danger" @click="deleteLines(line.id)">
              delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: `dynamicTable`,
  props: {
    title: {
      type: String,
      required: false
    },
    explanation: {
      type: String,
      required: false
    },
    headers: {
      type: Array,
      required: true
    },
    lines: {
      type: Array,
      required: true
    }
  },
  methods: {
    updateLines(id) {
      this.$emit('update', id)
    },
    deleteLines(id) {
      this.$emit('delete', id)
    },
    getCell(header, line) {
      return line[header] || ``
    },
    isSlot(header) {
      return this.slots.includes(header)
    }
  }
}
</script>
