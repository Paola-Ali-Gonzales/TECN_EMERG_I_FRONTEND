import { Venta } from "./venta";

import {Producto} from "./producto"

export class DetalleVenta {
    private _idDetalleVenta: number;
    private _precioVenta: number;
    private _fechaCreacion: Date;
    private _fechaActualizacion: Date;
	private _cantidad: number;
	private _subTotal: number;
	private _descuento: number;
	private _idProducto: number;
	private _status: number;
	public producto : Producto;

	constructor(producto:Producto)
	{
		this.producto = producto;
		this._idProducto = producto.productID;
		this._precioVenta = producto.price;
		this._status = 1;
		this._descuento = 0.0;
		this._cantidad = 1;
		this._subTotal = this._precioVenta;
	}

	public addCantidad()
	{
		this._cantidad++;
		this._subTotal = this._cantidad * this._precioVenta;
	}

	public removeCantidad()
	{
		if(this.cantidad > 1)
		{
			this._cantidad--;
			this._subTotal = this._cantidad * this._precioVenta;
		}
	}

	public get Producto()
	{
		return this.producto;
	}

	public set Producto(producto:Producto)
	{
		this.producto = producto;
	}

	public get precioVenta()
	{
		return this._precioVenta;
	}

	public set precioVenta(precioVenta : number)
	{
		this._precioVenta = precioVenta;
	}

	public get idDetalleVenta()
	{
		return this._idDetalleVenta;
	}

	public set idDetalleVenta(idDetalleVenta : number)
	{
		this.idDetalleVenta = idDetalleVenta;
	}

	public get cantidad()
	{
		return this._cantidad;
	}

	public set cantidad(cantidad:number)
	{
		this._cantidad = cantidad;
	}

	public get subTotal()
	{
		return this._subTotal;
	}

	public set subTotal(subTotal:number)
	{
		this._subTotal = subTotal;
	}

	public get idProducto()
	{
		return this._idProducto;
	}
	public set idProducto(idProducto:number)
	{
		this._idProducto = idProducto;
	}



}
