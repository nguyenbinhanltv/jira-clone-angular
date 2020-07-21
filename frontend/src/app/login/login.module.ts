import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from '@trungk18/ng-zorro-antd/ng-zorro-antd.module';

import en from '@angular/common/locales/en';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { registerLocaleData } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { JiraControlModule } from '@trungk18/jira-control/jira-control.module';

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DragDropModule,
    NgZorroAntdModule,
    JiraControlModule,
    NzIconModule.forChild(icons)
  ],
  providers: [
    {
      provide: NZ_I18N, useValue: en_US
    },
    {
      provide: NZ_ICONS, useValue: icons
    }
  ],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
