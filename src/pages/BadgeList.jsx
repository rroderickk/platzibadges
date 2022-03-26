import   React from "react";
import { Layout } from "../containers/Layout"
import { dataset } from "../components/dataset"
import { BadgeItem } from "../components/BadgeItem.jsx";
import { AnimationComponent } from "../components/AnimationComponent";
import { RandomNumber as random } from "../Lib/RandomNumbers";
import   fondo from "@logos/stars.svg"

const BadgeList =()=> {
const [data] = React.useState(dataset);
  React.useEffect(()=>{}, [data])

return ( <>

  <Layout gradient={{g2: "true"}}>
    <section 
      style={{
        height: "560px",
        width: "470px",
        padding: "0 40px",
        marginTop: "0px",
      }} 
    >
      { dataset.map(objeto=>
          <BadgeItem 
            key={objeto.id} 
            formValues={objeto}
          />
        )
      }

      <AnimationComponent {...{scale: random(9,4), duration: random(2,1) }}>
        <img src={fondo} alt="fondo-estrellas"
          style={{
            position: "relative", 
            zIndex: "0"
          }}
        />
      </AnimationComponent>

    </section>
  </Layout>

</> ) }; export {BadgeList};