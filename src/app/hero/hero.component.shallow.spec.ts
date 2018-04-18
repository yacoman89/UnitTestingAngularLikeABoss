import { TestBed, ComponentFixture } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";

import { HeroComponent } from "./hero.component";

describe('HeroComponent (shallow)', () => {
    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HeroComponent);
    });

    it('should have the correct hero', () => {
        fixture.componentInstance.hero = {id: 1, name: 'test', strength: 20};
        expect(fixture.componentInstance.hero.name).toEqual('test');
    });

    it('should have a hero name inside an a tag', () => {
        const name = 'test';
        fixture.componentInstance.hero = {id: 1, name: name, strength: 20};
        fixture.detectChanges();
        const htmlElement = (fixture.debugElement.query(By.css('a')).nativeElement as HTMLElement);
        expect(htmlElement.textContent).toContain(name);
    });

    it('should have a hero id inside a span tag', () => {
        const id = 1;
        fixture.componentInstance.hero = {id: id, name: 'test', strength: 20};
        fixture.detectChanges();
        const htmlElement = (fixture.debugElement.query(By.css('a > span')).nativeElement as HTMLElement);
        expect(htmlElement.textContent).toEqual(`${id}`);
    });
});
