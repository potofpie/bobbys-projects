import { DateTime } from "luxon";

export type Product = {
  projectAlias: string;
  ids: string[];
  source: "gumroad" | "ga";
  dataStartDate: DateTime;
};

export type GumroadSale = {
  id: string;
  email: string;
  seller_id: string;
  timestamp: string;
  daystamp: string;
  created_at: string;
  product_name: string;
  product_has_variants: boolean;
  price: number;
  gumroad_fee: number;
  is_bundle_purchase: boolean;
  is_bundle_product_purchase: boolean;
  formatted_display_price: string;
  formatted_total_price: string;
  currency_symbol: string;
  amount_refundable_in_currency: string;
  product_id: string;
  product_permalink: string;
  partially_refunded: boolean;
  chargedback: boolean;
  purchase_email: string;
  zip_code: string;
  country: string;
  country_iso2: string;
  paid: boolean;
  has_variants: boolean;
  variants_and_quantity: string;
  has_custom_fields: boolean;
  custom_fields: Record<string, unknown>; // Assuming it's an object with unknown structure
  order_id: number;
  is_product_physical: boolean;
  is_recurring_billing: boolean;
  can_contact: boolean;
  is_following: boolean;
  disputed: boolean;
  dispute_won: boolean;
  is_additional_contribution: boolean;
  discover_fee_charged: boolean;
  is_upgrade_purchase: boolean;
  is_more_like_this_recommended: boolean;
  is_gift_sender_purchase: boolean;
  is_gift_receiver_purchase: boolean;
  referrer: string;
  paypal_refund_expired: boolean;
  card: {
    visual: null | any; // Specify 'any' or a more specific type if known
    type: null | any; // Specify 'any' or a more specific type if known
    bin: null | any; // Specify 'any' or a more specific type if known
    expiry_month: null | any; // Specify 'any' or a more specific type if known
    expiry_year: null | any; // Specify 'any' or a more specific type if known
  };
  product_rating: null | any; // Specify 'any' or a more specific type if known
  quantity: number;
};
