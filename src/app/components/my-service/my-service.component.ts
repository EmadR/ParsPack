import {Component, OnInit} from '@angular/core';
import services from 'src/shared/mock/Services.json';

@Component({
  selector: 'app-my-service',
  templateUrl: './my-service.component.html',
  styleUrls: ['./my-service.component.css']
})

export class MyServiceComponent implements OnInit {
  imageUrl = '/assets/images/icon/';
  data = services.data;
  tabs = [
    {
      name: 'همه سرویس ها',
      icon: `${this.imageUrl}all.png`,
      type: 'All'
    },
    {
      name: 'Hosting',
      icon: `${this.imageUrl}hosting.png`,
      type: 'Hosting'
    },
    {
      name: 'Domain',
      icon: `${this.imageUrl}domain.png`,
      type: 'Domain'
    },
    {
      name: 'Server',
      icon: `${this.imageUrl}server.png`,
      type: 'Server'
    },
    {
      name: 'SSl',
      icon: `${this.imageUrl}ssl.png`,
      type: 'SSl'
    },
    {
      name: 'CDN',
      icon: `${this.imageUrl}cdn.png`,
      type: 'CDN'
    },
    {
      name: 'سایر محصولات',
      icon: `${this.imageUrl}other.png`,
      type: 'Other'
    }
  ];
  searchText: string = '';
  type: string = 'All';

  constructor() {
  }

  ngOnInit(): void {
  }

  selectTab(name: string): void {
    this.type = name;
    this.searchText = '';
    if (name === 'All') {
      this.data = services.data;
    } else {
      this.data = [];
      this.data = services.data.filter((service: any) => service.type === name);
    }
  }

  countOfServices(type: string): number {
    if (type === 'All') {
      return services.data.length;
    } else {
      return services.data.filter((d: any) => d.type === type).length;
    }
  }

  search(): void {
    if (this.searchText.length === 0) {
      this.data = [];
      this.data = this.type === 'All' ? services.data : services.data.filter((d: any) => d.type === this.type);
    } else {
      const data = this.type === 'All' ? services.data : services.data.filter((d: any) => d.type === this.type);
      this.data = data.filter((value: any) => {
        return value.name.indexOf(this.searchText) != -1 ? value : null;
      });
    }
  }

}
