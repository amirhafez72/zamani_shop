import groceryOne from "@/assets/grocery-products-1.jpg";
import groceryTwo from "@/assets/grocery-products-2.jpg";
import groceryThree from "@/assets/grocery-products-3.jpg";

export type Product = { id:string; name:string; category:string; brand:string; unit:string; price:number; oldPrice?:number; rating:number; reviews:number; stock:number; image:string; position:string; description:string; featured?:boolean; fresh?:boolean };
export type Category = { id:string; name:string; icon:string };
export const categories: Category[] = [
{id:"dairy",name:"لبنیات",icon:"🥛"},{id:"produce",name:"میوه و سبزیجات",icon:"🥬"},{id:"bread",name:"نان و غلات",icon:"🥖"},{id:"rice",name:"برنج و حبوبات",icon:"🌾"},{id:"drinks",name:"نوشیدنی",icon:"🧃"},{id:"snacks",name:"تنقلات",icon:"🍪"},{id:"protein",name:"پروتئینی",icon:"🥚"},{id:"cleaning",name:"شوینده و بهداشت",icon:"🧴"},{id:"breakfast",name:"صبحانه",icon:"🍯"}
];
export const products: Product[] = [
{id:"milk",name:"شیر کم‌چرب پگاه",category:"dairy",brand:"پگاه",unit:"۱ لیتر",price:65000,oldPrice:75000,rating:4.7,reviews:128,stock:24,image:groceryOne,position:"right-0 top-0",description:"شیر پاستوریزه کم‌چرب، تازه و مناسب مصرف روزانه.",featured:true,fresh:true},
{id:"rice",name:"برنج ایرانی طارم ممتاز",category:"rice",brand:"زمانی",unit:"۵ کیلوگرم",price:845000,oldPrice:920000,rating:4.8,reviews:86,stock:12,image:groceryOne,position:"left-0 top-0",description:"برنج خوش‌عطر طارم شمال با پخت عالی و دانه‌های یکدست.",featured:true},
{id:"eggs",name:"تخم‌مرغ تازه محلی",category:"protein",brand:"تلاونگ",unit:"بسته ۶ عددی",price:78000,rating:4.6,reviews:204,stock:30,image:groceryOne,position:"right-0 bottom-0",description:"تخم‌مرغ تازه و درجه یک، مناسب صبحانه و آشپزی.",fresh:true},
{id:"yogurt",name:"ماست پرچرب سنتی",category:"dairy",brand:"کاله",unit:"۹۰۰ گرم",price:92000,oldPrice:105000,rating:4.5,reviews:73,stock:18,image:groceryOne,position:"left-0 bottom-0",description:"ماست سنتی پرچرب با بافت خامه‌ای و طعم دلپذیر.",featured:true,fresh:true},
{id:"apple",name:"سیب قرمز ممتاز",category:"produce",brand:"تازه‌چین",unit:"۱ کیلوگرم",price:119000,rating:4.8,reviews:91,stock:20,image:groceryTwo,position:"right-0 top-0",description:"سیب قرمز شیرین و ترد، دست‌چین و تازه روز.",fresh:true},
{id:"banana",name:"موز درجه یک",category:"produce",brand:"تازه‌چین",unit:"۱ کیلوگرم",price:145000,oldPrice:159000,rating:4.7,reviews:119,stock:16,image:groceryTwo,position:"left-0 top-0",description:"موز رسیده و شیرین، مناسب میان‌وعده روزانه.",featured:true,fresh:true},
{id:"tomato",name:"گوجه فرنگی بوته‌ای",category:"produce",brand:"مزرعه زمانی",unit:"۱ کیلوگرم",price:69000,rating:4.4,reviews:55,stock:22,image:groceryTwo,position:"right-0 bottom-0",description:"گوجه بوته‌ای سفت و آبدار، برداشت روز.",fresh:true},
{id:"cucumber",name:"خیار گلخانه‌ای تازه",category:"produce",brand:"مزرعه زمانی",unit:"۱ کیلوگرم",price:74000,oldPrice:82000,rating:4.5,reviews:67,stock:25,image:groceryTwo,position:"left-0 bottom-0",description:"خیار سبز و ترد گلخانه‌ای، مناسب سالاد.",fresh:true},
{id:"juice",name:"آب پرتقال طبیعی",category:"drinks",brand:"سن‌ایچ",unit:"۱ لیتر",price:138000,rating:4.3,reviews:43,stock:14,image:groceryThree,position:"right-0 top-0",description:"آب پرتقال خوش‌طعم بدون رنگ مصنوعی."},
{id:"chips",name:"چیپس نمکی خانواده",category:"snacks",brand:"چی‌توز",unit:"۲۴۰ گرم",price:89000,oldPrice:99000,rating:4.2,reviews:101,stock:34,image:groceryThree,position:"left-0 top-0",description:"چیپس سیب‌زمینی ترد با نمک متعادل.",featured:true},
{id:"dish",name:"مایع ظرفشویی سبز",category:"cleaning",brand:"پریل",unit:"۱ لیتر",price:126000,rating:4.6,reviews:62,stock:9,image:groceryThree,position:"right-0 bottom-0",description:"پاک‌کنندگی قوی و رایحه ملایم برای ظروف."},
{id:"lentil",name:"عدس درشت ممتاز",category:"rice",brand:"زمانی",unit:"۹۰۰ گرم",price:168000,oldPrice:184000,rating:4.7,reviews:38,stock:17,image:groceryThree,position:"left-0 bottom-0",description:"عدس درشت، پاک‌شده و مناسب انواع غذاهای ایرانی."}
];
export const formatPrice=(n:number)=>`${new Intl.NumberFormat("fa-IR").format(n)} تومان`;
export const toFa=(n:number|string)=>new Intl.NumberFormat("fa-IR").format(Number(n));
export const discount=(p:Product)=>p.oldPrice?Math.round((1-p.price/p.oldPrice)*100):0;
