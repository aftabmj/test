
export class IndividualDetails {
    
         first_name:string;
         middle_name:string;
         last_name:string;
         father_name:string;
         spouse_name:string;
         public address_name:string;
         line1:string;
         line2:string;
         city:string;
         suburb:string;
         public state:string;
         pincode:string;
         public financial_role:string;
    /*
    constructor(
     //    public address_id:number,
         first_name:string,
         middle_name:string,
         last_name:string,
         father_name:string,
         spouse_name:string,
         public address_name:string,
         line1:string,
         line2:string,
         city:string,
         suburb:string,
         public state:string,
         pincode:string,
         public financial_role:string
        ){} */
    
    public resetDetails (): void{
        this.first_name ="";
        this.middle_name="";
        this.last_name="";
        this.father_name="";
        this.spouse_name="";
        this.address_name="";
        this.line1 = this.line2 = "";
        this.city="0"; this.suburb="";
        this.state="";
        this.pincode="";
        this.financial_role="";
    }
}