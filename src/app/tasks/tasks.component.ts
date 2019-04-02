import { Component, OnInit, NgZone } from "@angular/core";
import { DataService } from "../data.service";
import { DrawerHelper } from "../utils/drawer-helper";
import { Router } from "../utils";
import { Config } from "../config";

import { Push } from 'kinvey-nativescript-sdk/push';

Push.onNotification((data: any) => {
  alert(data.body);
});

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"]
})
export class TasksComponent implements OnInit {
  items;
  title: string;
  constructor(
    private service: DataService,
    private router: Router,
    private zone: NgZone
  ) {}

  ngOnInit() {
    console.log("ON INIT TASKS");
    this.title = Config.tasksPageTitle;
    this.service.getTasks().subscribe(data => {
      this.zone.run(() => {
        this.items = data;
      });
    });
  }
  onDrawerButtonTap(): void {
    DrawerHelper.show();
  }
  addButtonTapped() {
    this.router.navigate(["tasks/add-task"]);
  }
  async markDone(item) {
    await this.service.toggleTaskStatus(item);
  }

  goToDetails(item) {
    //console.log(item);
    this.router.navigate(["task-details", item._id]);
  }
}
