import {lerp} from './../Math/Lerp'
export default class Scroll {
    constructor() {
        this.settings = {
            wrapperSpeed: 0.16,
            targetSpeed: 0.02,
            targetPercentage: 0.1
        }
        this.wapperOffset = 0;
        this.windowHeight = 0;
        this.scrollTop = 0;
    }
    init({
        container
    }) {
        this.wrapper = container
        this.wrapper.style.position = 'fixed'
        this.wrapper.style.width = '100%'
        this.wrapper.style.height = 'auto'
        this.resize();
        this.animate();
    }
    render() {
        this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        this.wrapperUpdate()
    }
    animate() {
        this.render();
        this.scrollId = requestAnimationFrame(this.animate.bind(this));
    }
    wrapperUpdate() {
        const oldY = this.wapperOffset
        this.wapperOffset = lerp(this.wapperOffset, this.scrollTop, this.settings.wrapperSpeed);
        const direction = oldY >= this.wapperOffset
        this.wrapper.style.transform = 'translate3d(' + 0 + ',' + Math.round(-this.wapperOffset * 100) / 100 + 'px ,' + 0 + ')';
    }
    lockScreen() {
        this.windowHeight = window.innerHeight;
        document.body.style.height = this.windowHeight + 'px';
    }
    update(resetScroll = true) {
        document.body.style.height = this.wrapper.clientHeight + 'px';
        if (resetScroll) {
            window.scroll(0, 0)
            this.scrollTop = 0
            this.wapperOffset = 0
        }
    }
    resize() {
        this.update()
        this.windowHeight = window.innerHeight;
    }
}
