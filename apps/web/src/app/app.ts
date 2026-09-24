import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly topNavigation = ['Projects', 'Models', 'Reports', 'Settings'];

  readonly workspaceTools = [
    'Inspect',
    'Measure',
    'Defects',
    'DICOM',
    'Calculators',
    'Data',
  ];

  readonly activeTool = 'Inspect';
  readonly selectedImageName = signal<string | null>(null);

  selectImage(event: Event): void {
    const input = event.target as HTMLInputElement;
    const selectedFile = input.files?.[0];

    if (!selectedFile) {
      return;
    }

    this.selectedImageName.set(selectedFile.name);
  }

  resetInspection(): void {
    this.selectedImageName.set(null);
  }
}
