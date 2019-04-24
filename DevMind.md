# Notes for Angular course from Mosh Hamedani

[link](https://github.com/angular/angular-cli) 

## Type assertions
```typescript
message = 'abc';
let endswithC = message.endsWith('c');
let endswithC = (<string>message).endsWith('c'); 
// This is just for the compiler show the intellisense
let aleternativeEndswithC = (message as string).endsWith('c'); 
```

## Arrow Functions
```typescript
//its the same thing
let log = function(message){
	console.log(message)
}
// Its called an arrow function in typescript or lambda expression in others languages like java
let doLog = () => console.log() 
let doLog = (message) => console.log(message)
let doLog = message => console.log(message) 
```

## Modules Custom types && Class && Object ->  
### Class - `Cohesion(things related should go/be together)`
### Access Modifiers -  `public`(by default), `private`, `protected`
### Export - export the class to be used in other places(files)
```typescript
export class Point{
	// private x:number; // -> builded in the construtor
	// private y:number; // -> builded in the construtor
	// y? -> it means its opcional
	constructor( private _x?: number, private _y?: number){
		// this.x = x;
		// this.y = y;
	}
	// Method - because its part of a class... if not it would be a function
	draw(){
		console.log('X: '+ this._x + ', Y: '+ this._y)
	}
	
	get x(){ return this._x}
	set x(value){
		if(value < 0 )
				throw new Error ('value canoot be less than 0.');
		this._x = value;
	}
}
// point is an object (instance of a class)
let point = new Point();
let point = new Point(2,4); // -> with a construtor
point.draw();
```
`Interpolation` -> {{user.name}} 

## Display data && handle events -
## `Property binding` - From component to the DOM and NOT DOM to component-> meaning it wont work for input elements 
```html
<img src = "{{ imageUrl}}"/> <!-- property binding -->
<img [src] = "title"/> <!-- property binding -->
``` 

## `Atribute binding` -  <td [`attr.`colspan]="colSpan"></td>

  Learn difference between DOM(Document Object Model) and HTML - basically we use html to represent DOM in text 
```html
<img [src]="imageUrl"/> <!-- property binding -->
<table>
    <tr>
        <td [attr.colspan]="colSpan"></td>
    </tr>
</table>
```

## `Class binding` 
 ### `HTML`
```html
<button class="btn btn-primary" [class.active]="isActive">
    Save
</button>
```
### `Component`
```typescript
    isActive = true;
```
## `Style Binding` Curso em 4. 6
 ### `HTML`
```html
<button class="btn btn-primary" [class.active]="isActive">
    Save
</button>
```
### `Component`
```typescript
    isActive = true;
```


## Package.json
`^3.3.7` -> major.minor.patch `^` means it will install only at maximum 3.9.9, it will never install version 4.x.x up 

## Pass event data
##### `app.component.html`
```html
<favorite [isFavorite]="post.isFavorite" (change)="onFavoriteChange($event)"> </favorite>
```
##### `favorite.component.ts`
```typescript
    @Input('isFavorite') isSelected: boolean;
    @Output('change') click = new EventEmitter();

    onClick(){
        this.click.emit(this.isSelected);
    }
```
##### `app.component.ts`
```typescript
    @Input('isFavorite') isSelected: boolean;
    @Output() change = new EventEmitter();

    onFavoriteChange(isFavorite){
        console.log("" + isFavorite);
    }
```
## ngSwitch
```html
<div [ngSwitch]="viewMode">
    <div *ngSwitchCase="'map'"> Map View content</div>
    <div *ngSwitchCase="'list'"> list View Content</div>
    <div *ngSwitchDefault> Otherwise...</div>
</div>
```
## trackBy:trackCourse - to improve performance of the page
```html
<ul>
    <li *ngFor="let course of courses; trackBy:trackCourse">
        {{course.name}}
    </li>
</ul>
```
```typescript
    trackCourse(index, course){
        course ? course.id : undefines;
    }
```

## Safe Traversal Operator
```html
    <span> {{ task.assignee?.name }} </span>
```

## Custom types
```typescript

```

## Custom types
```typescript

```

## CLI generate
Run `ng g class hero` to create class hero
Run `ng generate component hero-detail` to generate a component
Run `ng generate service message` to generate a service
Run `ng g d input-format` to generate a custom directive `d`


## Change [port](https://stackoverflow.com/questions/37154813/angular-cli-server-how-to-specify-default-port) 
```json
"projects": {
    "my-cool-project": {
        "architect": {
            "serve": {
                "options": {
                    "port": 1337
                }
            }
        }
    }
}
``` 





