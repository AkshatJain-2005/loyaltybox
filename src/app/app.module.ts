import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
//import { ItemDetailsPage } from '../pages/item-details/item-details';
//import { ListPage } from '../pages/list/list';

import { FbMediaPage  } from '../pages/fb-media/fb-media';
import { LendingPage   } from '../pages/lending/lending';
import { NotificationPage  } from '../pages/notification/notification';
import {RedemptionPage } from '../pages/redemption/redemption';
import { RewardsPage} from '../pages/rewards/rewards';


@NgModule({
  declarations: [
    MyApp,
    RewardsPage,
    LendingPage,
    NotificationPage,
    FbMediaPage,
    RedemptionPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RewardsPage,
    LendingPage,
    NotificationPage,
    FbMediaPage,
    RedemptionPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
