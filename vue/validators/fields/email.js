import ApiAuth from '@/api/Auth'
import { required, email } from 'vuelidate/lib/validators'

const сyrillic = (value) => {
    return !value.match(/[а-яА-Я]/)
}

export default {
    required,
    email,
    сyrillic,
    unique (email) {
        if (this.$v.email.email && this.$v.email.required) {
            return ApiAuth.checkEmail({email}).catch(error => {
                return error.response.status === 422;
            })
        }
        return true
    }
}