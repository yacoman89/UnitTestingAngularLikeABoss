import { HeroesComponent } from "../heroes/heroes.component";
import { HeroService } from "../hero.service";
import { of } from "rxjs/observable/of";

describe('HeroesComponent (Isolated)', () => {
    let component: HeroesComponent;
    let HEROES: Array<{ id: number, name: string, strength: number }>;
    let mockHeroesService: jasmine.SpyObj<HeroService>;

    beforeEach(() => {
        HEROES = [
            {id: 1, name: 'hero1', strength: 8},
            {id: 2, name: 'hero2', strength: 24},
            {id: 3, name: 'hero3', strength: 55},
        ];
        mockHeroesService = jasmine.createSpyObj(['deleteHero']);
        component = new HeroesComponent(mockHeroesService);
    });
    
    describe('delete', () => {
        it('should remove the selected hero from the heroes list', () => {
            mockHeroesService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROES;
            component.delete(HEROES[2]);
            expect(component.heroes).toEqual([HEROES[0], HEROES[1]]);
        });

        it('should call deleteHero from HeroesService with the selected hero', () => {
            mockHeroesService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROES;
            component.delete(HEROES[2]);
            expect(mockHeroesService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
        });
    });
});