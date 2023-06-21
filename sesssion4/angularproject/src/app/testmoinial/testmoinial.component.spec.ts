import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestmoinialComponent } from './testmoinial.component';

describe('TestmoinialComponent', () => {
  let component: TestmoinialComponent;
  let fixture: ComponentFixture<TestmoinialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestmoinialComponent]
    });
    fixture = TestBed.createComponent(TestmoinialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
