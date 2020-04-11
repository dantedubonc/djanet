<template>
  <b-modal  id="confirmModal" ref="confirmModal" hide-footer>
    <img
      class="modal-icon d-block mx-auto"
      src="~assets/confirm.svg"
      alt="Confirmación"
    />
    <p class="text-description">
      {{ $t('Modal.ConfirmationMessageTitle') }}
    </p>
    <p class="card-description">{{ $t('Modal.ConfirmationMessageContent') }}</p>
      
    <div class="modal-footer">
      <b-button class="btn btn-primary" @click="hideModal">Ok</b-button>      
    </div>
  </b-modal>
</template>
<script>
import { BModal, BButton } from 'bootstrap-vue'
export default {
  name: 'ConfirmModal',
  components: {
    BModal,
    BButton
  },
  
  methods: {
    hideModal: function() {
         this.$refs['confirmModal'].hide()
    }
  }
}
</script>
