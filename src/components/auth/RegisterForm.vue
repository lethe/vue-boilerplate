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
		computed: {

		},
		created() {
			
		}
	}
</script>

<template>
	<form @submit.prevent="validate">
		<form-group>
			<input 
				slot="input" name="email" v-model="email" v-validate="'required|email'"
				:class="{'form-control': true, 'is-danger': errors.has('email') }"
				type="text" placeholder="Email"/>
				<i v-show="errors.has('email')" class="fa fa-warning"></i>
				<div slot="error-text" v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</div>
		</form-group>
	</form>
</template>