import { createFileRoute } from "@tanstack/react-router";
import { AccountPage } from "@/components/shop/ShopPages";
export const Route=createFileRoute("/account")({head:()=>({meta:[{title:"حساب من | سوپرمارکت زمانی"},{name:"description",content:"سفارش‌ها، نشانی‌ها و اطلاعات حساب خود را مدیریت کنید."},{property:"og:title",content:"حساب من | سوپرمارکت زمانی"},{property:"og:description",content:"سفارش‌ها، نشانی‌ها و اطلاعات حساب خود را مدیریت کنید."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:AccountPage});
