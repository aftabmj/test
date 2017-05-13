import {inject} from 'aurelia-framework';
//import { observable } from 'aurelia-framework';
//import {PartyService} from './backend/party-service';
//import {SuggestionService} from './backend/suggestion-service';
//import * from './styles/semantic.min/semantic-ui';
//import 'semantic-ui';
import {IndividualDetails} from  './individual-details';
import {HttpClient,json} from 'aurelia-fetch-client';

const BACKEND_RESTAPI_ENDPOINT:string ='https://express-webserver-mjcoder.c9users.io:8080/api/';

/*
export class PeriodPanel {
    options = [];
    selectedOption = {
            id:1
    };

    constructor() {
        this.options = [
            {id:1, text:'Borrower'}, 
            {id:2, text:'Guarantor'}
        ]; 
        this.selectedOption = this.options[0];
    }

    clicked() {
      console.log(this.selectedOption.id);
      return true;
    }
}*/


//@inject(PartyService)
@inject(HttpClient)
export class DefendantDetails {
  
    financial_role_options = [];
    financial_role_selected_option = { id:1, text:''};
  
    public iD: IndividualDetails; 
   
    //partyService;
    http;
     //@observable({changeHandler: 'dataTransStatusChanged'}) 
     waitingForDataTransfer:boolean = false;
   /*
    model = {
    country: null,
    city: null
  };
  
  suggestionService = null;
  
  countryIndex = null;
  
  activate() {
    return this.http.fetch('/countries.json',
      .then(response => response.json())
      .then(countries => {
        this.countryIndex = countries;
        this.suggestionService = new SuggestionService(this.model, countries);
      });
  }*/
     
    constructor(http) {
        
        http.configure(config => {
                config
                    .withBaseUrl(BACKEND_RESTAPI_ENDPOINT)
                    .withDefaults({
                        headers: {
                            'Accept': 'application/json'
                        }
                    });
            });
        this.http = http;
        
        this.financial_role_options = [
            {id:1, text:'Borrower'}, 
            {id:2, text:'Guarantor'}
        ]; 
        this.financial_role_selected_option = this.financial_role_options[0];
    
    }
    clicked() {
      console.log(this.financial_role_selected_option.id + " " + this.financial_role_selected_option.text);
      return true;
    }

    saveDefendant(){
            //let rep_type_names ={"1": "Branch Manager", 
            //"2":"Chief Manager", "3":"Assistant General Manager" };
            
            //let repTitle:string = rep_type_names[this.rep_title];
            
            /*if (repTitle === undefined) {
                console.log("not selected");
                alert("repTitle was empty");
                return;
            }*/
            this.iD.financial_role = this.financial_role_selected_option.text;
            console.log (this.iD);
            

        this.iD.address_name = 'Ha hah home addres';
        this.iD.state ='Tamil Nadu';
        
            this.waitingForDataTransfer = true;
        this.http.fetch("defendant_details/", {
            method: "post",
            body: json(this.iD),
             headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
    
        }).then(response => {
            alert("Succesfully saved" );
            console.log (response);
            this.waitingForDataTransfer = false;
            
        }) .catch(e => ()=>{
                console.log("Booo");
                alert("Sorry, there was an error communicating with the server.")
                this.waitingForDataTransfer = false;
            });
    }
    
    resetForm(){
        this.financial_role_selected_option = this.financial_role_options[0];
        this.iD.resetDetails();
        this.waitingForDataTransfer = false;
    }
    
     get canSave() {
       // if (this.statusCode === 201) return false;
       
        return !this.waitingForDataTransfer;
    }
    
}
