import { createFileRoute } from "@tanstack/react-router";
import { AdminCustomers } from "@/components/shop/AdminPages";
export const Route=createFileRoute("/admin/customers")({head:()=>({meta:[{title:"مدیریت مشتریان | سوپرمارکت زمانی"},{name:"description",content:"فهرست و خریدهای مشتریان فروشگاه."},{property:"og:title",content:"مدیریت مشتریان | سوپرمارکت زمانی"},{property:"og:description",content:"فهرست و خریدهای مشتریان فروشگاه."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:AdminCustomers});
