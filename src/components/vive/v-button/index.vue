<template>
    <button class="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" :type="type" @click="onClick" :id="id">
        <slot />
    </button>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';

const props = defineProps({
    type: {
        type: String as PropType<'button' | 'submit' | 'reset'>,
        default: 'submit'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    id: {
        type: String,
        default: ""
    }
})

const emit = defineEmits(['click'])

const onClick = (e: MouseEvent) => {
    if (props.type === 'submit') return
    e.preventDefault();
    emit('click')
}
</script>