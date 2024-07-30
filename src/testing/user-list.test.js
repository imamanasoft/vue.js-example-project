import { test, expect } from "vitest";
//import mount
import { mount } from "@vue/test-utils";

//import your component
import UsersList from '@/components/UsersList.vue'

test("mount component", async () => {
  expect(UsersList).toBeTruthy();

  const wrapper = mount(UsersList, {
    props: {
      users: [
        { name: 'Anas', email: 'te@sj.xo', password: 'xixoxoxoox' },
        { name: 'Mehdi', email: 'dk@dssss.xod', password: '46658' },
        { name: 'Ayman', email: 'dfffe@ssq.xo', password: 'kjgggg' },
      ]
    },
  });
  expect(wrapper.text()).toContain('Anas');
});