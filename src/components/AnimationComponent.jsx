import React from "react";
import { motion } from "framer-motion"

const AnimationComponent =({
 children,
  scale=2,
   duration=0.5})=> { return (<>

  <motion.div
    animate={{ scale: scale }}
    transition={{ duration: duration }}
  >
    {children}
  </motion.div>

</> ) }; export {AnimationComponent};