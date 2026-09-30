import { createFileRoute } from "@tanstack/react-router";
import { CartPage } from "@/components/shop/ShopPages";
export const Route=createFileRoute("/cart")({head:()=>({meta:[{title:"سبد خرید | سوپرمارکت زمانی"},{name:"description",content:"کالاهای انتخاب‌شده و مبلغ سفارش خود را بررسی کنید."},{property:"og:title",content:"سبد خرید | سوپرمارکت زمانی"},{property:"og:description",content:"کالاهای انتخاب‌شده و مبلغ سفارش خود را بررسی کنید."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:CartPage});
