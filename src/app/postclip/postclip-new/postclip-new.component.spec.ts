import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostclipNewComponent } from './postclip-new.component';

describe('PostclipNewComponent', () => {
  let component: PostclipNewComponent;
  let fixture: ComponentFixture<PostclipNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostclipNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostclipNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
