import { Routes } from "@angular/router";
import { LoggedInGuard } from "./logged-in.guard";
import { AnonGuard } from "./anon.guard";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { FilesComponent } from "./files/files.component";
import { SettingsComponent } from "./settings/settings.component";
import { TasksComponent } from "./tasks/tasks.component";
import { OfflineComponent } from "./offline/offline.component";
import { MapComponent } from "./map/map.component";
import { ChatComponent } from "./chat/chat.component";
import { ArComponent } from "./ar/ar.component";
import { LoginComponent } from "./login/login.component";
import { AddTaskComponent } from "./tasks/add-task/add-task.component";
import { FileDetailsComponent } from "./files/file-details/file-details.component";
import { LayoutComponent } from "./layout/layout.component";
import { AccountsComponent } from "./accounts/accounts.component";
import { AccountDetailsComponent } from "./accounts/account-details/account-details.component";
import { TaskDetailsComponent } from "./tasks/task-details/task-details.component";
import { ExpensesComponent } from "./expenses/expenses.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { AppointmentComponent } from "./calendar/appointment/appointment.component";
import { DonationComponent } from "./donation-eligibility/donation.component";
import { QuizComponent } from "./donation-eligibility/quiz/quiz.component";

export const routes: Routes = [
  {
    path: "",
    canActivate: [LoggedInGuard],
    component: LayoutComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", component: HomeComponent },
      { path: "products", component: ProductsComponent },
      { path: "accounts", component: AccountsComponent },
      { path: "account-details/:id", component: AccountDetailsComponent },
      { path: "files", component: FilesComponent },
      { path: "files/details", component: FileDetailsComponent },
      { path: "settings", component: SettingsComponent },
      { path: "tasks", component: TasksComponent },
      { path: "tasks/add-task", component: AddTaskComponent },
      { path: "task-details/:id", component: TaskDetailsComponent},
      { path: "offline", component: OfflineComponent },
      { path: "map", component: MapComponent },
      { path: "chat", component: ChatComponent },
      { path: "ar", component: ArComponent },
      { path: "expenses", component: ExpensesComponent },
      { path: "calendar/:id", component: CalendarComponent},
      { path: "appointment", component: AppointmentComponent},
      { path: "donation-eligibility", component: DonationComponent},
      { path: "donation-eligibility/quiz", component: QuizComponent}
    ]
  },
  { path: "login", component: LoginComponent, canActivate: [AnonGuard] }
]; //{ path: "", redirectTo: "products", pathMatch: "full" },
