import { Producto } from "./producto";

export class Rack {
    idRack: number;
    description: string;
    products: Producto[]=[];
}