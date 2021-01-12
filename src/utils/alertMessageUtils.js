import { message } from 'antd';

export function successMessage(alertMessage, duration = 3) {
    message.success(alertMessage, duration);
};

export function errorMessage(alertMessage, duration = 3) {
    message.error(alertMessage, duration);
};

export function warningMessage(alertMessage, duration = 3) {
    message.warning(alertMessage, duration);
};

export function infoMessage(alertMessage, duration = 3) {
    message.info(alertMessage, duration);
};
