import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserResponse } from 'src/app/models/user-response.interface';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
}) //implements OnInit//
export class ImagesComponent {
  user: UserResponse;
  loading: boolean;

  constructor(private imagesService: ImagesService, private route: Router) {
    this.loading = false;

    this.user = {
      page: 0,
      per_page: 0,
      total: 0,
      total_pages: 0,
      data: [],
    };
  }

  ngOnInit(): void {
    this.loading = true;
    this.imagesService.getAllImages().subscribe((user) => {
      this.user = user;
      this.loading = false;
    });
  }
}
