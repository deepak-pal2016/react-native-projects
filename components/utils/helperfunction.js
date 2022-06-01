import { showMessage } from 'react-native-flash-message';

const showError = (message) => {
    showMessage({
        type: 'danger',
        icon: 'danger',
        message,
        titleStyle: { fontSize: 13, fontWeight: 'bold' }
    })
}

const showSuccess = (message) => {
    showMessage({
        type: 'success',
        icon: 'success',
        message
    })
}

export {
    showError,
    showSuccess
}