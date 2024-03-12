/* eslint-disable no-useless-escape */
type passwordCondition = {
  value: string;
  condition: boolean;
};

function allAretrue(arr: passwordCondition[]) {
  return arr.every((value) => value.condition === true);
}

function hasUppercase(value: string) {
  return /[A-Z]/.test(value);
}

function hasNumber(value: string): boolean {
  return /[0-9]/.test(value);
}

function hasSpecialCharacter(value: string) {
  const regX = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;
  return regX.test(value);
}

function isValidEmail(email: string) {
  const emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (email !== '' && email.match(emailFormat)) {
    return true;
  }

  return false;
}

function debounce(callback: Function, delay = 500) {
  let timeoutId: NodeJS.Timeout;

  return (...args: any) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(callback.apply(null, args), delay);
  };
}

function throttle(callback: Function, delay = 500) {
  let throttling = false;

  return (...args: any) => {
    if (!throttling) {
      throttling = true;
      callback.apply(null, args);
      setTimeout(() => {
        throttling = false;
      }, delay);
    }
  };
}

export {
  allAretrue,
  debounce,
  hasUppercase,
  hasNumber,
  hasSpecialCharacter,
  isValidEmail,
  throttle,
};
export type { passwordCondition };
