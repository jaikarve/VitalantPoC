import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ROUTES } from "./files.common";

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class FilesRoutingModule {}
