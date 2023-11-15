export function isValidPassword(password: string): boolean {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=-]).{8,}$/;
    return passwordRegex.test(password)
}