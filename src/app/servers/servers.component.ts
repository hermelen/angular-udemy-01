import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>
  // <app-server></app-server>`,
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = 'TestServer';
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! His name is ' +this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
