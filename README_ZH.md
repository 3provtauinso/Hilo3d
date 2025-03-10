[English](./README.md) | 简体中文

<p align="center"><img src="https://gw.alicdn.com/tfs/TB1znqbquT2gK0jSZFvXXXnFXXa-569-143.svg" alt="omi" width="500"/></p>
<h3 align="center">一个 3D WebGL 渲染引擎</h3>

---
[安装](#安装) • [文档](#文档) • [开发](#开发) • [案例](#案例) • [特性例子](#特性例子) • [作者](#作者) • [许可证](#许可证)

[![npm][npm-image]][npm-url] [![ci][ci-image]][ci-url] [![size][size-image]][cdn-url] [![gitter.im][gitter-image]][gitter-url]

### 特性
* Compatible for multiple mobile and desktop browsers.
* Lightweight, only `110kb` after gzip.
* Physically-based rendering support.
* Perfect support for glTF models.

### 安装
* 使用 npm

    ```
    $ npm install hilo3d
    ```
* 使用 script 标签加载 [cdn][cdn-url]

    ```
   <script src='//cdn.jsdelivr.net/npm/hilo3d@1.19.0/build/Hilo3d.js'></script>
    ```

### 文档
* [API 文档](https://hilo3d.js.org/docs/index.html)
* [教程](https://github.com/hiloteam/article/issues?q=is%3Aissue+is%3Aopen+label%3AHilo3d)

### 开发
* 运行 `npm run dev` 开发。
* 运行 `npm run release` 发布代码。
* 运行 `npm run doc` 生成 api 文档。
* 运行 `npm run test` 运行测试用例。

### 案例
* 淘宝人生
  
  ![淘宝人生](https://raw.githubusercontent.com/06wj/06wj.github.com/master/images/hilo3d/tbrs.gif)

* 堆堆乐
  
  ![堆堆乐](https://raw.githubusercontent.com/06wj/06wj.github.com/master/images/hilo3d/ddl.gif)

* 天天惠星球

  ![天天惠星球](https://raw.githubusercontent.com/06wj/06wj.github.com/master/images/hilo3d/tthxq.gif)

* 更多案例见这里: 
  [![](https://gw.alicdn.com/tfs/TB1rngb0pT7gK0jSZFpXXaTkpXa-2048-1009.jpg)](https://seinjs.com/cn/production)


### 特性例子 

  * [Index.html](https://hilo3d.js.org/docs/index.html)
  * glTF
    * [glTF Feature Test](https://cx20.github.io/gltf-test/?engines=Hilo3d)
    * [glTF Viewer](https://hilo3d.js.org/examples/glTFViewer/index.html)

  * loader
    * [gltf_loader](https://hilo3d.js.org/examples/loader/glTF_loader.html)
    * [gltf_clone](https://hilo3d.js.org/examples/loader/glTF_clone.html)
    * [osg](https://hilo3d.js.org/examples/loader/osg/osg_loader.html)
    * [smd](https://hilo3d.js.org/examples/loader/smd/smd_loader.html)
    * [tga](https://hilo3d.js.org/examples/loader/tga/tga_loader.html)
    * [khc](https://hilo3d.js.org/examples/loader/khc/khc.html)
    * [shader](https://hilo3d.js.org/examples/loader/shader/shader_loader.html)
    * [draco](https://hilo3d.js.org/examples/loader/draco/draco_loader.html)
  * [compressed_texture](https://hilo3d.js.org/examples/compressed_texture.html)
  * [fog](https://hilo3d.js.org/examples/fog.html)
  * [mesh_picker](https://hilo3d.js.org/examples/mesh_picker.html)
  * [mouse_event](https://hilo3d.js.org/examples/mouse_event.html)
  * [video](https://hilo3d.js.org/examples/video.html)
  * [hdr](https://hilo3d.js.org/examples/hdr.html)
  * [lifegame](https://hilo3d.js.org/examples/lifegame.html)
  * [normal_map](https://hilo3d.js.org/examples/normal_map.html)
  * [pbr](https://hilo3d.js.org/examples/pbr.html)
  * [pbr2](https://hilo3d.js.org/examples/pbr2.html)
  * [polly](https://hilo3d.js.org/examples/polly.html)
  * [post_process](https://hilo3d.js.org/examples/post_process.html)
  * [raycast](https://hilo3d.js.org/examples/raycast.html)
  * [raycast_node](https://hilo3d.js.org/examples/raycast_node.html)
  * [shader_material](https://hilo3d.js.org/examples/shader_material.html)
  * [shadow](https://hilo3d.js.org/examples/shadow.html)
  * [skybox](https://hilo3d.js.org/examples/skybox.html)
  * [sphereEnvMap](https://hilo3d.js.org/examples/sphereEnvMap.html)
  * [spotLight](https://hilo3d.js.org/examples/spotLight.html)
  * [ssao](https://hilo3d.js.org/examples/ssao.html)
  * [texture_data](https://hilo3d.js.org/examples/texture_data.html)
  * [transparent](https://hilo3d.js.org/examples/transparent.html)
  * [webgl_support](https://hilo3d.js.org/examples/webgl_support.html)
  * [wireframe](https://hilo3d.js.org/examples/wireframe.html)
  * [geometry_box](https://hilo3d.js.org/examples/geometry_box.html)
  * [geometry_color](https://hilo3d.js.org/examples/geometry_color.html)
  * [geometry_custom](https://hilo3d.js.org/examples/geometry_custom.html)
  * [geometry_dynamic](https://hilo3d.js.org/examples/geometry_dynamic.html)
  * [geometry_dynamic2](https://hilo3d.js.org/examples/geometry_dynamic2.html)
  * [geometry_instanced](https://hilo3d.js.org/examples/geometry_instanced.html)
  * [geometry_merge](https://hilo3d.js.org/examples/geometry_merge.html)
  * [geometry_morph](https://hilo3d.js.org/examples/geometry_morph.html)
  * [geometry_sphere](https://hilo3d.js.org/examples/geometry_sphere.html)



### 作者

 * [06wj](https://github.com/06wj)
 * [steel1990](https://github.com/steel1990)
 * [picacure](https://github.com/picacure)

### 联系我们
  * [![gitter.im][gitter-image]][gitter-url]
  * QQ Group:372765886

### 许可证

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[gitter-image]: https://img.shields.io/badge/GITTER-join%20chat-green.svg?style=flat-square
[gitter-url]: https://gitter.im/hiloteam/Hilo3d?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge
[npm-image]: https://img.shields.io/npm/v/hilo3d.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/hilo3d
[size-image]:https://img.badgesize.io/hiloteam/hilo3d/master/build/Hilo3d.js.svg?compression=gzip&style=flat-square
[ci-url]:https://github.com/hiloteam/Hilo3d/actions?query=workflow%3A%22npm+test%22+branch%3Adev
[ci-image]:https://img.shields.io/github/actions/workflow/status/hiloteam/Hilo3d/npm_test.yml?branch=dev
[cdn-url]: https://cdn.jsdelivr.net/npm/hilo3d@1.19.0/build/Hilo3d.js
