import { Component, OnInit , ViewChild, Input, } from '@angular/core';

@Component({
  selector: 'app-scroller-one',
  templateUrl: './scroller-one.component.html',
  styleUrls: ['./scroller-one.component.scss']
})
export class ScrollerOneComponent implements OnInit {

    @ViewChild("container", {static:true}) container:any;
    @Input() rowHeight:number = 40;
    @Input() items:any[];
    itemsInView: any[];
    startIndex:number = 0;
    endIndex:number = 0;
    constructor() { }
    ngOnInit() {
        this.refresh();
    }
    ngOnChanges(changes) {
        this.refresh();
    }
    refresh() {
        let scrollTop = this.container.nativeElement.scrollTop;
        let height = this.container.nativeElement.clientHeight;
        this.startIndex = Math.floor(scrollTop / this.rowHeight);
        this.endIndex = Math.ceil((scrollTop + height) / this.rowHeight);
        if (this.items) {
            this.itemsInView = this.items.slice(this.startIndex, this.endIndex);
        }
    }

}
