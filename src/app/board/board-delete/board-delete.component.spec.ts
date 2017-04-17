import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardDeleteComponent } from './board-delete.component';

describe('BoardDeleteComponent', () => {
  let component: BoardDeleteComponent;
  let fixture: ComponentFixture<BoardDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.deleteComponent(BoardDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should delete', () => {
    expect(component).toBeTruthy();
  });
});
