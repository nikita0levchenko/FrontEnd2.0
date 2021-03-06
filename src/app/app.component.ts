import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div align="center">
      <img src="../assets/Контракт-на-Awp-hyper-beast-factory-new2.jpg">
    </div>
    <div>
      <div class="dws-menu">
        <header>
          <nav class="dws-menu">
            <input type="checkbox" name="toggle" id="menu" class="toggleMenu">
            <label for="menu" class="toggleMenu"><i class="fa fa-bars"></i>Меню</label>
            <ul>
              <li><a routerLink="">
                <button class="fa fa-newspaper-o" aria-hidden="true"></button>
                Главная</a></li>
              <li><a routerLink="/teams">
                <button class="fa fa-users" aria-hidden="true"></button>
                Команды</a></li>
              <li><a routerLink="/tournaments">
                <button class="fa fa-sitemap" aria-hidden="true"></button>
                Турниры</a></li>
              <li>
                <input type="checkbox" name="toggle" class="toggleSubmenu" id="sub_m4">
                <a>
                  <button class="fa fa-book" aria-hidden="true"></button>
                  Энциклопедия</a>
                <label for="sub_m4" class="toggleSubmenu"><i class="fa"></i></label>
                <ul>
                  <li>
                    <input type="checkbox" name="toggle" class="toggleSubmenu" id="sub_m4.1">
                    <a href="#">Оружие</a>
                    <label for="sub_m4.1" class="toggleSubmenu"><i class="fa"></i></label>
                    <ul>
                      <li>
                        <input type="checkbox" name="toggle" class="toggleSubmenu" id="sub_m4.1.1">
                        <a href="#">Пистолеты</a>
                        <label for="sub_m4.1.1" class="toggleSubmenu"><i class="fa"></i></label>
                        <ul>
                          <li><a href="#">USP Tactical</a></li>
                          <li><a href="#">Glock18</a></li>
                          <li><a href="#">Desert Eagle</a></li>
                          <li><a href="#">P228</a></li>
                          <li><a href="#">Dual Beretta</a></li>
                          <li><a href="#">Five-Seven</a></li>
                        </ul>
                      </li>
                      <li>
                        <input type="checkbox" name="toggle" class="toggleSubmenu" id="sub_m4.1.2">
                        <a href="#">Дробовики</a>
                        <label for="sub_m4.1.2" class="toggleSubmenu"><i class="fa"></i></label>
                        <ul>
                          <li><a href="#">M3 Super90</a></li>
                          <li><a href="#">XM1014</a></li>
                        </ul>
                      </li>
                      <li>
                        <input type="checkbox" name="toggle" class="toggleSubmenu" id="sub_m4.1.3">
                        <a href="#">Автоматы</a>
                        <label for="sub_m4.1.3" class="toggleSubmenu"><i class="fa"></i></label>
                        <ul>
                          <li><a href="#">MP5-Navy</a></li>
                          <li><a href="#">TMP</a></li>
                          <li><a href="#">FN P90</a></li>
                          <li><a href="#">MAC-10</a></li>
                          <li><a href="#">UMP-45</a></li>
                        </ul>
                      </li>
                      <li>
                        <input type="checkbox" name="toggle" class="toggleSubmenu" id="sub_m4.1.4">
                        <a href="#">Штурмовые винтовки</a>
                        <label for="sub_m4.1.4" class="toggleSubmenu"><i class="fa"></i></label>
                        <ul>
                          <li><a href="#">Galil</a></li>
                          <li><a href="#">FAMAS</a></li>
                          <li><a href="#">AK-47</a></li>
                          <li><a href="#">M4A1</a></li>
                          <li><a href="#">Sig 552</a></li>
                          <li><a href="#">Steyr Aug</a></li>
                          <li><a href="#">Steyr Scout</a></li>
                          <li><a href="#">AWP</a></li>
                          <li><a href="#">G3/SG-1</a></li>
                          <li><a href="#">SG-550</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Пулемёт</a></li>
                    </ul>
                  </li>
                  <li>
                    <input type="checkbox" name="toggle" class="toggleSubmenu" id="sub_m4.2">
                    <a href="#">Снаряжение</a>
                    <label for="sub_m4.2" class="toggleSubmenu"><i class="fa"></i></label>
                    <ul>
                      <li><a href="#">Kevlar Vest</a></li>
                      <li><a href="#">Kevlar Vest and Helmet</a></li>
                      <li><a href="#">Flashbang</a></li>
                      <li><a href="#">HE Grenade</a></li>
                      <li><a href="#">Smoke Grenade</a></li>
                      <li><a href="#">Night Vision</a></li>
                      <li><a href="#">Defuse Kit</a></li>
                      <li><a href="#">Knife</a></li>
                      <li><a href="#">C4 Bomb</a></li>
                      <li><a href="#">Flashlight</a></li>
                    </ul>
                  </li>
                  <li>
                    <input type="checkbox" name="toggle" class="toggleSubmenu" id="sub_m4.3">
                    <a href="#">Карты</a>
                    <label for="sub_m4.3" class="toggleSubmenu"><i class="fa"></i></label>
                  </li>
                </ul>
              </li>
              <li><a routerLink="/about">
                <button class="fa fa-phone" aria-hidden="true"></button>
                Контакты</a></li>
            </ul>
          </nav>
        </header>
      </div>
      <router-outlet></router-outlet>
    </div>
    <router-outlet></router-outlet>
  `,
  styles:[`
  header{
    margin-top: 10px;
  }
  `]
})
export class AppComponent {
  title = 'app';
}
