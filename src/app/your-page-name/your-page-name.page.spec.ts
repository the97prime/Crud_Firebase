import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YourPageNamePage } from './your-page-name.page';

describe('YourPageNamePage', () => {
  let component: YourPageNamePage;
  let fixture: ComponentFixture<YourPageNamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourPageNamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YourPageNamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
