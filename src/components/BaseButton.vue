<template>
    <button :disabled="buttonDisabled" :style="buttonStyle" ><slot></slot></button>
</template>

<script>
export default {
    name: 'BaseButton',
    props: {
        color: {
            type: String,
            default: 'primary',
            validator: function (value) {
                return ['primary', 'warn', 'danger'].includes(value);
            }
        },
        disable: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        buttonStyle: function () {
            if (this.color === 'warn') {
                return {
                    backgroundColor: '#e6a23c',
                    '--hoverColor': '#e2b674'
                }
            } else if (this.color === 'danger') {
                return {
                    backgroundColor: '#ea3a3a',
                    '--hoverColor': '#f56c6c'
                }
            } else {
                return {
                    backgroundColor: '#28b682',
                    '--hoverColor': '#30cb92'
                }
            }
        },
        buttonDisabled: function() {
            console.log(this.disable);
            return this.disable;
        }
    }
}

</script>

<style scoped>
button {
    color: white;
    border: none;
    border-radius: 5px;
    padding: 7px;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
    margin: 10px;
    font-size: medium;
    transition: background-color 0.6s;
}

button:hover {
    background-color: var(--hoverColor) !important;
    transition: background-color 0.4s;
}

button:disabled {
    background-color: #c0c0c0 !important;
    cursor: not-allowed;
}

</style>