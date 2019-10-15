import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { Request, Response } from 'express'

require('dotenv/config')

const api = new WooCommerceRestApi({
  url: "https://mediagrow.uy/",
  consumerKey: process.env.WOO_KEY,
  consumerSecret: process.env.WOO_SECRET,
  version: "wc/v3",
  queryStringAuth: true 
});


export class WooCommerceController {
  public wooGetProducts(req: Request, res: Response) {    
    // List products
    api.get("products", { per_page: 100, // 20 products per page
      })
        .then((response:any) => {
          // Successful request
          console.log("Response Status:", response.status);
          console.log("Response Headers:", response.headers);
          console.log("Response Data:", response.data);
          console.log("Total of pages:", response.headers['x-wp-totalpages']);
          console.log("Total of items:", response.headers['x-wp-total']);
          res.status(200).json(response.data)
        })
        .catch((error:any) => {
          // Invalid request, for 4xx and 5xx statuses
          //console.log("Response Status:", error.response.status);
          //console.log("Response Headers:", error.response.headers);
          console.log("Response Data:", error.response.data);
        })
        .finally(() => {
          // Always executed.
        });
  } 
}
