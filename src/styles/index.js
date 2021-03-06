import styled from "styled-components"
import tw from "tailwind.macro"

export const StyledForm = styled.main.attrs({
  className: "flex flex-col h-screen justify-center items-center bg-gray-100",
})`
  & {
    form {
      ${tw`bg-white text-center rounded py-8 px-5 shadow max-w-xs`}
    }
    input {
      ${tw`border-gray-300 mb-4 w-full border-solid border rounded py-2 px-4`}
    }
    button {
      ${tw`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}
    }
  }
`

export const StyledButton = styled.main.attrs({
  className: ""
})`
  & {
    button {
      ${tw`w-full bg-blue-700 px-4 py-2 font-bold outline-none rounded-lg text-white`}
    }
  }
`

export const StyledRoundButton = styled.main.attrs({
  className: ""
})`
  & {
    button {
      ${tw`w-full px-4 py-2 font-bold outline-none rounded-full`}
    }
  }
`




