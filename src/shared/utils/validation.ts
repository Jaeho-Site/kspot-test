// 이메일 유효성 검사
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// 비밀번호 유효성 검사 (8자 이상, 영문+숫자 포함)
export function isValidPassword(password: string): boolean {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
  return passwordRegex.test(password);
}

// 닉네임 유효성 검사 (2-20자, 한글/영문/숫자)
export function isValidNickname(nickname: string): boolean {
  const nicknameRegex = /^[가-힣a-zA-Z0-9]{2,20}$/;
  return nicknameRegex.test(nickname);
}

// 폼 검증 헬퍼
export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateLoginForm(
  email: string,
  password: string
): ValidationResult {
  const errors: Record<string, string> = {};

  if (!email) {
    errors.email = "이메일을 입력해주세요.";
  } else if (!isValidEmail(email)) {
    errors.email = "올바른 이메일 형식이 아닙니다.";
  }

  if (!password) {
    errors.password = "비밀번호를 입력해주세요.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateSignupForm(
  email: string,
  password: string,
  confirmPassword: string,
  nickname: string
): ValidationResult {
  const errors: Record<string, string> = {};

  if (!email) {
    errors.email = "이메일을 입력해주세요.";
  } else if (!isValidEmail(email)) {
    errors.email = "올바른 이메일 형식이 아닙니다.";
  }

  if (!password) {
    errors.password = "비밀번호를 입력해주세요.";
  } else if (!isValidPassword(password)) {
    errors.password = "비밀번호는 8자 이상, 영문과 숫자를 포함해야 합니다.";
  }

  if (!confirmPassword) {
    errors.confirmPassword = "비밀번호 확인을 입력해주세요.";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "비밀번호가 일치하지 않습니다.";
  }

  if (!nickname) {
    errors.nickname = "닉네임을 입력해주세요.";
  } else if (!isValidNickname(nickname)) {
    errors.nickname = "닉네임은 2-20자의 한글, 영문, 숫자만 가능합니다.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
