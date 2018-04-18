import { TestBed, ComponentFixture } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA, Component, Input, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

import { of } from "rxjs/observable/of";

import { HeroesComponent } from "./heroes.component";
import { HeroComponent } from "../hero/hero.component";
import { HeroService } from "../hero.service";

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
                HeroComponent
            ],
            providers: [
                { provide: HeroService, useValue: mockHeroesService }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HeroesComponent);
    });

    describe('initial rendering', () => {
        it('should render each hero as a HeroComponent', () => {
            mockHeroesService.getHeroes.and.returnValue(of(HEROES));
            fixture.detectChanges();

            const heroComponents = fixture.debugElement.queryAll(By.directive(HeroComponent));
            expect(heroComponents.length).toEqual(HEROES.length);
            
            heroComponents.forEach((heroComponent: DebugElement, index: number) => {
                expect(heroComponent.componentInstance.hero).toBe(HEROES[index]);
            });
        });
    });

    it(`should call heroService.deleteHero when the HeroComponent's delete button is clicked`, () => {
        mockHeroesService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();
        spyOn(fixture.componentInstance, 'delete');
        let heroComponents = fixture.debugElement.queryAll(By.directive(HeroComponent));

        // heroComponents[0].query(By.css('button')).triggerEventHandler('click', {stopPropagation: () => {}});
        // (heroComponents[0].componentInstance as HeroComponent).delete.emit(undefined);
        heroComponents[0].triggerEventHandler('delete', null);
        expect(fixture.componentInstance.delete).toHaveBeenCalledWith(heroComponents[0].componentInstance.hero);
    });
});
