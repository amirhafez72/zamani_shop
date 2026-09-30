import type React from "react";
import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { products, type Product } from "./store-data";
type Store={cart:Record<string,number>; add:(id:string)=>void; remove:(id:string)=>void; setQty:(id:string,n:number)=>void; count:number; subtotal:number; savings:number; clear:()=>void; signedIn:boolean; setSignedIn:(v:boolean)=>void};
const g=globalThis as unknown as {__zamaniStoreCtx?:React.Context<Store|undefined>};
const StoreContext=g.__zamaniStoreCtx??(g.__zamaniStoreCtx=createContext<Store|undefined>(undefined));
export function StoreProvider({children}:{children:ReactNode}){
 const [cart,setCart]=useState<Record<string,number>>({}); const [signedIn,setSignedIn]=useState(false);
 const add=(id:string)=>setCart(c=>({...c,[id]:(c[id]??0)+1}));
 const remove=(id:string)=>setCart(c=>{const n={...c};delete n[id];return n});
 const setQty=(id:string,n:number)=>n<=0?remove(id):setCart(c=>({...c,[id]:n}));
 const count=Object.values(cart).reduce((a,b)=>a+b,0);
 const subtotal=products.reduce((s,p)=>s+(cart[p.id]??0)*p.price,0);
 const savings=products.reduce((s,p)=>s+(cart[p.id]??0)*((p.oldPrice??p.price)-p.price),0);
 const value=useMemo(()=>({cart,add,remove,setQty,count,subtotal,savings,clear:()=>setCart({}),signedIn,setSignedIn}),[cart,count,subtotal,savings,signedIn]);
 return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}
export function useStore(){const v=useContext(StoreContext);if(!v)throw new Error("StoreProvider missing");return v}
export function productById(id:string):Product|undefined{return products.find(p=>p.id===id)}
