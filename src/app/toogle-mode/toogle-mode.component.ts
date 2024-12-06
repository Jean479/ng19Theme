import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-toogle-mode',
  imports: [],
  templateUrl: './toogle-mode.component.html',
  styleUrl: './toogle-mode.component.scss'
})
export class ToogleModeComponent {

  toogleMode() {
    const htmlRoot = document.querySelector('html');
   /* if(htmlRoot?.className && htmlRoot?.className === 'light-mode')
      htmlRoot?.setAttribute('class', 'dark-mode');
    else
      htmlRoot?.setAttribute('class', 'light-mode'); */

      if(htmlRoot?.className)
        if(htmlRoot.classList.contains('light-mode')) {
          htmlRoot.classList.remove('light-mode');
          htmlRoot.classList.add('dark-mode');
        } else {
          htmlRoot.classList.add('light-mode');
          htmlRoot.classList.remove('dark-mode');
        }
     
  }
}
