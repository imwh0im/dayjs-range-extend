import dayjs from 'dayjs'
import range from '../src'

dayjs.extend(range)

const res = dayjs.range(dayjs('2021-05-10'), dayjs('2021-05-15'));
console.log(res);
