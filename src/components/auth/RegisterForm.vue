<script>
	export default {
		name: 'RegisterForm',
		data() {
			return {
				registerData: {
					email: null,
					name: null,
				}
			}
		},
		methods: {
			validate () {
				console.log()
				this.$validator.validateAll()
				.then((result) => {
					if(result) {
						console.log('Form submitted!')
					}
				})
			},
			clear () {
				this.registerData.email = null;
				this.registerData.name = null
			}
		}
	}
</script>

<template>
	<form @submit.prevent="validate()">
		<form-group label="Enter your email">
			<form-input
				slot="input" name="email" v-model="registerData.email" v-validate="'required|email'"
				:class="{'form-control': true, 'is-invalid': errors.has('email') }"
				type="text" placeholder="Email" />
				<div slot="error-text" v-show="errors.has('email')" class="invalid-feedback">
					{{ errors.first('email') }}
				</div>
		</form-group>
		<form-group label="Enter your fullname">
			<form-input
				slot="input" name="name" v-model="registerData.name" v-validate="'required|alpha'"
				:class="{'form-control': true, 'is-invalid': errors.has('name') }"
				type="text" placeholder="Name" />
				<div slot="error-text" v-show="errors.has('name')" class="invalid-feedback">
					{{ errors.first('name') }}
				</div>
		</form-group>
		<form-group label="Enter your Password">
			<form-input
				slot="input" name="password" v-model="registerData.password" v-validate="'required'"
				:class="{'form-control': true, 'is-invalid': errors.has('password') }"
				type="password" placeholder="Password" />
				<div slot="error-text" v-show="errors.has('password')" class="invalid-feedback">
					{{ errors.first('password') }}
				</div>
		</form-group>
		<button type="button" @click="clear" class="btn btn-link">clear</button>
		<button type="submit" class="btn btn-secondary" :disabled="errors.any()">Submit</button>
	</form>
</template>