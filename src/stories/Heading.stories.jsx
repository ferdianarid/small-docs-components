import React from "react"
import Heading from "components/Heading"

export default {
    title: "Components/Heading",
    component: Heading
}

const HeadingTemplate = (args) => <Heading {...args} />

export const PrimaryHeading = HeadingTemplate.bind({})
PrimaryHeading.args = {
    title: "Lets build Documentations",
    subtitle: "Storybook is a library for building a component documentations"
}