import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @ViewChild('asSidebar') sidebar: ElementRef | undefined;
  @ViewChild('asContent') content: ElementRef | undefined;

  valor: boolean = false

  constructor() { }

  ngOnInit(): void {
    this.menuSlice()
  }

  menuSlice() {
    // var ds = false
    if (this.valor) {
      document.querySelector('#sidebar')?.classList.add("active")
      document.querySelector('#content')?.classList.add("active")
      // const elementoContent: any = document.querySelector('#content')?.classList.remove("active")
      // elementoSider.
      // ds = false
      this.valor = false
    } else {
      document.querySelector('#sidebar')?.classList.remove("active")
      document.querySelector('#content')?.classList.remove("active")
      this.valor = true
    }
  }

}
