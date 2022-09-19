// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { menu } from "../../constants";
import crypto from "crypto";
export default function handler(req, res) {
  if (req.method === "POST") {
    let total = 0;

    try {
      const menuIds = menu.map((item) => {
        return item.id;
      });

      req.body.order.map((item) => {
        if (!menuIds.includes(item.id)) {
          throw new Error(
            "This order could not be processed.\nOrder includes invalid id."
          );
        }
        const price = menu.find((menuItem) => menuItem.id === item.id).price;
        total += item.quantity * price;
      });

      res.status(200).json({
        id: crypto.randomUUID(),
        total: +total.toFixed(2),
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  } else {
    // Handle any other HTTP method
    res.status(500).send("Something went very wrong.");
  }
}
