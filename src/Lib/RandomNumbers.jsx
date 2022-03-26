export function RandomNumber (max=4,min=1){
  /** 
  * Return random number beetween Max and Min values.
  * max=first type: number, 
  * min=second type: number
  * @param number truncated number.
  */
  if(typeof(max)!=="number" || typeof(min)!=="number") { 
    throw new Error(Error.message="404 parameters are type: number.")
  }

  else{ 
    const numero = Math.random() * (max - min) + max;
    return Math.floor(numero);
  }
}

export function RandomNumberMinMax (min=1,max=4){
  const numero = Math.random() * (max - min) + min + 1;
  return Math.floor(numero);
}