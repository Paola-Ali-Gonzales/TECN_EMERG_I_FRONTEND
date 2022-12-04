import { VariableBinding } from "@angular/compiler";
import {ImagenProducto} from "./producto-image"
export class Producto {
    productID: number;
    name:string;
    dutyManager:string;
    quantity:number;
    description:string;
    createDate: Date;
    expireDate: Date;
    brand: string;
    price: number;
    barcode: string;
    discount: number;
    iva: number;
    category: string;
    batch?: number;
    productImage: ImagenProducto[];
}
