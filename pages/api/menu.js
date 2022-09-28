// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { menu } from "../../constants";

export default function handler(req, res) {
  if (req.method === "GET") {
    // Process a POST request
    res.status(200).json(
      menu,
    );
  } else {
    // Handle any other HTTP method
    res.status(500).send("Something went very wrong.");
  }
}

// if (req.method === "GET") {
//   // Process a POST request
//   res.status(200).json({
//     items: menu,
//   });
// } else {
//   // Handle any other HTTP method
//   res.status(500).send("Something went very wrong.");
// }