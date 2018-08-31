import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { DataService } from "./data.service";
import { LoggedInAuthGuard, AnonAuthGuard } from "./auth-guard";
import { NativeChatModule } from "@progress-nativechat/nativescript-nativechat/angular";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import * as platform from "platform";
declare var GMSServices: any;
if (platform.isIOS) {
  GMSServices.provideAPIKey("AIzaSyCSln6LZF0vbnI23oGPpoQsYLbETImR3QQ");
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptUISideDrawerModule,
    NativeScriptFormsModule,
    NativeChatModule
  ],
  providers: [DataService, LoggedInAuthGuard, AnonAuthGuard],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}