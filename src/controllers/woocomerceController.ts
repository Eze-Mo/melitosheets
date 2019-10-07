import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
 
const api = new WooCommerceRestApi({
  url: "http://example.com",
  consumerKey: "ck_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  consumerSecret: "cs_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  version: "wc/v3"
});

// List products
api.get("products", {
    per_page: 20, // 20 products per page
  })
    .then((response) => {
      // Successful request
      console.log("Response Status:", response.status);
      console.log("Response Headers:", response.headers);
      console.log("Response Data:", response.data);
      console.log("Total of pages:", response.headers['x-wp-totalpages']);
      console.log("Total of items:", response.headers['x-wp-total']);
    })
    .catch((error:any) => {
      // Invalid request, for 4xx and 5xx statuses
      console.log("Response Status:", error.response.status);
      console.log("Response Headers:", error.response.headers);
      console.log("Response Data:", error.response.data);
    })
    .finally(() => {
      // Always executed.
    });

