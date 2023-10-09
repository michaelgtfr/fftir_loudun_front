export let modalMixin = {
  methods: {
    /**
     * Page requested
     * @param {integer} page
     */
    pageSelected(page) {
      this.page = page
    },
    /**
     * Close the modal of bootstrap display
     */
    closeModal() {
      this.errorValidationForm = null

      document.getElementById('Modal').style.display = 'none'
      document.getElementsByClassName('modal-open')[0].style = {}
      document.getElementsByClassName('modal-open')[0].className = ''
      document.getElementsByClassName('modal-backdrop')[0].remove()
    },
    /**
     * Send errors message per component
     * @param {string} component
     */
    getError(component) {
      if (this.errorValidationForm?.error) {
        return this.errorValidationForm.error.find((error) => error.field === component)?.message
      }
      return ''
    },
    /**
     * Gives a class specific to whether it has an error message or not
     * @param {string} component
     */
    getInputStyle(component) {
      if (this.showValidationForm) {
        const errorFormTheComponent = this.errorValidationForm?.error.find(
          (error) => error.field === component
        )

        if (errorFormTheComponent) {
          return 'is-invalid'
        }
        return 'is-valid'
      }
    }
  }
}
