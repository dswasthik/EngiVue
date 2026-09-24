import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the EngiVue workbench', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.brand')?.textContent).toContain('EngiVue');
    expect(compiled.querySelector('h1')?.textContent).toContain('Inspection Parameters');
  });

  it('should store and reset the selected image name', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    const file = new File(['inspection image'], 'pump-housing.png', {
      type: 'image/png',
    });
    const event = {
      target: {
        files: [file],
      },
    } as unknown as Event;

    app.selectImage(event);

    expect(app.selectedImageName()).toBe('pump-housing.png');

    app.resetInspection();

    expect(app.selectedImageName()).toBeNull();
  });
});
