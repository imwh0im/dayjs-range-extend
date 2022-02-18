# clone
All DayjsRange objects are immutable. Still, `dayjsRange#clone` can create a clone of the current object if you need one.

### Example
```ts
import dayjsRange from 'dayjs-range-extend';

const dateRangeFirst = dayjsRange('2022-01-01', '2022-01-05');
const dateRangeSecond = dateRangeFirst;
const dateRangeThird = dateRangeFirst.clone();

dateRangeFirst === dateRangeSecond; // => true
dateRangeFirst === dateRangeThird; // => false
```
