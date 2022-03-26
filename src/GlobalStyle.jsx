import { createGlobalStyle, keyframes, css} from "styled-components"

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *, *:before, *:after { box-sizing: inherit; }
  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button: {
    background: transparent;
    border: 0;
    outline: 0;
  }
  body {
    margin: 0px auto;
    min-height: 100vh;
    overscroll-behavior: none;
    width: 100%;
    overflow: hidden;
  }
  #root {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    overflow-x: hidden;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Roboto", sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: linear-gradient(145deg, #1e1f2b, #191a24);
  }
  *{
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  }
`
const FadeInKeyFrames = keyframes`
  from{
    filter: blur(5px);
    opacity: 0;
  }
  to{
    filter: blur(0);
    opacity: 1;
  }
` 
export const FadeIn =( {time="1s", type="ease"}={} )=> {
  return css`animation: ${time} ${FadeInKeyFrames} ${type};`
}

const bounceDownKeyFrames = keyframes`
  0% {
    top: -70px;
  }

  25% {
    top: 0px;
  }

  40%{
    top: 10px
  }

  65%{
    top: -3px
  }

  100% {
    top: 0px;
  }
`

export const bounceDown =( {time='1s', type='ease' }={} )=> {
  return css`
    animation: ${time} ${bounceDownKeyFrames} ${type};`
}

const positionDownKeyFrames = keyframes`
  0%{
    margin-top:-100px;
  }

  100%{
    margin-top:0;
  }
`
export const positionDown =( {time='1s', type='ease'}={} )=> {
  css`animation: ${time} ${positionDownKeyFrames} ${type};`
}

const scaleDown = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.5);
  }
`
export const scale =( {time="1s", type="ease"}={} )=> css`animation: ${time} ${scaleDown} ${type};`

export const gradient =({
 direction="to right", 
  first="#9c0", 
   end="#ff0070"}={} )=> css`
  background-image: linear-gradient(${direction}, ${first}, ${end});
`