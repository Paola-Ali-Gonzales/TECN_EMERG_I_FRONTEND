import { Cliente } from "./cliente";
import { DetalleVenta } from "./detalle-venta";

export class Venta {
    idVenta: number;
    fechaCreacion: Date;
    fechaActualizacion: Date;
    detallesVentas: DetalleVenta[] = [];
    cliente: Cliente;
    idUsuario: number;
    total: number;
    status: number;
    fechaResumen : string;
    ok: boolean;
    cantidadTotal : number;
    constructor()
    {
        this.total = 0.0;
        this.cliente = new Cliente();
        this.cantidadTotal = 0.0;
        
    }


    isOk() : boolean{
        if(this.cliente.idCliente != null && this.detallesVentas.length >=1)
        return true;
        else
        return false;
    }

    updateTotal()
    {
        let total = 0.0;
        this.detallesVentas.forEach(element => {
            total = total + (element.subTotal)
        }); 
        this.total = total;
    }

    set Cliente (cliente : Cliente)
    {
        this.cliente = cliente;
    }

    addDetallesVentas(detalleVenta : DetalleVenta)
    {
        this.detallesVentas.push(detalleVenta);
        this.total  = this.total + detalleVenta.subTotal;
        this.cantidadTotal++;
    }

    removeDetalleVenta(detalleVenta: DetalleVenta)
    {
        this.detallesVentas = this.detallesVentas.filter((item) => detalleVenta.producto.productID !== item.Producto.productID);
        this.total = this.total - detalleVenta.subTotal;
    }


    addQuantityDetalleVenta(id:number)
    {
        let detalleVenta = this.detallesVentas.find((item) => item.producto.productID == id);
        detalleVenta.addCantidad();
        this.updateTotal();
        this.cantidadTotal++;
    }

    removeQauntityDetalleVenta(id:number)
    {
        let detalleVenta = this.detallesVentas.find((item) => item.producto.productID == id);
        detalleVenta.removeCantidad();
        this.updateTotal();
        this.cantidadTotal--;
    }

    fecha(): string {
        return this.fechaActualizacion.getFullYear().toString();
    }

}
