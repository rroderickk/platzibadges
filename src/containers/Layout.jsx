import   * as React       from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { motion         } from "framer-motion"
import   styled,{css}            from 'styled-components'
import { gradient } from "../GlobalStyle"

const Layout =({ 
  children, delay=0.4, bg="", height="",
gradient={} }={})=> { return (

  <ChakraProvider /*theme={theme}*/>
<motion.div 
  initial=   {{ y: 10, opacity: 0 }}
  animate=   {{ y: 0,  opacity: 1 }}
  transition={{ duration: 0.4, delay: delay }}
  viewport=  {{ once: false }}
>
  <SLayout id="thelayout" 
    style={{background: bg}} 
    gradient={gradient.g1}
    gradient2={gradient.g2}
  >
     {children}
  </SLayout>
</motion.div>
  </ChakraProvider>

)  }; export { Layout };

const SLayout = styled.div`
  text-align: center;
  border-radius: 15px;
  color: white;
  margin: 0px auto;
  width: 90%;
  display: grid;
  place-content: center;
  min-width: 480px;
  min-height: 100vh;
  max-width: 480px;
  z-index: 0;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar{
    display: none;
  }
  backdrop-filter: blur(10px);
  background: rgb(28,54,67);
  background: linear-gradient(180deg, rgba(28,54,67,1) 3%, rgba(27,27,37,1) 10%, rgba(27,29,40,1) 98%, rgba(105,140,44,1) 10%, rgba(191,255,79,1) 3%);
  box-shadow: 6px 6px 31px #0b0c10,
             -6px -6px 31px #2d2e40;
  ${props => props.gradient && css`
    ${gradient({direction: "45deg" ,first: "rgba(28,54,67,1)", end: "black"})}
    `
  || 
  props.gradient2 && css`
    ${gradient({direction: "145deg" ,first: "rgba(28,54,67,1)", end: "black"})}
    `
  }
`
