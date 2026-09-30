import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { ProductsPage } from "@/components/shop/ShopPages";
export const Route=createFileRoute("/products/")({validateSearch:z.object({category:z.string().optional(),discount:z.boolean().optional(),sort:z.string().optional()}),head:()=>({meta:[{title:"محصولات سوپرمارکت زمانی"},{name:"description",content:"جستجو و خرید محصولات تازه و روزمره با قیمت مناسب."},{property:"og:title",content:"محصولات سوپرمارکت زمانی"},{property:"og:description",content:"جستجو و خرید محصولات تازه و روزمره با قیمت مناسب."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:ProductsPage});
