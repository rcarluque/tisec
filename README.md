# TiSec

# Table of Contents
1. ¿Qué es TiSec?
2. Instalación y configuración
3. Funcionamiento en un loop
4. Funcionamiento en estático
1. What is TiSec?
2. Installation and configuration
3. Work in loop
4. Work in static


## Español


### ¿Qué es TiSec?

La librería tiene cómo finalidad conectar una lista de elementos, los cuales podríamos llamar "titulos", con otra lista de elementos, los cuales podríamos llamar "contenido".
Cada contenido corresponde a un titulo, por ejemplo:
Si tenemos en la parte de "titulos" un item llamado ', al hacer clic en dicho item, en el contenido se nos mostrará la sección correspondiente de 'Facturas'. A su vez si nos estamos desplazando por el "contenido", se remarcará el "titulo" correspondiente a dicha sección.

[Ver la demo en github](https://rcarluque.github.io/tisec/)



#### Instalación y configuración

1. Abrir un bash dentro de nuestro proyecto Angular y ejecutar:
```bash
  npm install tisec --save
```


2. Importar TisecModule en app.module
```typescript
  import { NgModule } from '@angular/core';
  import { TisecModule } from 'tisec';

  @NgModule({
      imports: [
        TisecModule
      ],
      bootstrap: [AppComponent]
  })
  export class AppModule {
  }
```


3. En el CSS añadimos la clase .active y la customizamos.
```css
  .active {
    border-left: 4px solid $secondary;
    background-color: $light;
  }
```



#### Funcionamiento en un loop

3. Configurar la parte del Menú
  * Añadir la directive **tcMenu** al *ul* (o cualquier otro mark en el que lo hayamos establecido).
  * Añadir la directiva **tcMenuItem** al sub elemento, en este caso un *li*. Esta directiva a su vez recibe un parametro que debe servir de identificador, cómo la posición del array, una ID, etc.
```html
  <ul tcMenu>
    <li *ngFor="let section of sections" [tcMenuItem]="section.id">{{section.title}}</li>
  </ul>
```


4. Configurar la parte del contenido
  * Añadir la directiva **tcSection** al contenedor en el que se va a encontrar el contenido.
  * Añadirmos la directiva **tcSectionItem** al hijo. Tanto el identificador de menú como el identificador del contenido deben tener el mismo valor.
```html
  <div tcSection>
    <div *ngFor="let section of sections" [tcSectionItem]="section.id">
      ....
      <content-of-section><content-of-section>
      ...
    </div>
  </div>
```



#### Funcionamiento en estático

3. Configurar la parte del Menú
  * Quizás en esta parte se vea más claro el funcionamiento; a un elemento "titulo" le marcamos con la directiva **tcMenuItem** y le asignamos el valor personas.
```html
  <ul tcMenu>
    <li tcMenuItem="personas">Personas Sospechosas</li>
  </ul>
```


4. Configurar la parte del contenido
  * Identificamos la parte del contenido que comprende a personas. Marcamos con la directiva **tcSectionItem** y le asignamos el mismo valor que a la anterior.
  * Ahora ámbos elementos están enlazados.
```html
  <div tcSection>
    <div tcSectionItem="personas">
      <h4>Suspect People</h4>
      <p>Ted Bundy</p>
      <p>Andrei Chikatilo</p>
      <p>Jeffrey Dahmer</p>
      <p>Albert Fish</p>
      <p>Jack the Ripper</p>
    </div>
  </div>
```



## English


### What is TiSec?

This library is intended to connect a list of items, which we could call "titles", with another list of elements, which we could call "content".
Each content corresponds to a title, for example:
If we have an item called 'Invoices' in the "titles" part, when doing clic on that item, the corresponding section of 'Invoices' will be shown in the "content". In turn, if we are moving through the "content", the "title" corresponding to that section will be highlighted.

[View demo on github](https://rcarluque.github.io/tisec/)



#### Installation and configuration

1. Open bash in angular project and excute:
```bash
  npm install tisec --save
```


2. Import TisecModule into app.module
```typescript
  import { NgModule } from '@angular/core';
  import { TisecModule } from 'tisec';

  @NgModule({
      imports: [
        TisecModule
      ],
      bootstrap: [AppComponent]
  })
  export class AppModule {
  }
```


3. Add in CSS .active class and customize it.
```css
  .active {
    border-left: 4px solid $secondary;
    background-color: $light;
  }
```

#### Work in loop

3. Configure Menu part
  * Add **tcMenu** directive to *ul* (or any other mark in which we have established it).
  * Add **tcMenuItem** directive to sub element, *li* in this case. This directive in turn receives a parameter that should serve as an identifier, such as the position of the array, an ID, etc.
```html
  <ul tcMenu>
    <li *ngFor="let section of sections" [tcMenuItem]="section.id">{{section.title}}</li>
  </ul>
```


4. Configure content part
  * Add **tcSection** directive to container in which content is located.
  * Add **tcSectionItem**  directive to child. Both the menu identifier and the content identifier must have the same value.
```html
  <div tcSection>
    <div *ngFor="let section of sections" [tcSectionItem]="section.id">
      ....
      <content-of-section><content-of-section>
      ...
    </div>
  </div>
```



#### Work in static

3. Configure Menu part
  * Perhaps in this case the functioning will be clearer; we mark a "title" element with **tcMenuItem** directive and assign it *people* value.
```html
  <ul tcMenu>
    <li tcMenuItem="people">Personas Sospechosas</li>
  </ul>
```


4. Configure content part
  * Identify the part of the content that includes people. Mark with **tcSectionItem** directive and assign the same value as previous one.
  * Now both elements are linked.
```html
  <div tcSection>
    <div tcSectionItem="people">
      <h4>Suspect People</h4>
      <p>Ted Bundy</p>
      <p>Andrei Chikatilo</p>
      <p>Jeffrey Dahmer</p>
      <p>Albert Fish</p>
      <p>Jack the Ripper</p>
    </div>
  </div>
```



# License

#### MIT License

Copyright (c) 2019 Rafael Carmona Luque

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
