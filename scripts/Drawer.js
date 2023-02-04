class Drawer {
  constructor({ drawer, overlay, btnOpen, btnClose }) {
    this.$drawer = $(drawer);
    this.$overlay = $(overlay);
    this.$btnOpen = $(btnOpen);
    this.$btnClose = $(btnClose);

    this.$btnOpen.on("click", () => this.openDrawerHandler());
    this.$btnClose.on("click", () => this.closeDrawerHandler());
  }

  openDrawerHandler() {
    this.$overlay.removeClass("opacity-0");
    this.$drawer.removeClass("translate-x-full");

    $(document.body).addClass("overflow-hidden");
  }

  closeDrawerHandler() {
    this.$overlay.addClass("opacity-0");
    this.$drawer.addClass("translate-x-full");

    $(document.body).removeClass("overflow-hidden");
  }
}
