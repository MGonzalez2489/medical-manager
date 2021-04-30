export class SideBarModel {
  private sideBarMode = {
    over: 'over', //This is the default mode. The sidebar slides in over the page contents.
    push: 'push', //The page contents is pushed to make space for the sidebar.
    slide: 'slide', //The entire page slides over to show the sidebar. Note that this only works if you have one sidebar open at a time.
  };

  isOpened: boolean;
  closeOnClickOutside: boolean;
  mode;
  showBackdrop: boolean;

  constructor() {
    this.desktopView();
  }
  desktopView(): void {
    this.isOpened = true;
    this.closeOnClickOutside = false;
    this.mode = this.sideBarMode.push;
    this.showBackdrop = false;
  }
  mobileView(): void {
    this.mode = this.sideBarMode.over;
    this.showBackdrop = true;
    this.closeOnClickOutside = true;
    this.isOpened = false;
  }
  openCloseSideBar() {
    this.isOpened = !this.isOpened;
  }
}
