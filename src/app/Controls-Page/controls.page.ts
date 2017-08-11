import {Component, OnInit} from '@angular/core';
import {ControlModel} from "../../Models/ControlModel";
import {HttpService} from "../../Services/http.service";
@Component(
  {
    selector: 'controls-page',
    templateUrl: 'controls.page.html',
    providers: []
  }
)
export class ControlsPage implements OnInit {
  Controls: ControlModel[] = [];
  public CreateMode: boolean = false;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getControls()
      .subscribe(
        (data: ControlModel[]) => {
          this.Controls = data;
        }
      );
  }

  AddNewControl() {
    if (this.Controls.filter(a => a.Id == "").length != 0) return;
    this.Controls.push(new ControlModel);
    this.CreateMode = true;
  }

  RemoveControl(index: number) {
    const control = this.Controls[index];
    if (control.Id == "") this.CreateMode = false;
    this.Controls.splice(index, 1);
  }
}
