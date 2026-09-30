import { createFileRoute } from "@tanstack/react-router";
import { SearchPage } from "@/components/shop/ShopPages";
export const Route=createFileRoute("/search")({head:()=>({meta:[{title:"جستجوی محصولات | سوپرمارکت زمانی"},{name:"description",content:"محصول مورد نیاز خود را در سوپرمارکت زمانی پیدا کنید."},{property:"og:title",content:"جستجوی محصولات | سوپرمارکت زمانی"},{property:"og:description",content:"محصول مورد نیاز خود را در سوپرمارکت زمانی پیدا کنید."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:SearchPage});
