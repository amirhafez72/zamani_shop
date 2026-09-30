import { createFileRoute } from "@tanstack/react-router";
import { LoginPage } from "@/components/shop/ShopPages";
export const Route=createFileRoute("/login")({head:()=>({meta:[{title:"ورود | سوپرمارکت زمانی"},{name:"description",content:"با شماره موبایل وارد حساب سوپرمارکت زمانی شوید."},{property:"og:title",content:"ورود | سوپرمارکت زمانی"},{property:"og:description",content:"با شماره موبایل وارد حساب سوپرمارکت زمانی شوید."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:LoginPage});
