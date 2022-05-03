import React from "react"
import OutlineButton from "components/OutlineButton"

export default {
    title: "Components/Button/Outline",
    component: OutlineButton
}

const OutlineTemplate = (args) => <OutlineButton {...args} />

export const PrimaryOutline = OutlineTemplate.bind({})
PrimaryOutline.args = {
    label: "Primary Outline",
    textbutton: "text-blue-700",
    border: "border-blue-700"
}

export const SecondaryOutline = OutlineTemplate.bind({})
SecondaryOutline.args = {
    label: "Secondary Outline",
    textbutton: "text-gray-600",
    border: "border-gray-600"
}

export const DangerOutline = OutlineTemplate.bind({})
DangerOutline.args = {
    label: "Danger Outline",
    textbutton: "text-red-600",
    border: "border-red-600"
}

export const WarningOutline = OutlineTemplate.bind({})
WarningOutline.args = {
    label: "Warning Outline",
    textbutton: "text-yellow-600",
    border: "border-yellow-600"
}