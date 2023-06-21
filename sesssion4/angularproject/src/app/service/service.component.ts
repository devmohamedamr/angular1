import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
    servicedata:Array<string> = [
        "UI/UX Design",
        "Web Design",
        "App Design",
        "seo",
        "backend"
    ]
}
