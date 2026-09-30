import { createFileRoute } from "@tanstack/react-router";
import { AdminOrders } from "@/components/shop/AdminPages";
export const Route=createFileRoute("/admin/orders")({head:()=>({meta:[{title:"مدیریت سفارش‌ها | سوپرمارکت زمانی"},{name:"description",content:"وضعیت سفارش‌های مشتریان را مدیریت کنید."},{property:"og:title",content:"مدیریت سفارش‌ها | سوپرمارکت زمانی"},{property:"og:description",content:"وضعیت سفارش‌های مشتریان را مدیریت کنید."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:AdminOrders});
