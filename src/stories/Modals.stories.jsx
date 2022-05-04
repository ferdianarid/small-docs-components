import React from "react"
import Modals from "components/Modals"
import Layouts from "components/Decorators/Layouts"

export default {
    title: "Components/Modals",
    component: Modals,
    args: {
        title: "Premium Features",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae recusandae, totam provident minus distinctio dolore"
    },
    // decorators: [story => <Layouts>{story()}</Layouts>]
}

const ModalTemplates = args => <Modals {...args} />

export const PrimaryModal = ModalTemplates.bind({})
PrimaryModal.args = {
    bgmodals: "bg-blue-600",
    textmodals: "text-blue-700"
}

export const DangerModal = ModalTemplates.bind({})
DangerModal.args = {
    bgmodals: "bg-red-600",
    textmodals: "text-red-700"
}

export const WarningModal = ModalTemplates.bind({})
WarningModal.args = {
    bgmodals: "bg-yellow-500",
    textmodals: "text-yellow-600"
}

export const SuccessModal = ModalTemplates.bind({})
SuccessModal.args = {
    bgmodals: "bg-green-500",
    textmodals: "text-green-600"
}