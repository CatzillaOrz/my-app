import { Injectable } from '@angular/core';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';

@Injectable()       // 注意，我们导入了 Angular 的Injectable函数，并作为@Injectable()装饰器使用这个函数。
export class HeroService {
                            // stub 添加一个名叫getHeros的桩方法。
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
}
