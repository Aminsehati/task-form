<template>
    <div>
        <Form @submit="onSubmit">
            <Field v-model="userInfo.email" rules="required|email" v-slot="{ errors, meta }" name="email">
                <ViveVInput type="text" placeholder="please enter your Email" v-model="userInfo.email" id="email"
                    name="email" label="email" :message="errors" />

                <div class="mt-5 text-center flex gap-x-2 justify-center items-center flex-row-reverse">
                    <ViveVButton type="submit" id="btn-next">
                        Next
                    </ViveVButton>
                    <ViveVButton type="button" @click="$emit('update:step', 'username')" id="btn-prev">
                        Prev
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

const userInfo = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value);
    }
})


const onSubmit = () => {
    emit('update:step', 'review')
}

</script>