import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ROUTES } from "./ar.common";

@NgModule({
  imports: [NativeScriptRouterModule.forChild(ROUTES)],
  exports: [NativeScriptRouterModule]
})
export class ArRoutingModule {}