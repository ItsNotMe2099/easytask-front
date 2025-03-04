import { FieldValidator } from 'formik/dist/types'

export default class Validator {
  
  static emailRe = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

  static combine(validators: FieldValidator[]): FieldValidator {
    return (value: any) => {
      for (let i = 0; i < validators.length; i++) {
        const err = validators[i](value)
        if (err) {
          return err
        }
      }
      return undefined
    }
  }

  static required(value: string | number): string | undefined {
    return value || typeof value === 'number' ? undefined : 'required'
  }

  static email(value: string): string | undefined {
    return value && !Validator.emailRe.test(value)
      ? 'email'
      : undefined
  }

  static passwordsMustMatch = (allValues: any) => (value: string): string | undefined => {
    return value !== allValues.password ? 'form_field_validation_password_match' : undefined
  }

}
