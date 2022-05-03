import React from "react"
import Input from "components/Input"

export default {
    title: "Components/Input",
    component: Input
}

const TemplateInput = args => <Input {...args} />

export const UsernameInput = TemplateInput.bind({})
UsernameInput.args = {
    label: "username",
    type: "text",
    inputsize: "small"
}

export const EmailInput = TemplateInput.bind({})
EmailInput.args = {
    label: "email",
    type: "email",
    inputsize: "small"
}

export const PasswordInput = TemplateInput.bind({})
PasswordInput.args = {
    label: "password",
    type: "password",
    inputsize: "small"
}

export const StatusInput = TemplateInput.bind({})
StatusInput.args = {
    label: "status",
    type: "text",
    inputsize: "small"
}