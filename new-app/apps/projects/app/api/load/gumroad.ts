import { DateTime } from "luxon";
import { GumroadSale, Product } from "./type";

const controllerLab: Product = {
  projectAlias: "controllerLab",
  ids: [
    "cn_0ilQ8Wnp0OL6iR4c4Ew==",
    "uKdcqdVXU_ZECTjqyILQ9g==",
    "iwFwsarK2Gkbr31jTyowjA==",
  ],
  source: "gumroad",
  dataStartDate: DateTime.fromObject({ year: 2022, month: 7, day: 29 }),
};

export const getGumroadSales = async ({
  accessToken,
  productId,
  startDate,
  endDate,
}: {
  accessToken: string;
  productId: string;
  startDate: string;
  endDate: string;
}): Promise<GumroadSale[]> => {
  let salesData: any[] = [];
  let nextPageKey: string | null = null;
  let url = `https://api.gumroad.com/v2/sales?access_token=${accessToken}&product_id=${productId}&after=${startDate}&before=${endDate}`;

  do {
    let fullUrl = url + (nextPageKey ? `&page_key=${nextPageKey}` : "");

    try {
      const response = await fetch(fullUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data: any = await response.json();
      salesData = salesData.concat(data.sales);
      nextPageKey = data.next_page_key ? data.next_page_key : null;
    } catch (error) {
      console.error("Failed to fetch Gumroad sales data:", error);
      throw error;
    }
  } while (nextPageKey);

  return salesData;
};

export const products = { controllerLab };
