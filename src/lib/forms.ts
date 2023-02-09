import { FormSection, InputProps } from '../types';



export const forms: { [K in FormSection]: InputProps[] } =
{

    register: [
        {
            label: "New username",
            type: "text",
            name: "username",
            placeholder: "New username",
            value: "",
            validations: [
                {
                    type: "minLength",
                    value: 3,
                    message: "Min. 3 characters",
                },
                {
                    type: "required",
                    message: "Username is required"
                },
            ],

        },
        {
            label: "New Password",
            type: "password",
            name: "password",
            placeholder: "New password",
            value: "",
            validations: [
                {
                    type: "required",
                    message: "Password is required"
                },
                {
                    type: "minLength",
                    value: 5,
                    message: "Min. 5 characters",
                }
            ],

        },
        {
            label: 'Repeat your password',
            type: "password",
            name: "repeat_password",
            placeholder: "Repeat password",
            value: "",
            validations: [
                {
                    type: "required",
                    message: "Repeat password is required"
                },
                {
                    type: "minLength",
                    value: 5,
                    message: "Min. 5 characters",
                },
                {
                    type: 'oneOf',
                    message: 'Passwords must match',
                    ref: 'password'
                }
            ],

        },

    ],

    another: [

        {
            label: "E-mail address",
            type: "email",
            name: "email",
            placeholder: "correo@correo.com",
            value: "",
            validations: [
                {
                    type: "required",
                    message: "Email is required"
                },
                {
                    type: "isEmail",
                    message: "Email no valid"
                }
            ],

        },
        {
            type: "select",
            name: "rol",
            label: "Select an option: ",
            value: "",
            options: [
                {
                    value: "admin",
                    desc: "Admin",
                },
                {
                    value: "user",
                    desc: "User"
                },
                {
                    value: "super-admin",
                    desc: "Super Admin"
                }
            ],
            validations: [
                {
                    type: "required",
                    message: "Rol is required"
                }
            ]
        },
        {
            type: "radio",
            name: "gender",
            label: "Gender: ",
            value: "",
            options: [
                {
                    value: 'man',
                    desc: "Man"
                },
                {

                    value: "woman",
                    desc: "Woman"
                },
                {

                    value: "other",
                    desc: "Other"
                },
            ],
            validations: [
                {
                    type: "required",
                    message: "Gender is required"
                }
            ]
        },
        {
            type: "checkbox",
            name: "terms",
            typeValue: "boolean",
            label: "Terms and Conditions",
            value: false,
            validations: [
                {
                    type: "isTrue",
                    message: "Accept the terms!"
                }
            ]
        },
    ]
}