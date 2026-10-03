import { createFileRoute } from "@tanstack/react-router";
import { AdminOrderDetail } from "@/components/shop/AdminPages";
export const Route=createFileRoute("/admin/orders_/$orderId")({head:()=>({meta:[{title:"جزئیات سفارش | سوپرمارکت زمانی"},{name:"description",content:"اقلام، مشتری و وضعیت سفارش را مشاهده و مدیریت کنید."},{property:"og:title",content:"جزئیات سفارش | سوپرمارکت زمانی"},{property:"og:description",content:"اقلام، مشتری و وضعیت سفارش را مشاهده و مدیریت کنید."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Page});
function Page(){const {orderId}=Route.useParams();return <AdminOrderDetail orderId={orderId}/>}
