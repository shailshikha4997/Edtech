import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentnotfoundComponent } from './contentnotfound.component';

describe('ContentnotfoundComponent', () => {
  let component: ContentnotfoundComponent;
  let fixture: ComponentFixture<ContentnotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentnotfoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentnotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
