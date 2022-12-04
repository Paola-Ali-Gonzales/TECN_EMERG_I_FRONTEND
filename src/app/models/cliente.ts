export class Cliente {

    public idCliente: number;
    public nitCi: string;
    public nombre: string;
    public apellidos: string;
    public fechaCreacion?: string;
    public status?: number;
    public fechaActualizacion?: string;
    public correo: string; 

    
    constructor()
	{
		
	}
    
    public get IdCliente()
    {
        return this.idCliente;
    }

    public set IdCliente(idCliente:number)
    {
        this.idCliente = idCliente;
    }

    public get NitCi()
    {
        return this.NitCi;
    }

    public set NitCi(nitCi : string)
    {
        this.NitCi = nitCi;
    }

    public get Nombre()
    {
        return this.nombre;
    }

    public set Nombre (nombre: string)
    {
        this. nombre = nombre;
    }

    public get Apellidos ()
    {
        return this. apellidos;
    }
    public set Apellidos(apellidos : string)
    {
        this. apellidos = apellidos;
    }

    public get Correo()
    {
        return this. correo;
    }

    public set Correo(correo : string)
    {
        this. correo = correo;
    }

    public get Status()
    {
        return this. status;
    }

    public set Status(status : number)
    {
        this. status = status;
    }
}
 