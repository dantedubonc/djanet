<template>
  <b-form @submit.stop.prevent="onSubmit" id="form" class="form-horizontal">
    <div class="col-xs-12 col-md-6">
      <b-form-group id="input-group-enterprise">
        <label for="enterprise" class="col-sm-3 control-label"
          >{{ $t('form.Enterprise') }}<sup class="text-req"> * </sup></label
        >
        <b-form-input
          id="enterprise"
          class="col-sm-9"
          v-model="$v.form.Enterprise.$model"
          :state="validateState('Enterprise')"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-name">
        <label for="name" class="col-sm-3 control-label"
          >{{ $t('form.Name') }}<sup class="text-req"> * </sup></label
        >
        <b-form-input
          id="name"
          class="col-sm-9"
          v-model="$v.form.Name.$model"
          :state="validateState('Name')"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-Surname">
        <label for="surname" class="col-sm-3 control-label"
          >{{ $t('form.Surname') }}<sup class="text-req"> * </sup></label
        >
        <b-form-input
          id="surname"
          class="col-sm-9"
          v-model="$v.form.Surname.$model"
          :state="validateState('Surname')"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-city">
        <label for="city" class="col-sm-3 control-label"
          >{{ $t('form.City') }}<sup class="text-req"> * </sup></label
        >
        <b-form-input
          id="city"
          class="col-sm-9"
          v-model="$v.form.City.$model"
          :state="validateState('City')"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-country">
        <label for="country" class="col-sm-3 control-label"
          >{{ $t('form.Country') }}<sup class="text-req"> * </sup></label
        >
        <b-form-select
          id="country"
          class="col-sm-9 form-control"
          v-model="$v.form.Country.$model"
          :options="countries"
          :state="validateState('Country')"
        />
      </b-form-group>

      <b-form-group id="input-group-email">
        <label for="email" class="col-sm-3 control-label"
          >{{ $t('form.Email') }}<sup class="text-req"> * </sup></label
        >
        <b-form-input
          class="col-sm-9"
          id="email"
          v-model="$v.form.Email.$model"
          :state="validateState('Email')"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-phone">
        <label for="phone" class="col-sm-3 control-label"
          >{{ $t('form.Phone') }}<sup class="text-req"> * </sup></label
        >
        <b-form-input
          class="col-sm-9"
          id="phone"
          v-model="$v.form.Phone.$model"
          :state="validateState('Phone')"
        ></b-form-input>
      </b-form-group>
    </div>

    <div class="col-xs-12 col-md-6">
      <b-form-group id="input-group-question" class="col-sm-12">
        <b-form-textarea
          id="question"
          name="question"
          :placeholder="$t('form.Question')"
          v-model="$v.form.Question.$model"
          :state="validateState('Question')"
        ></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="primary">{{
        $t('form.SubmitButton')
      }}</b-button>
    </div>
  </b-form>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, email, minLength } from 'vuelidate/lib/validators'

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
        Question: ''
      }
    }
  },
  computed: {
    countries: function() {
      const localeCountries = Object.values(
        this.$countries.getNames(this.$i18n.locale)
      )
      return localeCountries.map(country => {
        return {
          value: country,
          text: country
        }
      })
    }
  },
  validations: {
    form: {
      Name: {
        required,
        minLength: minLength(1)
      },
      Surname: {
        required,
        minLength: minLength(1)
      },
      Enterprise: {
        required,
        minLength: minLength(1)
      },
      City: {
        required,
        minLength: minLength(1)
      },
      Country: {
        required,
        minLength: minLength(1)
      },
      Email: {
        required,
        email
      },
      Phone: {
        required,
        minLength: minLength(1)
      },
      Question: {
        required,
        minLength: minLength(1)
      }
    }
  },
  async mounted() {
    await this.$recaptcha.init()
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name]
      return $dirty ? !$error : null
    },

    async onSubmit() {
      this.$v.form.$touch()
      if (this.$v.form.$anyError) {
        return
      }

      try {
        const token = await this.$recaptcha.execute('login')

        const formData = {
          ...this.form,
          recaptchaToken: token,
          Locale: this.$i18n.locale.toUpperCase()
        }

        console.log(process.env.API)
        await this.$axios.$post(process.env.API, formData)
        console.log(token)
        console.log(this.$i18n.locale)
      } catch (error) {
        console.log('Login error:', error)
      }
    }
  }
}
</script>
