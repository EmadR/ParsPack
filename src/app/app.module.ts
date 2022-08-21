import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MyServiceComponent} from './components/my-service/my-service.component';
import {NzTabsModule} from "ng-zorro-antd/tabs";
import {NzIconModule} from "ng-zorro-antd/icon";
import {IconDefinition} from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import {NzTableModule} from 'ng-zorro-antd/table';
import {FormsModule} from "@angular/forms";
import { ShamsiPipe } from '../shared/pipe/shamsi/shamsi.pipe';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [
    AppComponent,
    MyServiceComponent,
    ShamsiPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzTabsModule,
    FormsModule,
    NzIconModule.forChild(icons),
    NzTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
