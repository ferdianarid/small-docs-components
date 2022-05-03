import React from "react"
import Snackbar from "components/Snackbar"

export default {
    title: "Components/Snackbar",
    component: Snackbar
}

const SnackbarTemplate = (args) => <Snackbar {...args} />

export const PrimarySnackbar = SnackbarTemplate.bind({})
PrimarySnackbar.args = {
    message: "Register to access premium features",
    bgSnackbar: "bg-blue-700",
    icons: 'info'
}

export const DangerSnackbar = SnackbarTemplate.bind({})
DangerSnackbar.args = {
    message: "Sorry, any trouble with your connection",
    bgSnackbar: "bg-red-500",
    icons: 'error'
}

export const SuccessSnackbar = SnackbarTemplate.bind({})
SuccessSnackbar.args = {
    message: "Invoice Successfully Created",
    bgSnackbar: "bg-green-600",
    icons: "success"
}

export const WarningSnackbar = SnackbarTemplate.bind({})
WarningSnackbar.args = {
    message: "Please fill your profile informations",
    bgSnackbar: "bg-yellow-500",
    icons: "warning"
}

export const DarkSnackbar = SnackbarTemplate.bind({})
DarkSnackbar.args = {
    message: "Dark Mode already activated",
    bgSnackbar: "bg-gray-900",
    icons: "success"
}