---
imports:
    import {Flex, Pagination, PaginationText} from '../../src/index';
---
## Pagination

两种形式，Pagination PaginationText

提前阅读[分页规范](https://github.com/gmfe/react-gm/wiki/%E5%88%86%E9%A1%B5%E6%A0%BC%E5%BC%8F%E8%A7%84%E8%8C%83)

::: demo 带count
```js
const pagination = {
    count: 70,
    offset: 0,
    limit: 10
};
```
```jsx
<Flex alignCenter>
    <PaginationText data={pagination}/>
    <Pagination data={pagination} toPage={data => console.log(data)}/>
</Flex>
```
:::

::: demo nextVersion
```js
const paginationNew1 = {
    is_first: false,
    is_last: false,
    limit: 10,
    current: 2,
    list: [{__cursor: 1},2,3,4,5,6,7,8,9,{__cursor:10}]
};
const paginationNew2 = {
    peek: 37,
    limit: 10,
    current: 2,
    list: [{__cursor: 1},2,3,4,5,6,7,8,9,{__cursor:10}]
};
```
```jsx
<Flex alignCenter>
    <PaginationText data={paginationNew1} nextVersion/>
    <Pagination nextVersion data={paginationNew1} toPage={data => console.log(data)}/>
</Flex>
<Flex alignCenter>
    <PaginationText data={paginationNew2} nextVersion/>
    <Pagination nextVersion data={paginationNew2} toPage={data => console.log(data)}/>
</Flex>
```
:::

::: demo 不带count
```js
const pagination1 = {
    offset: 0,
    limit: 10
};
```
```jsx
<Flex column>
    <PaginationText data={pagination1}/>
    <Pagination data={pagination1} toPage={data => console.log(data)}/>
</Flex>
```
:::

::: demo 不带count，下一步disable，当前页不足10条（包括0条）的时候
```jsx
<Flex column>
    <Pagination data={pagination1} toPage={data => console.log(data)} nextDisabled={true}/>
</Flex>
```
:::

### Props 

- `data (shape)` 
    * `count (number|isRequired)` 出于性能考虑，有些接口不会返回`count`
    * `offset (number|isRequired)`
    * `limit (number|isRequired)`
- `toPage (func|isRequired)` 提供 `offset` 和 `limit` 回去，直接用此数据请求后台即可

# PaginationText

同上，只是没有回调