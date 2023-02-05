
export interface InputProps {
    type: 'text' | 'radio' | 'email' | 'password' | 'select' | 'checkbox'
    name: string
    value: string | number | boolean
    validations: Validation[]
    placeholder?: string
    typeValue?: 'string' | 'boolean'
    label?: string
    options?: Opt[]
}

export interface Opt {
    value: string | number
    desc: string
}

export interface Validation {
    type: 'required' | 'isEmail' | 'minLength' | 'isTrue' | 'oneOf'
    value?: string | number | boolean
    message: string
    ref?: string
}

export type FormSection = 'register' | 'another'

export type CustomInputProps = Omit<InputProps, 'validations' | 'typeValue' | 'value'>