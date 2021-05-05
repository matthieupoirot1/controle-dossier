export class Folder {
  public name = '';
  public photos = false;
  public vt = false;
  date: number;
  public imposition = false;
  public devis = false;
  public CGI = false;
  public attestation = false;
  public dateBatigest = false;
  public controle = false;
  public cadastre = false;
  public meters = 0;
  public valid = false;
  public mois = 1;
  public commentaire = '';

  constructor(
    name: string,
    photos: boolean,
    vt: boolean,
    imposition: boolean,
    devis: boolean,
    CGI: boolean,
    attestation: boolean,
    dateBatigest: boolean,
    controle: boolean,
    cadastre: boolean,
    meters: number,
    valid: false,
    date: number,
    commentaire: string) {
    this.name = name;
    this.photos = photos;
    this.vt = vt;
    this.imposition = imposition;
    this.devis = devis;
    this.CGI = CGI;
    this.attestation = attestation;
    this.dateBatigest = dateBatigest;
    this.controle = controle;
    this.cadastre = cadastre;
    this.meters = meters;
    this.valid = valid;
    this.commentaire = commentaire;
    this.date = date;
  }

  static createFromJSON(JSONobject: any): Folder{
    return new Folder(
      JSONobject.name,
      JSONobject.photos,
      JSONobject.vt,
      JSONobject.imposition,
      JSONobject.devis,
      JSONobject.CGI,
      JSONobject.attestation,
      JSONobject.dateBatigest,
      JSONobject.controle,
      JSONobject.cadastre,
      JSONobject.meters,
      JSONobject?.valid,
      JSONobject?.date,
      JSONobject?.commentaire,
    );
  }

  toJSON(): string {
    return JSON.stringify({
      name: this.name,
      photos: this.photos,
      vt: this.vt,
      imposition: this.imposition,
      devis: this.devis,
      CGI: this.CGI,
      attestation: this.attestation,
      dateBatigest: this.dateBatigest,
      controle: this.controle,
      cadastre: this.cadastre,
      meters: this.meters,
      valid: this.valid,
      date: this.date,
      commentaire: this.commentaire
    });
  }

  checkValidness(): boolean{
    return this.photos &&
      this.vt &&
      this.imposition &&
      this.devis &&
      this.CGI &&
      this.attestation &&
      this.dateBatigest &&
      this.controle &&
      this.cadastre &&
      this.date > 1 && this.date < 12;
  }

  getFormatedName(): string {
    return this.name.trim().replace(' ', '_');
  }
}
