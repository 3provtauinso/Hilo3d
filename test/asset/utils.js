var utils = {
    /**
     * 触发点击事件
     * @param  {Element} elem dom元素
     */
    click: function(elem) {
        var ev = document.createEvent("MouseEvent");
        ev.initMouseEvent(
            "click",
            true /* bubble */ , true /* cancelable */ ,
            window, null,
            0, 0, 0, 0, /* coordinates */
            false, false, false, false, /* modifier keys */
            0 /*left*/ , null
        );
        elem.dispatchEvent(ev);
    },
    /**
     * 与截图对比差异
     * @param  {[type]}   name  对比图名字
     * @param  {Function} done
     * @param  {Object} tolerantCfg 容错配置
     * @param  {Number} tolerantCfg.value 允许颜色最大的差值 默认为5
     * @param  {Number} tolerantCfg.num 允许错误像素点数量 默认为10
     * */
    diffWithScreenshot: function(name, done, tolerantCfg) {
        var that = this;
        that.takeScreenshot(name, function(screenshotImg) {
            if (screenshotImg) {
                utils.loadImage('./expectScreenshot/' + name + '.png', function(specImg) {
                    if (specImg) {
                        var diff = utils.diffImage(screenshotImg, specImg);
                        console.log('      (imageDiff:' + diff + ')');
                        if (diff < 16) {
                            done();
                        } else {
                            done(new Error('diff image error:' + name + ', diff:' + diff));
                        }
                    } else {
                        console.log('no spec image:' + name);
                        done();
                    }
                });
            } else {
                setTimeout(function() {
                    done();
                }, 100);
            }
        });
    },
    /**
     * 截屏
     * @param  {String} name 图片名
     * @param  {Function} callback 回调
     */
    takeScreenshot: function(name, callback, context) {
        var that = this;
        setTimeout(function(){
            _macaca_uitest.screenshot(name + '.png', function() {
                if (callback) {
                    if (context) {
                        _macaca_uitest.appendToContext(context, '../reports/screenshots/' + name + '.png');
                    }
                    that.loadImage('../reports/screenshots/' + name + '.png', callback, context);
                }
            });

        }, window._IS_CI ? 1000 : 100);
    },
    /**
     * 加载图片
     * @param  {String} src 图片地址
     * @param  {Function} callback 加载回调，成功会传image参数，失败传null
     */
    loadImage: function(src, callback) {
        var img = new Image();
        img.onerror = function() {
            callback && callback(null);
        };
        img.onload = function() {
            callback && callback(img);
        };
        img.src = src;
    },
    /**
     * 对比图像是否相同
     * @param  {Image|String} img0
     * @param  {Image|String} img1
     * @param  {Object} tolerantCfg 容错配置
     * @param  {Number} tolerantCfg.value 允许颜色最大的差值 默认为5
     * @param  {Number} tolerantCfg.num 允许错误像素点数量 默认为10
     * @return {Boolean} 是否相同
     */
    diffImage: function(img0, img1, tolerantCfg) {
        if (img0.width !== img1.width || img0.height !== img1.height) {
            return false;
        } else {
            var imgData0 = this.getImageData(img0);
            var imgData1 = this.getImageData(img1);
            var diff = pixelmatch(imgData0, imgData1, null, img0.width, img0.height, {
                threshold: 0.05,
                includeAA: false
            });
            return diff;
        }
    },
    /**
     * 获取图片数据
     * @param  {Image} img 图片
     * @return {Array} imageData
     */
    getImageData: function(img) {
        this._cacheCanvas = this._cacheCanvas || document.createElement('canvas');
        var canvas = this._cacheCanvas;
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        var data = ctx.getImageData(0, 0, img.width, img.height).data;
        return data;
    },
    createHilo3dEnv(forceNew) {
        if (forceNew || !this._env) {
            const camera = new Hilo3d.PerspectiveCamera();
            const stage = new Hilo3d.Stage({
                camera: camera
            });
            stage.tick();
            const renderer = stage.renderer;
            const lightManager = renderer.lightManager;
            const gl = renderer.gl;
            const state = renderer.state

            const material = new Hilo3d.Material;
            const geometry = new Hilo3d.MorphGeometry;
            const mesh = new Hilo3d.Mesh({
                material,
                geometry
            });
            const fog = new Hilo3d.Fog;
            stage.addChild(mesh);
            this._env = {
                stage,
                camera,
                renderer,
                gl,
                state,
                geometry,
                material,
                mesh,
                fog
            };
        }

        return this._env;
    }
};

var EPSILON = 1e-7;
should.Assertion.add('equalishValues', function() {
    var actual = Array.prototype.slice.call(this.obj);
    var expected = Array.prototype.slice.call(arguments);

    this.params = { operator: 'to be equal' , actual:actual, expected:expected};

    should(actual.length).above(0);

    for (var i = 0, l = actual.length; i < l; i++) {
        Math.abs(actual[i] - expected[i]).should.below(EPSILON);
    }
});

should.Assertion.add('equalish', function(expected) {
    var actual = this.obj;
    this.params = { operator: 'to be equal' , actual:actual, expected:expected};
    
    if(isNaN(actual) || isNaN(expected)){
        isNaN(actual).should.be.equal(isNaN(expected))
    }
    else{
        Math.abs(actual - expected).should.below(EPSILON);
    }
});