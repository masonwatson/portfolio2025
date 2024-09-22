import { Component, inject, OnInit } from '@angular/core';
import { TypewriterService } from '../../../../services/typewriter.service';
import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.less',
})
export class FooterComponent implements OnInit {
    typedText$: Observable<any>;

    constructor(
        private readonly typewriterService: TypewriterService,
    ) { }

    ngOnInit() {
        this.typedText$ = this.typewriterService
            .getTypewriterEffect()
            .pipe(map((text) => text));
    }
}
