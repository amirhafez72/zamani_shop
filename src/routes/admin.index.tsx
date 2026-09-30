import { createFileRoute } from "@tanstack/react-router";
import { AdminDashboard } from "@/components/shop/AdminPages";
export const Route=createFileRoute("/admin/")({head:()=>({meta:[{title:"مدیریت سوپرمارکت زمانی"},{name:"description",content:"نمای کلی فروش، سفارش‌ها، محصولات و مشتریان."},{property:"og:title",content:"مدیریت سوپرمارکت زمانی"},{property:"og:description",content:"نمای کلی فروش، سفارش‌ها، محصولات و مشتریان."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:AdminDashboard});
