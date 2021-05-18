export default class Autor {
    private _nomeAutor: string;
    private _dateNascimentoAutor: Date;

    constructor(nomeAutor: string, dateNascimentoAutor: Date) {
        this._nomeAutor = nomeAutor;
        this._dateNascimentoAutor = dateNascimentoAutor;
    }

    public get nomeAutor(): string {
        return this._nomeAutor
    }

    public get dateNascimentoAutor(): Date {
        return this._dateNascimentoAutor;
    }

    public set nomeAutor(nomeAutor: string){
         this._nomeAutor = nomeAutor;
    }

    public set dateNascimentoAutor(dateNascimentoAutor: Date){
        this._dateNascimentoAutor = dateNascimentoAutor;
   }


}