<p align="center">
    <a href="https://www.npmjs.com/package/dayjs-range-extend">
        <img src="https://img.shields.io/npm/v/dayjs-range-extend.svg?style=flat-square&colorB=51C838" alt="NPM Version" />
    </a>
    <a href="https://github.com/semantic-release/semantic-release">
        <img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg" />
    </a>
    <a href="https://codecov.io/gh/imwh0im/dayjs-range-extend">
      <img src="https://codecov.io/gh/imwh0im/dayjs-range-extend/branch/main/graph/badge.svg?token=JZ8Z0KG42E"/>
    </a>
</p>

# dayjs-range-extend
Range Extends for [dayjs](https://github.com/iamkun/dayjs)

### Installation
  ```sh
  $ npm i --save dayjs-range-extend
  ```

### How to use
  ```typescript
  import 'dayjsRange' from 'dayjs-range-extend';

  const date_range_first = dayjsRange('2022-01-01', '2022-01-05');
  const date_range_second = dayjsRange('2022-01-04', '2022-01-10');

  console.log(
    date_range_first.isOverlap(date_range_second);
  ); // => true
  ```

### Documentaion
  - [dayjsRange](/docs/dayjs-range.md)
  - [isValidRange](/docs/is-valid-range.md)
  - [clone](/docs/clone.md)
  - [isOverlap](/docs/is-overlap.md)
  - [isEqual](/docs/is-equal.md)
  - [addStartRange](/docs/add-start-range.md)
  - [addEndRange](/docs/add-end-range.md)
  - [subtractStartRange](/docs/subtract-start-range.md)
  - [subtractEndRange](/docs/subtract-end-range.md)

#### Link
  - [dayjs](https://github.com/iamkun/dayjs)
