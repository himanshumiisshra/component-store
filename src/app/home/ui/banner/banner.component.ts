import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  template: `
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">hello</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class Banner {}