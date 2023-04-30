import App from "@/App.vue";
import {shallowMount} from "@vue/test-utils";

describe("App.vue",()=>{
    it("renderiza componete",()=>{
        const wrapper = shallowMount(App);
        expect(wrapper.emitted("render"))
            .toMatchObject([[]])
    })
})