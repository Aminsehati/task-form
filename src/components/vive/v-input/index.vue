<template>
    <div>
        <label for="inputname" class="block text-gray-800 font-semibold text-sm">
            {{
                label }}
        </label>
        <div class="mt-2">
            <input :type="type" :readonly="readonly" :name="name" :class="['block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800', {

            }]" :value="modelValue" @input="chnageValue" />
        </div>
        <label class="pt-1 block text-rose-500 text-sm" v-if="message && message.length">
            {{
                message[0] }}
        </label>
    </div>

</template>

<script setup lang="ts">
const props = defineProps({
    type: {
        type: String,
        default: 'text'
    },
    name: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: ""
    },
    modelValue: {
        type: String,
        default: ''
    },
    id: {
        type: String
    },
    label: {
        type: String
    },
    message: {
        type: Array,
        default: []
    },
    readonly: {
        type: Boolean,
        default: false
    }
})
const emit = defineEmits(['update:modelValue'])

const chnageValue = (e: any) => {
    const { value } = e.target
    emit('update:modelValue', value)
}

</script>