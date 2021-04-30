// YourComponent.stories.ts

import { Meta, Story } from '@storybook/angular';

import { HomeComponent } from './home.component';

// This default export determines where your story goes in the story list
export default {
  title: 'HomeComponent',
  component: HomeComponent,
} as Meta;

const Template: Story<HomeComponent> = (args) => ({
  component: HomeComponent,
  props: args,
});

export const YourStory = Template.bind({});
YourStory.args = {
  /* the args you need here will depend on your component */
};