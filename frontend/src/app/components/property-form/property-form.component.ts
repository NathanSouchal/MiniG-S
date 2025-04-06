import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PropertyService, Property } from '../../services/property.service';

@Component({
  selector: 'app-property-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './property-form.component.html',
})
export class PropertyFormComponent {
  property: Property = {
    name: '',
    address: '',
    year: 2000,
    numberOfHousingUnits: 1,
  };

  constructor(private propertyService: PropertyService) {}

  onSubmit(): void {
    this.propertyService.create(this.property).subscribe({
      next: (newProp) => {
        console.log('Créé avec succès :', newProp);
        this.property = { name: '', address: '', year: 2000, numberOfHousingUnits: 1 };
      },
      error: (err) => console.error('Erreur création', err)
    });
  }
}
