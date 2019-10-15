import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonService } from 'src/app/common.service';
import { Location } from '@angular/common';
import { FilterPipe } from 'ngx-filter-pipe';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.scss'],
  providers: [NavbarComponent]
})
export class ListviewComponent implements OnInit {
  listView: any;
  searched = false;
  _data: any = { 'ad_type': 'buy', 'ad_category': 'electronics' }
  constructor(private filterPipe: FilterPipe, private location: Location, private router: Router, private activatedRoute: ActivatedRoute, private commonService: CommonService) { }

  ngOnInit() {
    sessionStorage.setItem('post', 'false');
    this.activatedRoute.params.subscribe(data => {
      try {


        console.log("wwe",this._data);
       

        if( window.location.pathname.split(';')[1].split('=')[1] == 'rent'){
          this._data = { 
            'ad_type':  'rent', 
          'ad_category': '' };
          console.log("im here",this._data);
        }else{

          
          window.location.pathname.split(';')[1].split("=")
          
          this._data = { 
            'ad_type':  window.location.pathname.split(';')[1].split("=")[1], 
            'ad_category': decodeURIComponent(window.location.toString()).split(';')[2].split("=")[1].trim() };
            console.log("first",this._data);
            
            
            
          }

      
       
        this.commonService.getAdType(this._data).subscribe(value => {
          this.listView = value.data;
        })

      } catch (error) {
        console.log(error);
      }

    })
  }

  redirectToPost(id: any) {
    this.router.navigate(['post', { id: id }])
  }

  back() {
    this.location.back();
  }

  searchAds(val: any) {
    if (val !== null && val !== undefined && val !== '') {
      console.log("second",this._data);
      this.commonService.getAdType(this._data).subscribe(data => {
        this.listView = data.data;
        this.listView = this.filterPipe.transform(this.listView, { title: val })
      });
    } else {
      this.ngOnInit();
    }
    this.searched=true
  }
}
