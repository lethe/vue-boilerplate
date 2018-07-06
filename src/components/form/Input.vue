<script>
	export default {
		props: {
			name: null,
			placeholder: null,
			value: {},
			type: {
				type: String,
				default: 'text'
			}
	    }
	}
</script>
<template>
	<input 
		:type="type"
		:name="name"
		:placeholder="placeholder"
		v-validate="v-validate"
		class="form-control">
</template>