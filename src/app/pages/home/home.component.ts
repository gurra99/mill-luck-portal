import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { GreetsUserComponent } from '../../components/greets-user/greets-user.component';
import { ShortcutsComponent } from '../../components/shortcuts/shortcuts.component';
import { OrderInformationComponent } from '../../components/order-information/order-information.component';
import { NewsComponent } from '../../components/news/news.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    GreetsUserComponent,
    ShortcutsComponent,
    OrderInformationComponent,
    NewsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
