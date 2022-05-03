import React from "react"
import PillsButton from "components/PillsButton"

export default {
    title: "Components/Button/Pills",
    component: PillsButton
}

const PillsTemplate = (args) => <PillsButton {...args} />

export const Primary = PillsTemplate.bind({})
Primary.args = {
    label: "Primary Button",
    textbutton: "text-white",
    bgbutton: "bg-blue-700"
}

export const Secondary = PillsTemplate.bind({})
Secondary.args = {
    label: "Secondary Button",
    textbutton: "text-gray-900",
    bgbutton: "bg-white",
    border: "border border-gray-600"
}

export const Danger = PillsButton.bind({})
Danger.args = {
    label: "Danger Button",
    textbutton: "text-white",
    bgbutton: "bg-red-600",
    border: "border-none"
}

export const Warning = PillsButton.bind({})
Warning.args = {
    label: "Warning Button",
    textbutton: "text-white",
    bgbutton: "bg-yellow-500",
    border: "border-none"
}

export const Dark = PillsButton.bind({})
Dark.args = {
    label: "Dark Button",
    textbutton: "text-white",
    bgbutton: "bg-gray-900",
    border: "border-none"
}