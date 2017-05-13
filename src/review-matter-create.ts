import {inject} from 'aurelia-framework';
//import {PartyService} from './backend/party-service';
import {HttpClient,json} from 'aurelia-fetch-client';

const BACKEND_RESTAPI_ENDPOINT:string ='https://express-webserver-mjcoder.c9users.io:8080/api/';

@inject(HttpClient)
export class ReviewMatterCreate {
    
    http;
    heading:string ='';
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

    }
    
    
    
    createMatter(){
        
    
     this.http.fetch("createMatter/", {
            method: "post",
            body: json({session_id:1}),
             headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })  .then(r => r.json())
            .then(data => this.heading = JSON.stringify(data))
        
        
     /*   .then(response => {
            alert("Succesfully saved" );
            response.json().then(function(data) {
                console.log (data);
            });
        })*/ .catch(e => ()=>{
                console.log("Booo");
                alert("Sorry, there was an error communicating with the server.")
                //this.waitingForDataTransfer = false;
            });
    }
}

