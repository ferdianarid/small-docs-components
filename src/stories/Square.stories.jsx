import React from "react"
import SquareButton from "components/SquareButton"

export default {
    title: "Components/Button/Square",
    component: SquareButton
}

const SquareTemplate = (args) => <SquareButton {...args} />

export const PrimarySquare = SquareTemplate.bind({})
PrimarySquare.args = {
    label: "Primary Button",
    textbutton: "text-white",
    bgbutton: "bg-blue-700"
}

export const SecondarySquare = SquareTemplate.bind({})
SecondarySquare.args = {
    label: "Secondary Button",
    textbutton: "text-gray-900",
    bgbutton: "bg-white",
    border: "border border-gray-600"
}

export const DangerSquare = SquareTemplate.bind({})
DangerSquare.args = {
    label: "Danger Button",
    textbutton: "text-white",
    bgbutton: "bg-red-600",
    border: "border-none"
}

export const WarningSquare = SquareTemplate.bind({})
WarningSquare.args = {
    label: "Warning Button",
    textbutton: "text-white",
    bgbutton: "bg-yellow-500",
    border: "border-none"
}

export const DarkSquare = SquareTemplate.bind({})
DarkSquare.args = {
    label: "Dark Button",
    textbutton: "text-white",
    bgbutton: "bg-gray-900",
    border: "border-none"
}