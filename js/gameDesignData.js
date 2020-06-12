// Copyright (c) 2020 Neruthes <https://neruthes.xyz>. All rights reserved.
// File: /js/gameDesignData.js

const myGame = {};

myGame.scenes = {
    s0: {
        type: 'basic',
        dialogue: [
            { char: '奥尔加', bg: '4.png', text: '铁华团就是从要把你送到地球开始的，是你指定我们的吧。' },
            { char: '古荻莉亚', bg: '4.png', text: '是的，我想和同年代却不幸的孩子们共同进退，分担他们的痛苦。' },
            { char: '古荻莉亚', bg: '4.png', text: '当时的想法真是傲慢啊。' },
            { char: '奥尔加', bg: '5.png', text: '不，我很感谢。' },
            { char: '奥尔加', bg: '5.png', text: '你的梦想，一定要实现哦。' },
            { char: '古荻莉亚', bg: '6.png', text: '好的。' },
            { char: '莱德', bg: '7.png', text: '团长。' },
            { char: '莱德', bg: '7.png', text: '备好车了。' },
            { char: '奥尔加', bg: '7.png', text: '好。' },
            { char: '奥尔加', bg: '7.png', text: '那我走了。' },
            { char: '古荻莉亚', bg: '7.png', text: '好的，请小心。' },
            { char: '莱德', bg: '8.png', text: '感觉好安静。' },
            { char: '莱德', bg: '9.png', text: '街上也没有加拉霍恩的人，和总部差别真大。' },
            { char: '奥尔加', bg: '9.png', text: '大概是把火星的战力都调过去了。' },
            { char: '莱德', bg: '10.png', text: '不过那些已经不重要了。' },
            { char: '奥尔加', bg: '10.png', text: '你的心情真好。' },
            { char: '莱德', bg: '10.png', text: '那是当然的。' },
            { char: '莱德', bg: '11.png', text: '大家都能得救，塔卡基也努力着。' },
            { char: '莱德', bg: '11.png', text: '我也是加把劲骑士。' },
            { char: '奥尔加', bg: '12.png', text: '是啊，说的也是。' },
            { char: '奥尔加', bg: '13.png', text: '我们一直以来积累的东西，并非全部木大。' },
            { char: '奥尔加', bg: '14.png', text: '今后也是，只要我们不停下脚步，道路就会不断延伸。' },
            { char: '查德', bg: '15.png', text: '啊！' },
            { char: '...', bg: '16.png', text: '砰砰砰砰砰砰...' },
            { char: '...', bg: '17.png', text: '砰砰砰砰砰砰...' },
            { char: '...', bg: '18.png', text: '...' },
            { char: '莱德', bg: '18.png', text: '团长，你在做什么？团长！' },
            { char: '奥尔加', bg: '19.png', text: '啊啊啊啊！' },
            { char: '...', bg: '19.png', text: '砰！砰！砰！' },
            { char: '...', bg: '20.png', text: '...' },
            { char: '...', bg: '21.png', text: '...' },
            { char: '奥尔加', bg: '22.png', text: '（呼吸声）' },
            { char: '奥尔加', bg: '22.png', text: '什么啊。' },
            { char: '奥尔加', bg: '23.png', text: '我的枪法还挺准的嘛。' },
            { char: '莱德', bg: '23.png', text: '团长...' },
            { char: '莱德', bg: '24.png', text: '啊...' },
            { char: '奥尔加', bg: '25.png', text: '为什么发出那种声音，莱德。' },
            { char: '莱德', bg: '25.png', text: '因为...' },
            { char: '奥尔加', bg: '26.png', text: '我是铁华团团长奥尔加伊兹卡。几颗子弹不要紧的。' },
            { char: '莱德', bg: '27.png', text: '怎么会，你竟然为了我这种人...' },
            { char: '奥尔加', bg: '28.png', text: '保护团员是我的工作。' },
            { char: '莱德', bg: '28.png', text: '可是...' },
            { char: '奥尔加', bg: '29.png', text: '够了，你们走。大家在等着你们。' },
            { char: '奥尔加', bg: '30.png', text: '而且，三日月，我终于懂了。' },
            { char: '奥尔加', bg: '31.png', text: '我们根本不需要最后的落脚处。' },
            { char: '奥尔加', bg: '32.png', text: '只要不断前进就行了。' },
            { char: '奥尔加', bg: '33.png', text: '只要不停下脚步，道路就会不断延伸。' },
            { char: '三日月', bg: '34.png', text: '你要是道歉，我可饶不了你。' },
            { char: '...', bg: '35.png', text: '...' },
            { char: '奥尔加', bg: '36.png', text: '是啊，我明白。' },
            { char: '奥尔加', bg: '37.png', text: '因为我不会停下来的。' },
            { char: '奥尔加', bg: '38.png', text: '只要你们不停下来...' },
            { char: '奥尔加', bg: '39.png', text: '那前面一定就有我。' },
            { char: '...', bg: '40.png', text: '...' },
            { char: '...', bg: '41.png', text: '...' },
            { char: '...', bg: '42.png', text: '...' },
            { char: '...', bg: '43.png', text: '...' },
            { char: '奥尔加', bg: '44.png', text: '所以啊...' },
            { char: '奥尔加', bg: '45.png', text: '不要停下来...' },
            { char: '...', bg: '46.png', text: '...' },
            { char: '...', bg: '47.png', text: '...' },
            { char: '三日月', bg: '48.png', text: '奥尔加？' }
        ],
        choices: [
            {
                label: '再来一次',
                jump: 's0'
            }
        ]
    }
};
