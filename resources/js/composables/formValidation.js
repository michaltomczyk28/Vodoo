import {string, ref} from 'yup';
import {computed} from 'vue';

export function useValidation() {
    const emailRules = computed(
        () => string()
            .email('Enter valid email address!')
            .required('This field is required')
    )

    const passwordRules = computed(
        () => string()
            .required('This field is required!')
            .min(8, 'Password must contain at least 8 characters!')
    )

    const requiredRule = computed(
        () => string()
            .required('This field is required!')
    );

    return {emailRules, passwordRules, requiredRule};
}
