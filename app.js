(function(global){

   // 共用一个audio
    var audio = new global.Audio()
   //把秒数转换为分钟的形式
   function convertDuration(duration){
    var m = Math.floor(duration / 60)
    var s = Math.floor(duration % 60)
    return m?m+':'+s : s
   }

   // 把数字补齐三位数的形式
   function completion(num,n){
    return (Array(n).join(0) + num ).slice(-n)
   }

   // 得到script标签中模板内容
   function getTemplate(id){
    // console.log(document.getElementById(id).innerHTML)
      return document.getElementById(id).innerHTML
   }

   var songs = [{ "id": 1, "name": "Knockin' On Heaven's Door", "artist": "Guns N' Roses", "duration": 342, "music": "assets/img/陈奕迅 - 富士山下.mp3", "poster": "assets/img/陈奕迅.jpg", "lyric": "assets/img/Guns N' Roses - Knockin' On Heaven's Door.lrc" }, { "id": 2, "name": "I Will Be Your Shelter", "artist": "Rebecca Blaylock", "duration": 342, "music": "assets/img/达明一派 - 石头记.mp3", "poster": "assets/img/达明一派.jpg", "lyric": "assets/img/Rebecca Blaylock - I Will Be Your Shelter.lrc" }, { "id": 3, "name": "我恨我痴心", "artist": "刘德华", "duration": 342, "music": "assets/img/好妹妹乐队 - 青城山下白素贞.mp3", "poster": "assets/img/好妹妹乐队.jpg", "lyric": "assets/img/刘德华 - 我恨我痴心.lrc" }, { "id": 4, "name": "不说再见", "artist": "好妹妹乐队", "duration": 342, "music": "assets/img/黄耀明 - 友情岁月.mp3", "poster": "assets/img/黄耀明.jpg", "lyric": "assets/img/好妹妹乐队 - 不说再见.lrc" }, { "id": 5, "name": "青城山下白素贞", "artist": "好妹妹乐队", "duration": 342, "music": "assets/img/江珊 - 梦里水乡.mp3", "poster": "assets/img/江珊.jpg", "lyric": "assets/img/好妹妹乐队 - 青城山下白素贞.lrc" }, { "id": 6, "name": "送情郎(2010.12.11 德云二队张一元晚场)", "artist": "岳云鹏", "duration": 342, "music": "assets/img/岳云鹏 - 送情郎(2010.12.11 德云二队张一元晚场).mp3", "poster": "assets/img/岳云鹏.jpg", "lyric": "assets/img/岳云鹏 - 送情郎(2010.12.11 德云二队张一元晚场).lrc" }, { "id": 7, "name": "往事只能回味", "artist": "岳云鹏,宋小宝", "duration": 342, "music": "assets/img/万晓利 - 女儿情.mp3", "poster": "assets/img/万晓利.jpg", "lyric": "assets/img/岳云鹏,宋小宝 - 往事只能回味.lrc" }, { "id": 8, "name": "天梯(Live) - live", "artist": "张智霖", "duration": 342, "music": "assets/img/万晓利 - 女儿情.mp3", "poster": "assets/img/万晓利.jpg", "lyric": "assets/img/张智霖 - 天梯(Live) - live.lrc" }, { "id": 9, "name": "友情岁月", "artist": "李克勤", "duration": 342, "music": "assets/img/李克勤 - 友情岁月.mp3", "poster": "assets/img/万晓利.jpg", "lyric": "assets/img/李克勤 - 友情岁月.lrc" }, { "id": 10, "name": "合久必婚", "artist": "李克勤", "duration": 342, "music": "assets/img/李克勤 - 合久必婚.mp3", "poster": "assets/img/万晓利.jpg", "lyric": "assets/img/李克勤 - 合久必婚.lrc" }, { "id": 11, "name": "天梯", "artist": "李克勤", "duration": 342, "music": "assets/img/李克勤 - 天梯.mp3", "poster": "assets/img/李克勤.jpg", "lyric": "assets/img/李克勤 - 天梯.lrc" }, { "id": 12, "name": "爱不释手", "artist": "李克勤", "duration": 342, "music": "assets/img/李克勤 - 爱不释手.mp3", "poster": "assets/img/李克勤.jpg", "lyric": "assets/img/李克勤 - 爱不释手.lrc" }, { "id": 13, "name": "飞花", "artist": "李克勤", "duration": 342, "music": "assets/img/李克勤 - 飞花.mp3", "poster": "assets/img/李克勤.jpg", "lyric": "assets/img/李克勤 - 飞花.lrc" }, { "id": 14, "name": "充满希望", "artist": "玛莉亚", "duration": 342, "music": "assets/img/玛莉亚 - 充满希望.mp3", "poster": "assets/img/万晓利.jpg", "lyric": "assets/img/玛莉亚 - 充满希望.lrc" }, { "id": 15, "name": "友谊之光", "artist": "玛莉亚", "duration": 342, "music": "assets/img/玛莉亚 - 友谊之光.mp3", "poster": "assets/img/万晓利.jpg", "lyric": "assets/img/玛莉亚 - 友谊之光.lrc" }, { "id": 16, "name": "老中医", "artist": "花粥", "duration": 342, "music": "assets/img/花粥 - 老中医.mp3", "poster": "assets/img/万晓利.jpg", "lyric": "assets/img/花粥 - 老中医.lrc" }, { "id": 17, "name": "静静的看着你装逼", "artist": "花粥&四四", "duration": 342, "music": "assets/img/花粥&四四 - 静静的看着你装逼.mp3", "poster": "assets/img/万晓利.jpg", "lyric": "assets/img/花粥&四四 - 静静的看着你装逼.lrc" }, { "id": 18, "name": "也曾相识", "artist": "谭咏麟", "duration": 342, "music": "assets/img/谭咏麟 - 也曾相识.mp3", "poster": "assets/img/谭咏麟.jpg", "lyric": "assets/img/谭咏麟 - 也曾相识.lrc" }, { "id": 19, "name": "夏日寒风", "artist": "谭咏麟", "duration": 342, "music": "assets/img/谭咏麟 - 夏日寒风.mp3", "poster": "assets/img/谭咏麟.jpg", "lyric": "assets/img/谭咏麟 - 夏日寒风.lrc" }, { "id": 20, "name": "雾之恋", "artist": "谭咏麟", "duration": 342, "music": "assets/img/谭咏麟 - 雾之恋.mp3", "poster": "assets/img/谭咏麟.jpg", "lyric": "assets/img/谭咏麟 - 雾之恋.lrc" }]

   /**
    * 应用程序主组件
    */
  var App = global.Vue.extend({})

  /**
   * 首页组件
   */
  var Home = global.Vue.extend({
    template:getTemplate('home_tmpl')
  })

 /**
  *  歌曲列表组件
  */
  var Songs = global.Vue.extend({
    template:getTemplate('list_tmpl'),
    data:function(){
      // return { list: []}
      return { 
        list: songs,
        completion:completion
      }
    },
    methods:{
      
    }
  })

  /**
   * 播放器组件
   */
  var Player = global.Vue.extend({
    template:getTemplate('item_tmpl'),
    data:function(){
      return { item: {current:0}}
    },
    route:{ // 在使用路由时，获取当前组件时调用该对象里的方法
      data:function(transition){
        // transition.to.params 得到路由参数
        console.log(transition)
        this.item = {current:0 , playing: true}
        // 从songs数组中查找到相应id的数据 transition.params.id
        var song = songs.find(function(item){
          // console.log(item)
          return item.id == transition.to.params.id
        })

        Object.assign(this.item, song)
        // 创建audio标签
        // var audio = new Audio()
        // console.log(audio.src)
        // console.log(song.music)
        // 设置auido指向的资源
        if(global.decodeURI(audio.src).endsWith(this.item.music)) return

        audio.src = this.item.music
        // 设置自播放
        audio.autoplay = true
        this.item.playing =  true
        // console.log(this.item)
        var ip  = this
    
        // 资源加载完成时获取时长
        audio.addEventListener('loadmetadata',()=>{
          // console.log(this.item)
          this.item.duration = audio.duration
        })

        // 音频播放位置改变时更新时间
        audio.addEventListener('timeupdate',()=>{
          // console.log(this.item)
          this.item.current = audio.currentTime
          // this.item.audio = audio
          // this.item.duration = 347
        })
        // 如果有异步代码操作数据，可以不return数据
        return {}
      }
    },
    methods:{
      convert:convertDuration,
      play:function(){
        if(this.item.playing){
          audio.pause()
        }else{
          audio.play()
        }
        this.item.playing = !this.item.playing
      },
      progress:function(){ // 显示进度
        audio.currentTime = this.item.current
      },
      next:function(){// 下一首
        
      },
      prev:function(){ // 播放上一首
        
      }
    }
  })

  /**
   * 路由，用来根据不同的url来调用相应的组件
   */
   var router = new global.VueRouter()
   router.map({
    '/home':{  // 首页
      name:'home',
      component:Home
    },
    '/songs': {// 歌曲列表
      name: 'list',
      component: Songs
    },
    '/songs/:id': { // 歌曲详情页
      name: 'item',
      component: Player
    }
   })

   router.redirect({'*':'/home'})
   router.start(App,'body')

})(this)