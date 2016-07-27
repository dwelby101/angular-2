import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
    selector: 'hero-detail-component',
    templateUrl: 'app/hero-detail.component.html',
    styleUrls: ['app/hero-detail.component.css']

})


export class HeroDetailComponent implements OnInit, OnDestroy {

    hero: Hero;
    sub: any;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute) {
    }

    goBack() {
        window.history.back();
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}