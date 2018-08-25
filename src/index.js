import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './Carousel'
import './reset.css'

const horses = [{
  id: 1,
  src: 'https://instagram.ftpe8-4.fna.fbcdn.net/vp/de80125875cac30dc6716791590cb37e/5C1373BE/t51.2885-15/e35/35575128_210401189599776_3094313290096967680_n.jpg',
  message: '祝你結婚快樂，親愛的老哥：恭喜你尋尋覓覓多年，終於在即將邁入不惑之年的大關前，找到一個願和你攜手共渡一生的伴侶。一二三四五六七八九十，一二三四五六七八九十！一二三四五六七八九十？一二三四五六七八九十！',
  author: '阿妹',
}, {
  id: 2,
  src: 'https://instagram.ftpe8-4.fna.fbcdn.net/vp/31ea65f95d3e224f82a910062a0b3411/5C0329CE/t51.2885-15/e35/34453649_1764603450244938_52200925141401600_n.jpg',
  message: '又過了一天，我過的是什麼時間，距離好遙遠，重複的假笑沒人發現是種欺騙',
  author: '紀培偉',
}, {
  id: 3,
  src: 'https://instagram.ftpe8-4.fna.fbcdn.net/vp/837599b5be6dbe325ec3ba468715313e/5BFE3702/t51.2885-15/e35/36507944_399272157249257_2791444342550560768_n.jpg',
  message: '不是怕被忽略，是過份渴望了黑夜，徹底一片，安靜到只剩下冰川碰撞的嗚咽',
  author: '鍾國衍',
}, {
  id: 4,
  src: 'https://instagram.ftpe8-4.fna.fbcdn.net/vp/1a64cc9904d8604c67bd5bbf7f29723d/5BFF8E8B/t51.2885-15/e35/38072534_2108943652759989_1233521943215341568_n.jpg',
  message: '是怎樣的小心翼翼，建立起憂鬱又輕易毀掉僅存的生氣',
  author: '林茉莉',
}, {
  id: 5,
  src: 'https://instagram.ftpe8-4.fna.fbcdn.net/vp/908b558fc2ca9402543d275bbd36a4bc/5C08DE79/t51.2885-15/e35/36086399_489874088137019_8816692484223533056_n.jpg',
  message: "Don't cry. Don't cry. 大雨裡的烏雲啊請帶我離開",
  author: '劉巧藝',
}, {
  id: 6,
  message: "Don't cry. Don't cry. 就不用害怕靠不到岸的大海",
  author: '楊若娃',
}];

const cover =
  'https://instagram.ftpe8-4.fna.fbcdn.net/vp/1b46ddf1376fb277172c89df19257183/5BF88763/t51.2885-15/e35/38661878_698844127165276_8424350253980844032_n.jpg';


ReactDOM.render(<Carousel horses={horses} cover={cover} />, document.getElementById('root'));

