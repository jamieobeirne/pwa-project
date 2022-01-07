import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {
  user: Data;
  show: boolean = false;
  panelOpenState = false;

  constructor(
    private imagesService: ImagesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.user = {
      page: 0,
      per_page: 0,
      total: 0,
      total_pages: 0,
      data: [],
    };
  }

  ngOnInit(): void {
    const identifier: any = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Identifier --> ', identifier);

    this.imagesService.getImageById(identifier).subscribe((user) => {
      if (!user) {
        return this.router.navigateByUrl('/');
      }
      this.user = user.data;
      return;
    });
  }

  toggleDisplay() {
    this.show = !this.show;
  }
}
