import { shallowMount } from "@vue/test-utils";
import TextComponent from "../../src/components/TextComponent.vue";

describe("TextComponent.vue", () => {
  it("renders props when passed", () => {
    const headline = "Headline";
    const content = ["content"];
    const wrapper = shallowMount(TextComponent, {
      props: {
        headline,
        content,
      },
    });
    expect(wrapper.find("h2").text()).toMatch(headline);
    expect(wrapper.find("p").text()).toMatch(content[0]);
  });
});
