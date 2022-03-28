import   React from "react";
import { Layout } from "../containers/Layout";
import { AnimationComponent } from "../components/AnimationComponent";
import { RandomNumber as random} from "../Lib/RandomNumbers";
import { BadgeForm } from "../components/BadgeForm";
import { Badge } from "../components/Badge";
import { Form,handleSend } from "../components/Form"

import fondo from "@logos/stars.svg"

const Home =()=> { 
  const [state, setState] = React.useState({ 
    form: {
      firstname: '',
      lastname:  '',
      jobtitle: '',
      twitter: '',
      avatar: "https://yt3.ggpht.com/ytc/AKedOLQdlpe31mHzbnXIBmJYq_pSIRXtDIhbV-ihgvFq=s900-c-k-c0x00ffffff-no-rj",
      email:'',
    } 
  });

  const handleChange =e=> {
    setState({
      form: { 
        ...state.form,
        [ e.target.name ]: e.target.value, 
      }
    });
  };
  
  
return ( <>

  <Layout delay={1} bg="none">
    <section 
      style={{
        height: "560px",
        width: "470px",
        padding: "0 40px",
        marginTop: "30px",
      }} 
    >
      {Form(state.form)}
      <AnimationComponent {...{scale: random(9,4), duration: random(2,1) }}>
        <img src={fondo} alt="fondo-estrellas" /> 
      </AnimationComponent>

      <BadgeForm
        onChange={handleChange}
        formValues={state.form}
        handleSend={handleSend}
      />

      <Badge
        formValues={state.form}
      />

    </section>
  </Layout>

</> ) }; export { Home };
