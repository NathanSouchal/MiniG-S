import { Component, OnInit } from '@angular/core';
import { PropertyService, Property } from '../../services/property.service';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-property-list',
  imports: [CommonModule],
  templateUrl: './property-list.component.html'
})
export class PropertyListComponent implements OnInit {
  properties: Property[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.propertyService.getAll().subscribe((data) => {
      this.properties = data;
    });
  }
}
