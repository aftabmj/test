import {inject} from 'aurelia-framework';
import {RouterConfiguration, Router} from 'aurelia-router';

@inject(Router, RouterConfiguration)
export class App {

    heading ='';
    router;

    constructor(){
        this.heading =" Welcome !";
    }
    
    configureRouter(config: RouterConfiguration, router: Router): void {
        config.title = 'O.A. Application';
        config.map([
          { route: '',  title: 'welcome!!', name:'home',  moduleId: 'home' , nav:true},
          { route:'applicant-details', name:'applicant-details', title:'Applicant Details', moduleId:'applicant-details', nav:true},
          { route:'defendant-details', name:'defendant-details', title:'Defendant Details', moduleId:'defendant-details', nav:true},
          { route:'review-matter-create', name:'review-matter-create', title:'Review Matter Details', moduleId:'review-matter-create', nav:true },
          { route:'m/:id/facility', name:'facility', title:'facility details', moduleId:'m/facility-details', nav:false}
         // { route: 'users/:id/detail', name: 'userDetail', moduleId: 'users/detail' },
         // { route: 'files/*path',      name: 'files',      moduleId: 'files/index',   href:'#files',   nav: 0 }
        ]);
        
         this.router = router;
      }
  
}
