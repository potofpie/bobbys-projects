import { NextResponse, NextRequest } from "next/server";
import { getGumroadSales, products } from "./gumroad";
import { DateTime } from "luxon";

export async function GET(request: NextRequest) {
  const ids = products["controllerLab"].ids;
  const startDate = products[
    "controllerLab"
  ].dataStartDate.toISODate() as string;
  const endDate = DateTime.now().toISODate() as string;
  console.log({ ids, startDate, endDate });
  const data = await Promise.all(
    ids.map(async (id) => {
      return getGumroadSales({
        accessToken: "lpBQaYL93kSrQyUxIlWOPIWXs03TwMGj0DJbfLWtyTs",
        productId: id,
        startDate,
        endDate,
      });
    }),
  );
  const sales = data
    .flat()
    .flatMap((s) => ({
      id: s.id,
      product_name: s.product_name,
      price: s.price,
      created_at: s.created_at,
    }))
    .sort((a, b) => {
      return (
        new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      );
    });

  return NextResponse.json(sales, { status: 200 });
}
