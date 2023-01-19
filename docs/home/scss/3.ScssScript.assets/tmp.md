## 八、控制指令

### 1.`if()`

_三元运算符_

表达式：`if(expression, value1, value2)`

```scss
p {
  color: if(1 + 1 = 2, green, yellow);
}

// compile:
p {
  color: green;
}
```

### 2.`@if`

_条件语句_

当 `@if` 的表达式返回值不是 `false` 或者 `null` 时，条件成立，输出 `{}` 内的代码

`@if` 声明后面可以跟多个 `@else if` 声明，或者一个 `@else` 声明。如果 `@if` 声明失败，Sass 将逐条执行 `@else if` 声明，如果全部失败，最后执行 `@else` 声明

- `单@if`

  ```scss
  p {
    @if 1 + 1 == 2 {
      color: red;
    }
  }

  // compile:
  p {
    color: red;
  }
  ```

- `@if - @else`

  ```scss
  p {
    @if 1 + 1 != 2 {
      color: red;
    } @else {
      color: blue;
    }
  }

  // compile:
  p {
    color: blue;
  }
  ```

- `@if - @else if - @else`

  ```scss
  $age: 19;

  p {
    @if $age == 18 {
      color: red;
    } @else if $age == 19 {
      color: blue;
    } @else {
      color: green;
    }
  }

  // compile:
  p {
    color: blue;
  }
  ```

### 3.`@for`

_循环语句_

表达式：`@for $var from <start> through <end>` 或 `@for $var from <start> to <end>`

through 和 to 的相同点与不同点：

- 相同点：两者均包含<start>的值
- 不同点：through 包含<end>的值，但 to 不包含<end>的值

```scss
@for $i from 1 through 3 {
  .item-#{$i} {
    width: 2em * $i;
  }
}

// compile:
.item-1 {
  width: 2em;
}
.item-2 {
  width: 4em;
}
.item-3 {
  width: 6em;
}
```

### 4.`@while`

_循环语句_

表达式：`@while expression`

`@while` 指令重复输出格式直到表达式返回结果为 `false`。这样可以实现比 `@for` 更复杂的循环，只是很少会用到

```scss
$i: 6;
@while $i > 0 {
  .item-#{$i} {
    width: 2em * $i;
  }
  $i: $i - 2;
}

// compile:
.item-6 {
  width: 12em;
}
.item-4 {
  width: 8em;
}
.item-2 {
  width: 4em;
}
```

### 5.`@each`

_循环语句_

表达式：`$var in $vars`

`$var` 可以是任何变量名

`$vars` 只能是`Lists`或者`Maps`

- 一维列表

  ```scss
  @each $animal in puma, sea-slug, egret, salamander {
    .#{$animal}-icon {
      background-image: url("/images/#{$animal}.png");
    }
  }

  // compile:
  .puma-icon {
    background-image: url("/images/puma.png");
  }
  .sea-slug-icon {
    background-image: url("/images/sea-slug.png");
  }
  .egret-icon {
    background-image: url("/images/egret.png");
  }
  .salamander-icon {
    background-image: url("/images/salamander.png");
  }
  ```

- 二维列表

  ```scss
  @each $animal, $color, $cursor in (puma, black, default), (
      sea-slug,
      blue,
      pointer
    ), (egret, white, move)
  {
    .#{$animal}-icon {
      background-image: url("/images/#{$animal}.png");
      border: 2px solid $color;
      cursor: $cursor;
    }
  }

  // compile:
  .puma-icon {
    background-image: url("/images/puma.png");
    border: 2px solid black;
    cursor: default;
  }
  .sea-slug-icon {
    background-image: url("/images/sea-slug.png");
    border: 2px solid blue;
    cursor: pointer;
  }
  .egret-icon {
    background-image: url("/images/egret.png");
    border: 2px solid white;
    cursor: move;
  }
  ```

- maps

  ```scss
  @each $header, $size in (h1: 2em, h2: 1.5em, h3: 1.2em) {
    #{$header} {
      font-size: $size;
    }
  }

  // compile:
  h1 {
    font-size: 2em;
  }
  h2 {
    font-size: 1.5em;
  }
  h3 {
    font-size: 1.2em;
  }
  ```

---
