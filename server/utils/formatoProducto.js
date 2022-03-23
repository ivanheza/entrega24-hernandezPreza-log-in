import moment from "moment"
import {customAlphabet} from "nanoid"

const msgID = customAlphabet("1234567890abcdef", 4)
const date = moment().format("D-MMM-YY,h:mm a")
const formatoProducto = (prod) => {
   return {
      name: prod.name,
      price: prod.price,
      image: prod.image,
      id: `p-${msgID()}`,
   }
}

export default formatoProducto
