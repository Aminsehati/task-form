<template>

    <div class="mb-3">
        <ViveVInput type="text" placeholder="please enter your Username" v-model="userInfo.email" id="username"
            name="username" label="username" readonly />
    </div>
    <div class="mb-3">
        <ViveVInput type="text" placeholder="please enter your Email" v-model="userInfo.email" id="email" name="email"
            label="email" readonly />
    </div>
    <div>
        <ViveVButton type="button" @click="$emit('update:step', 'email')" id="btn-prev">
            Prev
        </ViveVButton>
    </div>
</template>


<script lang="ts" setup>
import { PropType, computed } from 'vue';
import { UserInput } from '@/types/user.type'
import ViveVInput from '@/components/vive/v-input/index.vue'
import ViveVButton from '@/components/vive/v-button/index.vue'

const props = defineProps({
    modelValue: {
        type: Object as PropType<UserInput>,
        default: () => { }
    },
    step: {
        type: String as PropType<'username' | 'email' | 'review'>,
        default: 'submit'
    },
})


const emit = defineEmits(['update:step'])

const userInfo = computed(() => {
    return props.modelValue
})
</script>