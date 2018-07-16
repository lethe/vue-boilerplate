<script>
	export default {
		name: 'LoginForm',
		data() {
			return {
				loginData: {
					email: null,
					password: null,
				}
			}
		},
		methods: {
			validate() {
				console.log()
				this.$validator.validateAll()
				.then((result) => {
					if(result) {
						console.log('Form submitted!')
					}
				})
			},
			clear () {
				this.loginData.email = null;
				this.loginData.password = null
			}
		}
	}
</script>

<template>
	<form @submit.prevent="validate">
		<form-group label="Enter your email">
			<form-input
				slot="input" name="email" v-model="loginData.email" v-validate="'required|email'"
				:class="{'form-control': true, 'is-invalid': errors.has('email') }"
				type="text" placeholder="Email" />
				<div slot="error-text" v-show="errors.has('email')" class="invalid-feedback">
					{{ errors.first('email') }}
				</div>
		</form-group>
		<form-group label="Enter your Password">
			<form-input
				slot="input" name="password" v-model="loginData.password" v-validate="'required'"
				:class="{'form-control': true, 'is-invalid': errors.has('password') }"
				type="password" placeholder="Password" />
				<div slot="error-text" v-show="errors.has('password')" class="invalid-feedback">
					{{ errors.first('password') }}
				</div>
		</form-group>
		<button type="submit" class="btn btn-secondary" :disabled="errors.any()">Login</button>
	</form>
</template>