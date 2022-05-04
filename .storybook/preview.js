export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

import React from "react"
import { addDecorator } from "@storybook/react"
import Layouts from "../src/components/Decorators/Layouts"

addDecorator(story => <Layouts>{story()}</Layouts>)