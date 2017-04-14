import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardNewComponent } from './board-new.component';

describe('BoardNewComponent', () => {
  let component: BoardNewComponent;
  let fixture: ComponentFixture<BoardNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
