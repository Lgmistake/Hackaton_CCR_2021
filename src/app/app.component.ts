import { Interceptor } from "./config/interceptor";
import { Component, OnInit, DoCheck } from "@angular/core";
import {
  NavigationEnd,
  Event,
  Router,
  NavigationStart,
  NavigationError
} from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "SinnId";

  constructor(private router: Router) {}
  // ngDoCheck(): void {
  //   this.router.navigate(['/contract/my']);
  // }
  ngOnInit() {}
}
