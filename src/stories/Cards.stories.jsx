import React from "react"
import Cards from "components/Cards"

export default {
    title: "Components/Cards/Notification",
    component: Cards
}

const Template = (args) => <Cards {...args} />

export const Primary = Template.bind({})
export const Danger = Template.bind({})
export const Warning = Template.bind({})
export const Success = Template.bind({})

Primary.args = {
    title: "Primary Notification",
    category: "Technology",
    description: "This is a notification components, used in case when user doing something like purchase or other actions",
    backgrounds: 'bg-blue-600',
    colortext: 'text-white',
    colorcategory: 'text-blue-600',
    bgCategory: 'bg-white'
}

Danger.args = {
    title: "Error Notification",
    category: "Design",
    description: "This is a notification components, used in case when user doing something like purchase or other actions",
    backgrounds: 'bg-red-500',
    colortext: 'text-white',
    colorcategory: 'text-red-600',
    bgCategory: 'bg-white'
}

Warning.args = {
    title: "Warning Notification",
    category: "Marketing",
    description: "This is a notification components, used in case when user doing something like purchase or other actions",
    backgrounds: 'bg-yellow-500',
    colortext: 'text-white',
    colorcategory: 'text-yellow-600',
    bgCategory: 'bg-white'
}

Success.args = {
    title: "Success Notification",
    category: "Transaction",
    description: "This is a notification components, used in case when user doing something like purchase or other actions",
    backgrounds: 'bg-green-500',
    colortext: 'text-white',
    colorcategory: 'text-green-600',
    bgCategory: 'bg-white'
}