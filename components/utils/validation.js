import validator from 'is_js'

const checkEmpty = (val, key) => {
    if (validator.empty(val.trim())) {
        return `${key}`
    } else {
        return '';
    }
}

const checkMinLength = (val, minLength, key) => {
    if (val.trim().length < minLength) {
        return `Please enter valid ${key}`
    } else {
        return ''
    }
}

export default function (data) {
    const { email, password, username, mobile } = data
    if (username !== undefined) {
        let emptyValidationText = checkEmpty(username, "Please Enter username")
        if (emptyValidationText !== "") {
            return emptyValidationText
        } else {
            let minlengthValidation = checkMinLength(username, 3, "username")
            if (minlengthValidation !== '') {
                return minlengthValidation
            }
        }
    }

    if (email !== undefined) {
        let emptyValidationText = checkEmpty(email, "Please Enter valid email")
        if (emptyValidationText !== "") {
            return emptyValidationText
        } else {
            if (!validator.email(email)) {
                return 'Please Enter valid Email'
            }
        }
    }

    if (password !== undefined) {
        let emptyValidationText = checkEmpty(password, "Please Enter Password")
        if (emptyValidationText !== "") {
            return emptyValidationText
        } else {
            let minlengthValidation = checkMinLength(password, 6, "password")
            if (minlengthValidation !== '') {
                return minlengthValidation
            }
        }
    }

    if (mobile !== undefined) {
        let emptyValidationText = checkEmpty(mobile, "Please Enter mobile number")
        if (emptyValidationText !== "") {
            return emptyValidationText
        } else {
            let minlengthValidation = checkMinLength(mobile, 8, "mobile")
            if (minlengthValidation !== '') {
                return minlengthValidation
            }
        }
    }
}