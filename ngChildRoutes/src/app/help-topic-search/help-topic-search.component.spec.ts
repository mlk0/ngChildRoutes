import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpTopicSearchComponent } from './help-topic-search.component';

describe('HelpTopicSearchComponent', () => {
  let component: HelpTopicSearchComponent;
  let fixture: ComponentFixture<HelpTopicSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpTopicSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpTopicSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
