import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/shop/ShopPages";
export const Route=createFileRoute("/")({head:()=>({meta:[{title:"صفحه اصلی سوپرمارکت زمانی"},{name:"description",content:"خرید آنلاین تازه، سریع و آسان از سوپرمارکت زمانی."},{property:"og:title",content:"صفحه اصلی سوپرمارکت زمانی"},{property:"og:description",content:"خرید آنلاین تازه، سریع و آسان از سوپرمارکت زمانی."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:HomePage});
