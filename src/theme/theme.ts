import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    styles: {
        global: {
            body: {
                bgImage: '../assets/plaid.jpg',
                color: '#202020'
            }
        }
    }
})

export default theme;