import { TestBed, ComponentFixture } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA, Component, Input } from "@angular/core";
import { By } from "@angular/platform-browser";

import { of } from "rxjs/observable/of";

import { HeroesComponent } from "./heroes.component";
import { HeroService } from "../hero.service";
import { Hero } from "../hero";

@Component({
    selector: 'app-hero',
    template: `<div>{{ hero.name }}</div>`
})
class MockHeroComponent {
    @Input() hero: Hero;
}

describe('HeroComponent (shallow)', () => {
    let fixture: ComponentFixture<HeroesComponent>;
    let HEROES: Array<{ id: number, name: string, strength: number }>;
    let mockHeroesService: jasmine.SpyObj<HeroService>;

    beforeEach(() => {
        HEROES = [
            {id: 1, name: 'hero1', strength: 8},
            {id: 2, name: 'hero2', strength: 24},
            {id: 3, name: 'hero3', strength: 55},
        ];
        mockHeroesService = jasmine.createSpyObj(['getHeroes']);
        TestBed.configureTestingModule({
            declarations: [
                HeroesComponent,
                MockHeroComponent
            ],
            providers: [
                { provide: HeroService, useValue: mockHeroesService }
            ]
        });
        fixture = TestBed.createComponent(HeroesComponent);
    });

    describe('ngOnInit', () => {
        it('should set heroes correctly from service', () => {
            mockHeroesService.getHeroes.and.returnValue(of(HEROES));
            fixture.detectChanges();
            expect(fixture.componentInstance.heroes.length).toBe(3);
        });
    });
});
