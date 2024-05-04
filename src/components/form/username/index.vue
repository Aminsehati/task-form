<template>
    <div>
        <Form @submit="onSubmit">
            <Field v-model="userInfo.username" rules="required" v-slot="{ errors, meta }" name="username"
                ref="usernameForm">
                <ViveVInput type="text" placeholder="please enter your username" v-model="userInfo.username"
                    id="username" name="username" label="usename" :message="errors" />

                <div class="mt-5 text-center">
                    <ViveVButton type="submit" id="btn-next">
                        Next
                    </ViveVButton>
                </div>
            </Field>
        </Form>
    </div>
</template>


<script lang="ts" setup>
import { UserInput } from '@/types/user.type'
import { PropType, computed, ref } from 'vue';
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

const emit = defineEmits(['update:modelValue', 'update:step']);


const usernameForm = ref()

const userInfo = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value);
    }
})


const onSubmit = () => {
    emit('update:step', 'email')
}

</script>