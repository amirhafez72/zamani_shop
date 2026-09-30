import { createFileRoute } from "@tanstack/react-router";
import { CheckoutPage } from "@/components/shop/ShopPages";
export const Route=createFileRoute("/checkout")({head:()=>({meta:[{title:"تکمیل سفارش | سوپرمارکت زمانی"},{name:"description",content:"نشانی، زمان ارسال و پرداخت سفارش را تکمیل کنید."},{property:"og:title",content:"تکمیل سفارش | سوپرمارکت زمانی"},{property:"og:description",content:"نشانی، زمان ارسال و پرداخت سفارش را تکمیل کنید."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:CheckoutPage});
