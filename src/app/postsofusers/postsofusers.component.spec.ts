import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsofusersComponent } from './postsofusers.component';

describe('PostsofusersComponent', () => {
  let component: PostsofusersComponent;
  let fixture: ComponentFixture<PostsofusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsofusersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostsofusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
