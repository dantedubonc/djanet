<template>
  <form id="contact-form" class="form-horizontal">
    <div class="col-xs-12 col-md-6">
      <div class="form-group">
        <label for="company" class="col-sm-3 control-label"
          >{{$t('form.Enterprise')}}<sup class="text-req"> * </sup></label
        >
        <div class="col-sm-9" data-children-count="1">
          <input
            id="company"
            name="company"
            type="text"
            value=""
            required="required"
            class="form-control"
            data-kwimpalastatus="alive"
            data-kwimpalaid="1586376103791-0"
          />
        </div>
      </div>

      <div class="form-group">
        <label for="firstname" class="col-sm-3 control-label"
          >{{$t('form.Name')}}<sup class="text-req"> * </sup></label
        >
        <div class="col-sm-9" data-children-count="1">
          <input
            id="firstname"
            name="firstname"
            type="text"
            value=""
            required="required"
            class="form-control"
            data-kwimpalastatus="alive"
            data-kwimpalaid="1586376103791-1"
          />
        </div>
      </div>

      <div class="form-group">
        <label for="lastname" class="col-sm-3 control-label"
          >{{$t('form.Surname')}}<sup class="text-req"> * </sup></label
        >
        <div class="col-sm-9" data-children-count="1">
          <input
            id="lastname"
            name="lastname"
            type="text"
            value=""
            required="required"
            class="form-control"
            data-kwimpalastatus="alive"
            data-kwimpalaid="1586376103791-2"
          />
        </div>
      </div>

      <div class="form-group">
        <label for="city" class="col-sm-3 control-label"
          >{{$t('form.City')}}<sup class="text-req"> * </sup></label
        >
        <div class="col-sm-9" data-children-count="1">
          <input
            id="city"
            name="city"
            type="text"
            value=""
            required="required"
            class="form-control"
            data-kwimpalastatus="alive"
            data-kwimpalaid="1586376103791-3"
          />
        </div>
      </div>

      <div class="form-group">
        <label for="country" class="col-sm-3 control-label"
          >{{$t('form.Country')}}<sup class="text-req"> * </sup></label
        >
        <div class="col-sm-9" data-children-count="1">
          <input
            id="country"
            name="country"
            type="text"
            value=""
            required="required"
            class="form-control"
            data-kwimpalastatus="alive"
            data-kwimpalaid="1586376103791-4"
          />
        </div>
      </div>

      <div class="form-group">
        <label for="user-email" class="col-sm-3 control-label"
          >{{$t('form.Email')}}<sup class="text-req"> * </sup></label
        >
        <div class="col-sm-9" data-children-count="1">
          <input
            id="user-email"
            name="user-email"
            type="text"
            value=""
            required="required"
            class="form-control"
            data-kwimpalastatus="alive"
            data-kwimpalaid="1586376103791-5"
          />
        </div>
      </div>

      <div class="form-group">
        <label for="phone" class="col-sm-3 control-label"
          >{{$t('form.Phone')}}<sup class="text-req"> * </sup></label
        >
        <div class="col-sm-9" data-children-count="1">
          <input
            id="phone"
            name="phone"
            type="text"
            value=""
            required="required"
            class="form-control"
            data-kwimpalastatus="alive"
            data-kwimpalaid="1586376103791-6"
          />
        </div>
      </div>
    </div>

    <div class="col-xs-12 col-md-6">
      <div class="form-group" data-children-count="1">
        <textarea
          id="message"
          name="message"
          :placeholder="$t('form.Question')"
          rows="3"
          required="required"
          class="form-control"
        ></textarea>
      </div>
    </div>
  </form>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  data() {
    return {
      form: {
        Name: '',
        Surname: '',
        Enterprise: '',
        City: '',
        Country: '',
        Email: '',
        Phone: '',
        Cuestion: ''
      }
    }
  }
}
</script>
