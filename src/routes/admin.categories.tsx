import { createFileRoute } from "@tanstack/react-router";
import { AdminCategories } from "@/components/shop/AdminPages";
export const Route=createFileRoute("/admin/categories")({head:()=>({meta:[{title:"مدیریت دسته‌بندی‌ها | سوپرمارکت زمانی"},{name:"description",content:"دسته‌بندی‌های محصولات فروشگاه را مدیریت کنید."},{property:"og:title",content:"مدیریت دسته‌بندی‌ها | سوپرمارکت زمانی"},{property:"og:description",content:"دسته‌بندی‌های محصولات فروشگاه را مدیریت کنید."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:AdminCategories});
