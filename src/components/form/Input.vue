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
	    },
	    data () {
			return {
				inputValue: this.value
			}
		},
		methods: {
			updateValues () {
				this.$emit('input', this.inputValue)
			}
		},
		watch: {
			value (val) {
				this.inputValue = val
			},
			inputValue (val, oldVal) {
				if(val !== oldVal) {
					this.updateValues()
				}
			}
		}
	}
</script>
<template>
	<input 
		:type="type"
		:name="name"
		:placeholder="placeholder"
		v-model="inputValue"
		class="form-control">
</template>