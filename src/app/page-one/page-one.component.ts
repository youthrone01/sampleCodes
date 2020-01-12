import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {


  settings = {
    maxHeight: 300
  }

  ngOnInit() {
  }


  onScrollEnd($event){
    console.log('$event: ', $event);

  }


  items:string[] = [];
    constructor() {
        this.items = this.generateItems(10000);
    }
  generateItems(n:number):string[] {
      var items:string[] = [];
      for (var i = 1; i <= n; i++) {
          items.push('Item ' + i);
      }
      return items;
  }




  virtualdata = [
    {
      "company": "EMTRAK",
      "email": "lilianachan@emtrak.com"
    },
    {
      "company": "WAZZU",
      "email": "lilianachan@wazzu.com"
    },
    {
      "company": "ZOLAREX",
      "email": "lilianachan@zolarex.com"
    },
    {
      "company": "MEDIFAX",
      "email": "lilianachan@medifax.com"
    },
    {
      "company": "HARMONEY",
      "email": "lilianachan@harmoney.com"
    },
    {
      "company": "PHORMULA",
      "email": "lilianachan@phormula.com"
    },
    {
      "company": "DELPHIDE",
      "email": "lilianachan@delphide.com"
    },
    {
      "company": "PHEAST",
      "email": "lilianachan@pheast.com"
    },
    {
      "company": "MEDMEX",
      "email": "lilianachan@medmex.com"
    },
    {
      "company": "GOLOGY",
      "email": "lilianachan@gology.com"
    },
    {
      "company": "ZENTHALL",
      "email": "lilianachan@zenthall.com"
    },
    {
      "company": "MULTIFLEX",
      "email": "lilianachan@multiflex.com"
    },
    {
      "company": "PASTURIA",
      "email": "lilianachan@pasturia.com"
    },
    {
      "company": "ENORMO",
      "email": "lilianachan@enormo.com"
    },
    {
      "company": "PROSELY",
      "email": "lilianachan@prosely.com"
    },
    {
      "company": "VORATAK",
      "email": "lilianachan@voratak.com"
    },
    {
      "company": "SLAX",
      "email": "lilianachan@slax.com"
    },
    {
      "company": "ASSURITY",
      "email": "lilianachan@assurity.com"
    },
    {
      "company": "TETAK",
      "email": "lilianachan@tetak.com"
    },
    {
      "company": "DIGIFAD",
      "email": "lilianachan@digifad.com"
    },
    {
      "company": "GLASSTEP",
      "email": "lilianachan@glasstep.com"
    },
    {
      "company": "TUBESYS",
      "email": "lilianachan@tubesys.com"
    },
    {
      "company": "QUINEX",
      "email": "lilianachan@quinex.com"
    },
    {
      "company": "RADIANTIX",
      "email": "lilianachan@radiantix.com"
    },
    {
      "company": "ISOLOGICS",
      "email": "lilianachan@isologics.com"
    },
    {
      "company": "ZILLANET",
      "email": "lilianachan@zillanet.com"
    },
    {
      "company": "EMTRAK",
      "email": "lilianachan@emtrak.com"
    },
    {
      "company": "WAZZU",
      "email": "lilianachan@wazzu.com"
    },
    {
      "company": "ZOLAREX",
      "email": "lilianachan@zolarex.com"
    },
    {
      "company": "MEDIFAX",
      "email": "lilianachan@medifax.com"
    },
    {
      "company": "HARMONEY",
      "email": "lilianachan@harmoney.com"
    },
    {
      "company": "PHORMULA",
      "email": "lilianachan@phormula.com"
    },
    {
      "company": "DELPHIDE",
      "email": "lilianachan@delphide.com"
    },
    {
      "company": "PHEAST",
      "email": "lilianachan@pheast.com"
    },
    {
      "company": "MEDMEX",
      "email": "lilianachan@medmex.com"
    },
    {
      "company": "GOLOGY",
      "email": "lilianachan@gology.com"
    },
    {
      "company": "ZENTHALL",
      "email": "lilianachan@zenthall.com"
    },
    {
      "company": "MULTIFLEX",
      "email": "lilianachan@multiflex.com"
    },
    {
      "company": "PASTURIA",
      "email": "lilianachan@pasturia.com"
    },
    {
      "company": "ENORMO",
      "email": "lilianachan@enormo.com"
    },
    {
      "company": "PROSELY",
      "email": "lilianachan@prosely.com"
    },
    {
      "company": "VORATAK",
      "email": "lilianachan@voratak.com"
    },
    {
      "company": "SLAX",
      "email": "lilianachan@slax.com"
    },
    {
      "company": "ASSURITY",
      "email": "lilianachan@assurity.com"
    },
    {
      "company": "TETAK",
      "email": "lilianachan@tetak.com"
    },
    {
      "company": "DIGIFAD",
      "email": "lilianachan@digifad.com"
    },
    {
      "company": "GLASSTEP",
      "email": "lilianachan@glasstep.com"
    },
    {
      "company": "TUBESYS",
      "email": "lilianachan@tubesys.com"
    },
    {
      "company": "QUINEX",
      "email": "lilianachan@quinex.com"
    },
    {
      "company": "RADIANTIX",
      "email": "lilianachan@radiantix.com"
    },
    {
      "company": "ISOLOGICS",
      "email": "lilianachan@isologics.com"
    },
    {
      "company": "ZILLANET",
      "email": "lilianachan@zillanet.com"
    },
    {
      "company": "EMTRAK",
      "email": "lilianachan@emtrak.com"
    },
    {
      "company": "WAZZU",
      "email": "lilianachan@wazzu.com"
    },
    {
      "company": "ZOLAREX",
      "email": "lilianachan@zolarex.com"
    },
    {
      "company": "MEDIFAX",
      "email": "lilianachan@medifax.com"
    },
    {
      "company": "HARMONEY",
      "email": "lilianachan@harmoney.com"
    },
    {
      "company": "PHORMULA",
      "email": "lilianachan@phormula.com"
    },
    {
      "company": "DELPHIDE",
      "email": "lilianachan@delphide.com"
    },
    {
      "company": "PHEAST",
      "email": "lilianachan@pheast.com"
    },
    {
      "company": "MEDMEX",
      "email": "lilianachan@medmex.com"
    },
    {
      "company": "GOLOGY",
      "email": "lilianachan@gology.com"
    },
    {
      "company": "ZENTHALL",
      "email": "lilianachan@zenthall.com"
    },
    {
      "company": "MULTIFLEX",
      "email": "lilianachan@multiflex.com"
    },
    {
      "company": "PASTURIA",
      "email": "lilianachan@pasturia.com"
    },
    {
      "company": "ENORMO",
      "email": "lilianachan@enormo.com"
    },
    {
      "company": "PROSELY",
      "email": "lilianachan@prosely.com"
    },
    {
      "company": "VORATAK",
      "email": "lilianachan@voratak.com"
    },
    {
      "company": "SLAX",
      "email": "lilianachan@slax.com"
    },
    {
      "company": "ASSURITY",
      "email": "lilianachan@assurity.com"
    },
    {
      "company": "TETAK",
      "email": "lilianachan@tetak.com"
    },
    {
      "company": "DIGIFAD",
      "email": "lilianachan@digifad.com"
    },
    {
      "company": "GLASSTEP",
      "email": "lilianachan@glasstep.com"
    },
    {
      "company": "TUBESYS",
      "email": "lilianachan@tubesys.com"
    },
    {
      "company": "QUINEX",
      "email": "lilianachan@quinex.com"
    },
    {
      "company": "RADIANTIX",
      "email": "lilianachan@radiantix.com"
    },
    {
      "company": "ISOLOGICS",
      "email": "lilianachan@isologics.com"
    },
    {
      "company": "ZILLANET",
      "email": "lilianachan@zillanet.com"
    }
  ]

}
