import axios from "axios";

const products = await axios.get("http://localhost:3000/prodcuts").then(rsp => rsp.data);

export default products;
