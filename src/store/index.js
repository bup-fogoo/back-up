import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const index = new Vuex.Store({
    state: {
        danmukus: [], // 弹幕数据
    },
    mutations: {
        addDanmu(state, danmuData) {
            state.danmukus.push(danmuData); // 将弹幕数据添加到 state 中
        },
    },
    actions: {
        sendDanmu({commit}, danmuData) {
            commit('addDanmu', danmuData); // 提交 mutation 来添加弹幕数据
        },
    },
    getters: {
        getDanmukus(state) {
            return state.danmukus; // 获取弹幕数据
        },
    },
});

export default index;
