import {Component, OnInit, Input} from '@angular/core';
import {HttpService} from '../../../Services/http.service';
import {InterfaceModel} from '../../../Models/Interfaces';
import {PropertyInfoModel} from '../../../Models/PropertyInfoModel';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';

@Component(
  {
    selector: 'interface',
    templateUrl: 'Interface.component.html',
    styleUrls: ['Interface.component.css'],
    providers: []
  }
)
export class InterfaceComponent implements OnInit {

  @Input('Interface') public Interface: InterfaceModel;
  public Editor: PropertyInfoModel = new PropertyInfoModel;
  public Monitor: PropertyInfoModel = new PropertyInfoModel;
  interfaceForm: FormGroup;
  editorTitle = 'Düzenlenen';
  monitorTitle = 'Gösterilen';


  constructor(private httpService: HttpService, private _fb: FormBuilder) {
  }

  ngOnInit(): void {
    if (this.Interface == null)
      this.Interface = new InterfaceModel()

    this.interfaceForm = this._fb.group({
      Id: new FormControl(this.Interface.Id),
      Name: new FormControl(this.Interface.Name),
      Editor: new FormControl(this.Editor.Id, [Validators.required]),
      Monitor: new FormControl(this.Monitor.Id),
      Value: ''
    });

    this.getEditorInfo();
    this.getMonitorInfo();

    this.onChanges();
  }

  getEditorInfo() {
    if (this.Interface.Editor !== '') {
      this.httpService.getPropertyInfo(this.Interface.Editor)
        .subscribe((data: PropertyInfoModel) => {
            this.Editor = data;
          }
        );
    }
  }

  getMonitorInfo() {
    if (this.Interface.Monitor !== '') {
      this.httpService.getPropertyInfo(this.Interface.Monitor)
        .subscribe((data: PropertyInfoModel) => {
            this.Monitor = data;
          }
        );
    }
  }

  onChanges(): void {
    this.interfaceForm.valueChanges
      .pipe(debounceTime(250))
      .subscribe(val => {
        if (val.Value === this.Editor.Value)
          return;
        console.log('Interface value changed');
        this.httpService.callInterfaceEditor(this.Interface.Id, val.Value).subscribe(result => {
          console.log(result);
          this.getMonitorInfo();
        });
      });
  }

  EditorChanged(PropInfo: PropertyInfoModel): void {
  }

  MonitorChanged(PropInfo: PropertyInfoModel): void {
  }

  Save(form: NgForm): void {
    console.log('Save interface');
    this.httpService.saveInterface(this.interfaceForm.value).subscribe(data => {
      this.Interface = data;
      this.ngOnInit();
    });
  }
}
