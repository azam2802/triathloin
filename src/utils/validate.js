import validateRules from './validateRules';

export const validate = (data, config) => {
    const errors = {};
    
    for (const fieldName in data) {
        const validationRules = config[fieldName];
        for (const rule in validationRules) {
            const { message, param } = validationRules[rule];
            const validator = validateRules[rule];
            const hasError = validator && !validator(data[fieldName], param)

            if(hasError && !errors[fieldName]) {
                errors[fieldName] = message;
                break;
            }
        }
    }

    return errors;
}

export const formatPhoneNumber = (inputValue) => {
    const formattedPhoneNumber = inputValue.replace(/\D/g, '');
    let maskedPhoneNumber = '+';
    if (formattedPhoneNumber.length > 0) {
        maskedPhoneNumber += 996;
    }
    if (formattedPhoneNumber.length > 3) {
        maskedPhoneNumber += `(${formattedPhoneNumber.substring(3, 6)})`;
    }
    if (formattedPhoneNumber.length > 6) {
        maskedPhoneNumber += ` ${formattedPhoneNumber.substring(6, 9)}`;
    }
    if (formattedPhoneNumber.length > 9) {
        maskedPhoneNumber += `-${formattedPhoneNumber.substring(9, 12)}`;
    }
    return maskedPhoneNumber;
};

export const validateForm = (name, question, phoneNumber, email, setErrors) => {
    let formErrors = {};

    if (!name) {
        formErrors.name = 'Введите ваше имя';
    }
    if (!question) {
        formErrors.description = 'Введите краткое описание';
    }
    if (!email) {
        formErrors.email = 'Введите Email';
    }
    if (!phoneNumber) {
        formErrors.phoneNumber = 'Введите ваш номер';
    } else if (phoneNumber.length <= 16) {
        formErrors.phoneNumber = 'Введите телефон полностью';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
};