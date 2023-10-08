<template>
  <div>
    <div class="text-center">
      <button
        type="submit"
        class="btn btn-warning m-2"
        @click="openModal"
        data-bs-toggle="modal"
        data-bs-target="#Modal"
      >
        {{ textButton }}
      </button>
    </div>

    <!-- model of creation of tag-->
    <div class="modal" id="Modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ titleForCreationOrUpdate }}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="save()">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: `modal`,
  props: {
    titleForCreationOrUpdate: {
      type: String,
      default: ``
    },
    textButton: {
      type: String,
      default: `create new element`
    }
  },
  methods: {
    save() {
      this.$emit('save')
    },
    openModal() {
      this.$emit('openModal')
    }
  }
}
</script>
