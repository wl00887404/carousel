import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './Carousel'
import './reset.css'

const horses = [{
  id: 1,
  src: 'https://s3-ap-northeast-1.amazonaws.com/wl00887404/yuniko0720/0.jpg',
  message: '祝你結婚快樂，親愛的老哥：恭喜你尋尋覓覓多年，終於在即將邁入不惑之年的大關前，找到一個願和你攜手共渡一生的伴侶。一二三四五六七八九十，一二三四五六七八九十！一二三四五六七八九十？一二三四五六七八九十！',
  author: '阿妹',
}, {
  id: 2,
  src: 'https://s3-ap-northeast-1.amazonaws.com/wl00887404/yuniko0720/1.jpg',
  message: '又過了一天，我過的是什麼時間，距離好遙遠，重複的假笑沒人發現是種欺騙',
  author: '紀培偉',
}, {
  id: 3,
  src: 'https://s3-ap-northeast-1.amazonaws.com/wl00887404/yuniko0720/2.jpg',
  message: '不是怕被忽略，是過份渴望了黑夜，徹底一片，安靜到只剩下冰川碰撞的嗚咽',
  author: '鍾國衍',
}, {
  id: 4,
  src: 'https://s3-ap-northeast-1.amazonaws.com/wl00887404/yuniko0720/3.jpg',
  message: '是怎樣的小心翼翼，建立起憂鬱又輕易毀掉僅存的生氣',
  author: '林茉莉',
}, {
  id: 5,
  src: 'https://s3-ap-northeast-1.amazonaws.com/wl00887404/yuniko0720/4.jpg',
  message: "Don't cry. Don't cry. 大雨裡的烏雲啊請帶我離開",
  author: '劉巧藝',
}, {
  id: 6,
  message: "Don't cry. Don't cry. 就不用害怕靠不到岸的大海",
  author: '楊若娃',
}];

const cover =
  'https://s3-ap-northeast-1.amazonaws.com/wl00887404/yuniko0720/5.jpg';


ReactDOM.render(<Carousel horses={horses} cover={cover} />, document.getElementById('root'));

