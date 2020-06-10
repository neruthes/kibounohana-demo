// Copyright (c) 2020 Neruthes <https://neruthes.xyz>. All rights reserved.
// File: /js/gameDesignData.js

const myGame = {};

myGame.scenes = {
    s0: {
        type: 'title',
        choices: [
            { label: '开始游戏', jump: 's1'}
        ]
    },
    s1: {
        type: 'intro',
        autoJumpNext: 's2',
    },
    s2: {
        type: 'basic',
        dialogue: [
            { char: '莱德', 'text': '真是安静的街道啊。' },
            { char: '奥尔加', 'text': '搜噶。' },
            { char: '莱德', 'text': '我也是加把劲骑士。' },
            { char: '莱德', 'text': '至今以来的努力并非全部木大。只要不停下脚步，道路就会继续。' },
            { char: '...', 'text': '突然一辆车在路口停了下来。车门打开后，冲锋枪的子弹射了过来。' },
            { char: '奥尔加', 'text': '啊啊啊啊啊！（砰、砰、砰）' },
            { char: '奥尔加', 'text': '什么嘛，我射得还挺准的嘛。' },
            { char: '莱德', 'text': '啊，啊……' },
            { char: '奥尔加', 'text': '为什么发出那种声音，莱德。' },
            { char: '莱德', 'text': '竟然为了我这种人……' },
            { char: '奥尔加', 'text': '我是铁华团团长奥尔加伊兹卡，几颗子弹不要紧的。保护团员是我的责任。' },
            { char: '莱德', 'text': '带娃……' },
            { char: '奥尔加', 'text': '易卡，移库奏！' }
        ],
        choices: [
            { label: '标题界面', jump: 's0'},
            { label: '前情提要', jump: 's1'}
        ]
    },
    e0: {
        type: 'final',
        text: [
            ''
        ],
        choices: [
        ]
    },
};
