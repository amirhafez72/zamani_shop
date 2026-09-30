import { createFileRoute } from "@tanstack/react-router";
import { AdminProducts } from "@/components/shop/AdminPages";
export const Route=createFileRoute("/admin/products")({head:()=>({meta:[{title:"مدیریت محصولات | سوپرمارکت زمانی"},{name:"description",content:"فهرست و وضعیت محصولات فروشگاه."},{property:"og:title",content:"مدیریت محصولات | سوپرمارکت زمانی"},{property:"og:description",content:"فهرست و وضعیت محصولات فروشگاه."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:AdminProducts});
