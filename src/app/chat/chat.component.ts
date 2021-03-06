import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { DrawerHelper } from "../utils/drawer-helper";
import { Config } from "../config";
@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"]
})
export class ChatComponent implements OnInit {
  nativeChatConfig: any;
  title: string;
  constructor() {}

  ngOnInit() {
    this.title = Config.chatPageTitle;
    this.nativeChatConfig = {
      botId: Config.botId,
      channelId: Config.channelId,
      channelToken: Config.channelToken,
      session: {
        clear: true,
        userMessage: "Hello"
      }
    };
  }
  onDrawerButtonTap(): void {
    DrawerHelper.show();
  }
}
