export class ValidationUtils {
  static formatValidationErrors(errors: any): string {
    return Object.entries(errors)
      .map(([_, message]) => message)
      .join('\n');
  }
}
